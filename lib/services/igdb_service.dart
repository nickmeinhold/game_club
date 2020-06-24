import 'dart:async';

import 'package:dio/dio.dart';
import 'package:game_club/api_key.dart';
import 'package:game_club/services/igdbapi/igdbapi.pb.dart';

class IGDBService {
  final Dio _dio;
  final _base = 'https://api-v3.igdb.com/';
  final _section = 'games.pb';

  IGDBService(this._dio);

  Future<String> getHttp() async {
    try {
      final response = await _dio.post<List<int>>(_base + _section,
          options: Options(
              headers: api_key_header, responseType: ResponseType.bytes),
          data: 'fields name; limit 10;');

      final gameResult = GameResult.fromBuffer(response.data);

      return gameResult.toDebugString();
    } catch (e) {
      return e.toString();
    }
  }
}
