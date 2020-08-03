import 'dart:async';

import 'package:dio/dio.dart';
import 'package:game_club/services/igdb_api/igdb_api_client/igdbapi.pb.dart';

class IGDBService {
  final Dio _dio;
  final _proxyBaseLocal =
      'http://localhost:5001/game-club-melbourne/us-central1/apiProxy';
  final _proxyBase =
      'https://us-central1-game-club-melbourne.cloudfunctions.net/apiProxy';

  IGDBService(this._dio);

  Future<String> getProxiedGamesString() async {
    try {
      final response = await _dio.post<List<int>>(
        _proxyBaseLocal,
        options: Options(
            headers: <String, String>{'section': 'games'},
            responseType: ResponseType.bytes),
      );

      final gameResult = GameResult.fromBuffer(response.data);

      return gameResult.toDebugString();
    } catch (e) {
      return e.toString();
    }
  }
}
