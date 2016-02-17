# backbone-deep-model-collection-search
A small sideloader for backbone collections to make it work with [backbone-deep-model](https://github.com/kahwee/backbone-deep-model)

### Installation

```
npm install --save backbone-deep-model-collection-search
```

### Usage

```
var BackboneCollection = require('backbone-deep-model-collection-search')(Backbone.Collection)

// Build your own collection from this

var List = BackboneCollection.extend({ ... })

var thisNewList = new List()

thisNewList.deepSearch({'dot.delimited.search.term':true})

// returns array of results, so for no matches [], for 2 matches [model, model]
```

### Why

This stemmed out of my need to deep search collections that contain deep-linked models, as described [in this issue](https://github.com/kahwee/backbone-deep-model/issues/40).

### License 
ISC
