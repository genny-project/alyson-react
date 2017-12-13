import React, { Component } from 'react';
import store from 'client/views/store';

class AskQuery {

    static getQuestionGroup(groupCode) {
        return store.getState().ask.data[groupCode];
    }

    static recursivelyGetAsksForGroup(group) {
        return group.childAsks.map(ask => ask.childAsks ? AskQuery.getAsksForGroup(ask) : ask);
    }
}

export default AskQuery;
