d3_selectionPrototype.text = function(value) {

  var node = this.node();
  // For raphael elements get/set text through paper.
  if (node && node.paper) {
    return arguments.length < 1
        ? node.attr('text') : this.each(typeof value === "function"
        ? function() { var v = value.apply(this, arguments); node.setAttribute('text', v == null ? "" : v); } : value == null
        ? function() { node.setAttribute('text', ''); }
        : function() { node.setAttribute('text', value); });
  }

  return arguments.length < 1
      ? this.node().textContent : this.each(typeof value === "function"
      ? function() { var v = value.apply(this, arguments); this.textContent = v == null ? "" : v; } : value == null
      ? function() { this.textContent = ""; }
      : function() { this.textContent = value; });
};
