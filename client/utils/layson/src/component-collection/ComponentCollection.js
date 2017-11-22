class ComponentCollection {
  constructor( components ) {
    if ( !components ) {
      components = {};
    }

    this.components = components;
  }

  get( key ) {
    return this.components[ key ];
  }
}

export default ComponentCollection;
