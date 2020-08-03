import 'dart:typed_data';

import 'package:dio/dio.dart';

class FakeDio implements Dio {
  @override
  HttpClientAdapter httpClientAdapter;

  @override
  BaseOptions options;

  @override
  Transformer transformer;

  dynamic _data;

  void setData(dynamic data) => _data = data;

  @override
  void clear() {
    // TODO: implement clear
  }

  @override
  void close({bool force = false}) {
    // TODO: implement close
  }

  @override
  Future<Response<T>> delete<T>(String path,
      {dynamic data,
      Map<String, dynamic> queryParameters,
      Options options,
      CancelToken cancelToken}) {
    // TODO: implement delete
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> deleteUri<T>(Uri uri,
      {dynamic data, Options options, CancelToken cancelToken}) {
    // TODO: implement deleteUri
    throw UnimplementedError();
  }

  @override
  Future<Response> download(String urlPath, dynamic savePath,
      {onReceiveProgress,
      Map<String, dynamic> queryParameters,
      CancelToken cancelToken,
      bool deleteOnError = true,
      String lengthHeader = Headers.contentLengthHeader,
      dynamic data,
      Options options}) {
    // TODO: implement download
    throw UnimplementedError();
  }

  @override
  Future<Response> downloadUri(Uri uri, dynamic savePath,
      {onReceiveProgress,
      CancelToken cancelToken,
      bool deleteOnError = true,
      String lengthHeader = Headers.contentLengthHeader,
      dynamic data,
      Options options}) {
    // TODO: implement downloadUri
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> get<T>(String path,
      {Map<String, dynamic> queryParameters,
      Options options,
      CancelToken cancelToken,
      onReceiveProgress}) {
    // TODO: implement get
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> getUri<T>(Uri uri,
      {Options options, CancelToken cancelToken, onReceiveProgress}) {
    // TODO: implement getUri
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> head<T>(String path,
      {dynamic data,
      Map<String, dynamic> queryParameters,
      Options options,
      CancelToken cancelToken}) {
    // TODO: implement head
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> headUri<T>(Uri uri,
      {dynamic data, Options options, CancelToken cancelToken}) {
    // TODO: implement headUri
    throw UnimplementedError();
  }

  @override
  // TODO: implement interceptors
  Interceptors get interceptors => throw UnimplementedError();

  @override
  void lock() {
    // TODO: implement lock
  }

  @override
  Future<Response<T>> patch<T>(String path,
      {dynamic data,
      Map<String, dynamic> queryParameters,
      Options options,
      CancelToken cancelToken,
      onSendProgress,
      onReceiveProgress}) {
    // TODO: implement patch
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> patchUri<T>(Uri uri,
      {dynamic data,
      Options options,
      CancelToken cancelToken,
      onSendProgress,
      onReceiveProgress}) {
    // TODO: implement patchUri
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> post<T>(String path,
      {dynamic data,
      Map<String, dynamic> queryParameters,
      Options options,
      CancelToken cancelToken,
      onSendProgress,
      onReceiveProgress}) {
    final future = Future.value(Response<T>(data: _data as T));
    return future;
  }

  @override
  Future<Response<T>> postUri<T>(Uri uri,
      {dynamic data,
      Options options,
      CancelToken cancelToken,
      onSendProgress,
      onReceiveProgress}) {
    // TODO: implement postUri
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> put<T>(String path,
      {dynamic data,
      Map<String, dynamic> queryParameters,
      Options options,
      CancelToken cancelToken,
      onSendProgress,
      onReceiveProgress}) {
    // TODO: implement put
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> putUri<T>(Uri uri,
      {dynamic data,
      Options options,
      CancelToken cancelToken,
      onSendProgress,
      onReceiveProgress}) {
    // TODO: implement putUri
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> reject<T>(dynamic err) {
    // TODO: implement reject
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> request<T>(String path,
      {dynamic data,
      Map<String, dynamic> queryParameters,
      CancelToken cancelToken,
      Options options,
      onSendProgress,
      onReceiveProgress}) {
    // TODO: implement request
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> requestUri<T>(Uri uri,
      {dynamic data,
      CancelToken cancelToken,
      Options options,
      onSendProgress,
      onReceiveProgress}) {
    // TODO: implement requestUri
    throw UnimplementedError();
  }

  @override
  Future<Response<T>> resolve<T>(dynamic response) {
    // TODO: implement resolve
    throw UnimplementedError();
  }

  @override
  void unlock() {
    // TODO: implement unlock
  }
}
