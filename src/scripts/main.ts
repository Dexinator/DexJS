import contextCursor from "webpack-4-boilerplate/contextCursor";


var mq = window.matchMedia("(min-width: 640px)");
if (mq.matches) {
  contextCursor({
    radius: 25,
  });
}
