import 'dart:async';

import 'package:dio/dio.dart';
import 'package:game_club/api_key.dart';
import 'package:game_club/services/igdbapi/igdbapi.pb.dart';

class IGDBService {
  final Dio _dio;
  // final _base = 'https://api-v3.igdb.com/';
  // final _section = 'games.pb';
  final _base =
      'https://us-central1-game-club-melbourne.cloudfunctions.net/apiProxy';
  final _section = 'games';

  IGDBService(this._dio) {
    // attempted to proxy with dio
    // doesn't work as _dio.httpClientAdapter is not a DefaultHttpClientAdapter
    // when app is on web and BrowserHttpClientAdapter does not seem to allow
    // setting or modifying the underlying HttpClient

    // (_dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate =
    //     (HttpClient client) {
    //   client.findProxy = (Uri uri) {
    //     // proxy all request to cloud function
    //     return 'PROXY https://us-central1-game-club-melbourne.cloudfunctions.net';
    //   };
    // };
  }

  Future<String> getHttp() async {
    final _headers = api_key_header;
    _headers['section'] = _section;
    try {
      final response = await _dio.post<List<int>>(_base,
          options: Options(headers: _headers, responseType: ResponseType.bytes),
          data: 'fields name; limit 10;');

      final gameResult = GameResult.fromBuffer(response.data);

      return gameResult.toDebugString();
    } catch (e) {
      return e.toString();
    }
  }
}
