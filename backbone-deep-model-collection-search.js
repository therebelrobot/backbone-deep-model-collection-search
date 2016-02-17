var deepCollectionSearch = function deepCollectionSearch(Collection) {
  var Collection = Collection.extend({
    deepSearch: function searchLogListCollection(props) {
      var modelsToReturn = []
      this.models.forEach(function(model){
        var modelMatches = true
        Object.keys(props).forEach(function(key){
          if(model.get(key) !== props[key]){
            modelMatches = false
          }
        })
        if(modelMatches){
          modelsToReturn.push(model)
        }
      })
      return modelsToReturn
    }
  })
  return Collection
}

module.exports = deepCollectionSearch
