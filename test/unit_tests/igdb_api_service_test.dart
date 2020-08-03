import 'package:game_club/services/igdb_api/igdb_api_service.dart';
import 'package:test/test.dart';

import '../mocks/agdb_api_mocks.dart';
import '../mocks/dio_mocks.dart';

void main() {
  group('IGDB API Service ', () {
    test('getProxiedGamesString() correctly decodes known data', () async {
      // create a fake that will return the mocked data
      final fakeDio = FakeDio();
      fakeDio.setData(mockGameResultSingleGameData);

      // create the sut with the faked dio that will return known data
      final service = IGDBService(fakeDio);

      // make the service all we are testing
      final gamesString = await service.getProxiedGamesString();

      // check the service dedcoded the data into the expected object
      expect(
          gamesString,
          'games: {\n'
          '  id: 58722\n'
          '  name: Genkai Tokki: Seven Pirates\n'
          '}\n'
          '');
    });
  });
}
