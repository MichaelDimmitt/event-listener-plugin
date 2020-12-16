Array.from(document.querySelectorAll('*'))
  .reduce(function(pre, dom){
    var evtObj = getEventListeners(dom)
    Object.keys(evtObj).forEach(function (evt) {
      if (typeof pre[evt] === 'undefined') {
        pre[evt] = 0
      }
      pre[evt] += evtObj[evt].length
    })
    return pre
  }, {})
