/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./todo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.TodoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.TodoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Todo,
 *   !proto.TodosResponse>}
 */
const methodDescriptor_TodoService_createTodo = new grpc.web.MethodDescriptor(
  '/TodoService/createTodo',
  grpc.web.MethodType.UNARY,
  proto.Todo,
  proto.TodosResponse,
  /**
   * @param {!proto.Todo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodosResponse.deserializeBinary
);


/**
 * @param {!proto.Todo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TodosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TodosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.createTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/createTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_createTodo,
      callback);
};


/**
 * @param {!proto.Todo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TodosResponse>}
 *     Promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.createTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/createTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_createTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TodoID,
 *   !proto.TodoResponse>}
 */
const methodDescriptor_TodoService_getTodo = new grpc.web.MethodDescriptor(
  '/TodoService/getTodo',
  grpc.web.MethodType.UNARY,
  proto.TodoID,
  proto.TodoResponse,
  /**
   * @param {!proto.TodoID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodoResponse.deserializeBinary
);


/**
 * @param {!proto.TodoID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TodoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TodoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.getTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/getTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_getTodo,
      callback);
};


/**
 * @param {!proto.TodoID} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TodoResponse>}
 *     Promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.getTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/getTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_getTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetTodos,
 *   !proto.TodosResponse>}
 */
const methodDescriptor_TodoService_getAllTodos = new grpc.web.MethodDescriptor(
  '/TodoService/getAllTodos',
  grpc.web.MethodType.UNARY,
  proto.GetTodos,
  proto.TodosResponse,
  /**
   * @param {!proto.GetTodos} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodosResponse.deserializeBinary
);


/**
 * @param {!proto.GetTodos} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TodosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TodosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.getAllTodos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/getAllTodos',
      request,
      metadata || {},
      methodDescriptor_TodoService_getAllTodos,
      callback);
};


/**
 * @param {!proto.GetTodos} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TodosResponse>}
 *     Promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.getAllTodos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/getAllTodos',
      request,
      metadata || {},
      methodDescriptor_TodoService_getAllTodos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TodoID,
 *   !proto.TodosResponse>}
 */
const methodDescriptor_TodoService_checkTodo = new grpc.web.MethodDescriptor(
  '/TodoService/checkTodo',
  grpc.web.MethodType.UNARY,
  proto.TodoID,
  proto.TodosResponse,
  /**
   * @param {!proto.TodoID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodosResponse.deserializeBinary
);


/**
 * @param {!proto.TodoID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TodosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TodosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.checkTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/checkTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_checkTodo,
      callback);
};


/**
 * @param {!proto.TodoID} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TodosResponse>}
 *     Promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.checkTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/checkTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_checkTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Todo,
 *   !proto.TodosResponse>}
 */
const methodDescriptor_TodoService_editTodo = new grpc.web.MethodDescriptor(
  '/TodoService/editTodo',
  grpc.web.MethodType.UNARY,
  proto.Todo,
  proto.TodosResponse,
  /**
   * @param {!proto.Todo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodosResponse.deserializeBinary
);


/**
 * @param {!proto.Todo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TodosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TodosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.editTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/editTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_editTodo,
      callback);
};


/**
 * @param {!proto.Todo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TodosResponse>}
 *     Promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.editTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/editTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_editTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TodoID,
 *   !proto.TodosResponse>}
 */
const methodDescriptor_TodoService_deleteTodo = new grpc.web.MethodDescriptor(
  '/TodoService/deleteTodo',
  grpc.web.MethodType.UNARY,
  proto.TodoID,
  proto.TodosResponse,
  /**
   * @param {!proto.TodoID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TodosResponse.deserializeBinary
);


/**
 * @param {!proto.TodoID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TodosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TodosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.deleteTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/deleteTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_deleteTodo,
      callback);
};


/**
 * @param {!proto.TodoID} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TodosResponse>}
 *     Promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.deleteTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/deleteTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_deleteTodo);
};


module.exports = proto;

