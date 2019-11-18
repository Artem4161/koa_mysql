class BaseComponent {
  sendResponse(ctx, content, message, code = 200) {
    const response = {
      content,
    };
    if (message) {
      response.message = message;
    }
    ctx.status = code;
    ctx.body = response;
    return ctx;
  }

  sendError(ctx, code, error, message) {
    const response = {
      content: null,
      error,
    };
    if (message) {
      response.message = message;
    }
    ctx.status = code;
    ctx.body = response;
    return ctx;
  }
}

module.exports = BaseComponent;
