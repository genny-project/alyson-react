import React, { Component } from 'react';
import store from '../../utilities/storage/store';

class BaseEntityQuery {

    static getEntityChildren(code) {

        const relationships = store.getState().baseEntity.relationships[code];
        let items = relationships ? Object.keys(relationships).filter(key => relationships[key]).map(code => store.getState().baseEntity.data[code]) : [];

        let rootEntity = BaseEntityQuery.getBaseEntity(code);

        items = items.map(item => {

            // order by weight if found in links
            let weight = 0;
            if(rootEntity && rootEntity.links) {

                let currentLinks = rootEntity.links.filter(x => {
                    return x.link.targetCode == item.code
                });

                weight = currentLinks.length > 0 ? currentLinks[0].weight : weight;
            }

            const children = this.getEntityChildren(item.code);
            item.children = children;
            item.weight = weight;
            return item;
        });

        return items.sort((x, y) => x.weight > y.weight);
    }

    static getAlias = (alias_code) => {

        let aliases = store.getState().baseEntity.aliases;
        let matchingAliases = Object.keys(aliases).filter(x => x == alias_code);
        if(matchingAliases.length > 0) {

            let be_code = aliases[matchingAliases[0]];
            let baseEntities = store.getState().baseEntity.data;
            let matchingEntities = Object.keys(baseEntities).filter(x => x == be_code);
            if(matchingEntities.length > 0) {
                return baseEntities[matchingEntities[0]];
            }
        }

        return null;
    }

    static getBaseEntity = (code) => {
        return store.getState().baseEntity.data[code];
    }

    static getAliasAttribute = (alias_code, attribute_code) => {

        let be = BaseEntityQuery.getAlias(alias_code);
        if(be && be.attributes) {
            return be.attributes[attribute_code];
        }

        return null;
    }

    static getBaseEntityAttribute = (baseEntityCode, attribute_code) => {

        let be = BaseEntityQuery.getBaseEntity(baseEntityCode);
        if(be && be.attributes) {
            return be.attributes[attribute_code];
        }

        return null;
    }
}

export default BaseEntityQuery;