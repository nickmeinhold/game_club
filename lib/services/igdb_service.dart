import 'package:dio/dio.dart';

class IGDBService {
  Future<String> getHttp() async {
    try {
      final response = await Dio().get("http://www.google.com");
      return response.toString();
    } catch (e) {
      return e;
    }
  }
}
