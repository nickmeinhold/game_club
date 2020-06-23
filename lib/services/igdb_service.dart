import 'dart:async';

import 'package:dio/dio.dart';
import 'package:game_club/api_key.dart';

class IGDBService {
  final Dio _dio;
  final _base = 'https://api-v3.igdb.com/';
  final _section = 'games.pb';

  IGDBService(this._dio);

  Future<String> getHttp() async {
    try {
      final response = await _dio.post<dynamic>(
        _base + _section,
        options: Options(
          headers: api_key_header,
        ),
      );

      return response.toString();
    } catch (e) {
      return e.toString();
    }
  }
}
