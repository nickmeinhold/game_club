# game_club

Keep a list and vote on games for the next GameClub meeting. Read and add reviews for games. Uses the IGDB API. 

## Common Commands 

firebase deploy --only hosting:game-club-melbourne 

## Generate typescript client 

Using [stephenh/ts-proto: An idiomatic protobuf generator for TypeScript](https://github.com/stephenh/ts-proto)

```sh
cd functions
npm install ts-proto --save-dev
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src ./igdbapi.proto 
```

## Setup protobuf and generate dart client 

This has already been done for this project but for reference: 

1.  downloaded <https://api-v3.igdb.com/igdbapi.proto>, see [IGDB API v3 docs](https://api-docs.igdb.com/#what-changed) 

2.  installed protobuf 
```sh
brew install protobuf
```

3.  installed the dart protoc plugin 
```sh
pub global activate protoc_plugin 
```

4.  generated the files for the IGDB API
```sh
protoc igdbapi.proto --dart_out=. --proto_path=/path/to/this/project/
```

  - see [protobuf/protoc_plugin](https://github.com/dart-lang/protobuf/tree/master/protoc_plugin) for notes on how to use the plugin

5.  As described in <https://github.com/grpc/grpc-dart/issues/76>, also needed to generate the timestamp files 

  - found a `timestamp.proto` file in a folder cloned from <https://github.com/protocolbuffers/protobuf> 

8.  generated the files for the timestamp library
```sh
protoc timestamp.proto --dart_out=. --proto_path=/path/to/this/project/
```

9.  added the files to `lib/services/google/protobuf/`

## Deploy to Firebase

- create a firebase project 
- `firebase init` and select 
  - your project 
  - hosting 
- `firebase deploy --only functions`
- `firebase deploy --only hosting:<project-name>`

## Setup cloud functions emulator 

see: [Run functions locally  |  Firebase](https://firebase.google.com/docs/functions/local-emulator) 
- `firebase functions:config:get > .runtimeconfig.json` 

Run with 
- `firebase emulators:start --only functions` 