///
//  Generated code. Do not modify.
//  source: igdbapi.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:fixnum/fixnum.dart' as $fixnum;
import 'package:protobuf/protobuf.dart' as $pb;

import 'google/protobuf/timestamp.pb.dart' as $0;

import 'igdbapi.pbenum.dart';

export 'igdbapi.pbenum.dart';

class Count extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Count', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..aInt64(1, 'count')
    ..hasRequiredFields = false
  ;

  Count._() : super();
  factory Count() => create();
  factory Count.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Count.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Count clone() => Count()..mergeFromMessage(this);
  Count copyWith(void Function(Count) updates) => super.copyWith((message) => updates(message as Count));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Count create() => Count._();
  Count createEmptyInstance() => create();
  static $pb.PbList<Count> createRepeated() => $pb.PbList<Count>();
  @$core.pragma('dart2js:noInline')
  static Count getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Count>(create);
  static Count _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get count => $_getI64(0);
  @$pb.TagNumber(1)
  set count($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCount() => $_has(0);
  @$pb.TagNumber(1)
  void clearCount() => clearField(1);
}

class MultiQueryResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('MultiQueryResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..aOS(1, 'name')
    ..p<$core.List<$core.int>>(2, 'results', $pb.PbFieldType.PY)
    ..aInt64(3, 'count')
    ..hasRequiredFields = false
  ;

  MultiQueryResult._() : super();
  factory MultiQueryResult() => create();
  factory MultiQueryResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MultiQueryResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  MultiQueryResult clone() => MultiQueryResult()..mergeFromMessage(this);
  MultiQueryResult copyWith(void Function(MultiQueryResult) updates) => super.copyWith((message) => updates(message as MultiQueryResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MultiQueryResult create() => MultiQueryResult._();
  MultiQueryResult createEmptyInstance() => create();
  static $pb.PbList<MultiQueryResult> createRepeated() => $pb.PbList<MultiQueryResult>();
  @$core.pragma('dart2js:noInline')
  static MultiQueryResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MultiQueryResult>(create);
  static MultiQueryResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.List<$core.int>> get results => $_getList(1);

  @$pb.TagNumber(3)
  $fixnum.Int64 get count => $_getI64(2);
  @$pb.TagNumber(3)
  set count($fixnum.Int64 v) { $_setInt64(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasCount() => $_has(2);
  @$pb.TagNumber(3)
  void clearCount() => clearField(3);
}

class MultiQueryResultArray extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('MultiQueryResultArray', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<MultiQueryResult>(1, 'result', $pb.PbFieldType.PM, subBuilder: MultiQueryResult.create)
    ..hasRequiredFields = false
  ;

  MultiQueryResultArray._() : super();
  factory MultiQueryResultArray() => create();
  factory MultiQueryResultArray.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MultiQueryResultArray.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  MultiQueryResultArray clone() => MultiQueryResultArray()..mergeFromMessage(this);
  MultiQueryResultArray copyWith(void Function(MultiQueryResultArray) updates) => super.copyWith((message) => updates(message as MultiQueryResultArray));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MultiQueryResultArray create() => MultiQueryResultArray._();
  MultiQueryResultArray createEmptyInstance() => create();
  static $pb.PbList<MultiQueryResultArray> createRepeated() => $pb.PbList<MultiQueryResultArray>();
  @$core.pragma('dart2js:noInline')
  static MultiQueryResultArray getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MultiQueryResultArray>(create);
  static MultiQueryResultArray _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<MultiQueryResult> get result => $_getList(0);
}

class AchievementResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AchievementResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Achievement>(1, 'achievements', $pb.PbFieldType.PM, subBuilder: Achievement.create)
    ..hasRequiredFields = false
  ;

  AchievementResult._() : super();
  factory AchievementResult() => create();
  factory AchievementResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AchievementResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AchievementResult clone() => AchievementResult()..mergeFromMessage(this);
  AchievementResult copyWith(void Function(AchievementResult) updates) => super.copyWith((message) => updates(message as AchievementResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AchievementResult create() => AchievementResult._();
  AchievementResult createEmptyInstance() => create();
  static $pb.PbList<AchievementResult> createRepeated() => $pb.PbList<AchievementResult>();
  @$core.pragma('dart2js:noInline')
  static AchievementResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AchievementResult>(create);
  static AchievementResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Achievement> get achievements => $_getList(0);
}

class Achievement extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Achievement', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<AchievementIcon>(2, 'achievementIcon', subBuilder: AchievementIcon.create)
    ..e<AchievementCategoryEnum>(3, 'category', $pb.PbFieldType.OE, defaultOrMaker: AchievementCategoryEnum.ACHIEVEMENT_CATEGORY_NULL, valueOf: AchievementCategoryEnum.valueOf, enumValues: AchievementCategoryEnum.values)
    ..aOM<$0.Timestamp>(4, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(5, 'description')
    ..aOS(6, 'externalId')
    ..aOM<Game>(7, 'game', subBuilder: Game.create)
    ..e<RegionLanguageEnum>(8, 'language', $pb.PbFieldType.OE, defaultOrMaker: RegionLanguageEnum.REGION_LANGUAGE_NULL, valueOf: RegionLanguageEnum.valueOf, enumValues: RegionLanguageEnum.values)
    ..aOM<AchievementIcon>(9, 'lockedAchievementIcon', subBuilder: AchievementIcon.create)
    ..aOS(10, 'name')
    ..a<$core.int>(11, 'owners', $pb.PbFieldType.O3)
    ..a<$core.double>(12, 'ownersPercentage', $pb.PbFieldType.OD)
    ..e<AchievementRankEnum>(13, 'rank', $pb.PbFieldType.OE, defaultOrMaker: AchievementRankEnum.ACHIEVEMENT_RANK_NULL, valueOf: AchievementRankEnum.valueOf, enumValues: AchievementRankEnum.values)
    ..aOS(14, 'slug')
    ..p<$core.int>(15, 'tags', $pb.PbFieldType.P3)
    ..aOM<$0.Timestamp>(16, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(17, 'checksum')
    ..hasRequiredFields = false
  ;

  Achievement._() : super();
  factory Achievement() => create();
  factory Achievement.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Achievement.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Achievement clone() => Achievement()..mergeFromMessage(this);
  Achievement copyWith(void Function(Achievement) updates) => super.copyWith((message) => updates(message as Achievement));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Achievement create() => Achievement._();
  Achievement createEmptyInstance() => create();
  static $pb.PbList<Achievement> createRepeated() => $pb.PbList<Achievement>();
  @$core.pragma('dart2js:noInline')
  static Achievement getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Achievement>(create);
  static Achievement _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  AchievementIcon get achievementIcon => $_getN(1);
  @$pb.TagNumber(2)
  set achievementIcon(AchievementIcon v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasAchievementIcon() => $_has(1);
  @$pb.TagNumber(2)
  void clearAchievementIcon() => clearField(2);
  @$pb.TagNumber(2)
  AchievementIcon ensureAchievementIcon() => $_ensure(1);

  @$pb.TagNumber(3)
  AchievementCategoryEnum get category => $_getN(2);
  @$pb.TagNumber(3)
  set category(AchievementCategoryEnum v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCategory() => $_has(2);
  @$pb.TagNumber(3)
  void clearCategory() => clearField(3);

  @$pb.TagNumber(4)
  $0.Timestamp get createdAt => $_getN(3);
  @$pb.TagNumber(4)
  set createdAt($0.Timestamp v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCreatedAt() => $_has(3);
  @$pb.TagNumber(4)
  void clearCreatedAt() => clearField(4);
  @$pb.TagNumber(4)
  $0.Timestamp ensureCreatedAt() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.String get description => $_getSZ(4);
  @$pb.TagNumber(5)
  set description($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasDescription() => $_has(4);
  @$pb.TagNumber(5)
  void clearDescription() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get externalId => $_getSZ(5);
  @$pb.TagNumber(6)
  set externalId($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasExternalId() => $_has(5);
  @$pb.TagNumber(6)
  void clearExternalId() => clearField(6);

  @$pb.TagNumber(7)
  Game get game => $_getN(6);
  @$pb.TagNumber(7)
  set game(Game v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasGame() => $_has(6);
  @$pb.TagNumber(7)
  void clearGame() => clearField(7);
  @$pb.TagNumber(7)
  Game ensureGame() => $_ensure(6);

  @$pb.TagNumber(8)
  RegionLanguageEnum get language => $_getN(7);
  @$pb.TagNumber(8)
  set language(RegionLanguageEnum v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasLanguage() => $_has(7);
  @$pb.TagNumber(8)
  void clearLanguage() => clearField(8);

  @$pb.TagNumber(9)
  AchievementIcon get lockedAchievementIcon => $_getN(8);
  @$pb.TagNumber(9)
  set lockedAchievementIcon(AchievementIcon v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasLockedAchievementIcon() => $_has(8);
  @$pb.TagNumber(9)
  void clearLockedAchievementIcon() => clearField(9);
  @$pb.TagNumber(9)
  AchievementIcon ensureLockedAchievementIcon() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.String get name => $_getSZ(9);
  @$pb.TagNumber(10)
  set name($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasName() => $_has(9);
  @$pb.TagNumber(10)
  void clearName() => clearField(10);

  @$pb.TagNumber(11)
  $core.int get owners => $_getIZ(10);
  @$pb.TagNumber(11)
  set owners($core.int v) { $_setSignedInt32(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasOwners() => $_has(10);
  @$pb.TagNumber(11)
  void clearOwners() => clearField(11);

  @$pb.TagNumber(12)
  $core.double get ownersPercentage => $_getN(11);
  @$pb.TagNumber(12)
  set ownersPercentage($core.double v) { $_setDouble(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasOwnersPercentage() => $_has(11);
  @$pb.TagNumber(12)
  void clearOwnersPercentage() => clearField(12);

  @$pb.TagNumber(13)
  AchievementRankEnum get rank => $_getN(12);
  @$pb.TagNumber(13)
  set rank(AchievementRankEnum v) { setField(13, v); }
  @$pb.TagNumber(13)
  $core.bool hasRank() => $_has(12);
  @$pb.TagNumber(13)
  void clearRank() => clearField(13);

  @$pb.TagNumber(14)
  $core.String get slug => $_getSZ(13);
  @$pb.TagNumber(14)
  set slug($core.String v) { $_setString(13, v); }
  @$pb.TagNumber(14)
  $core.bool hasSlug() => $_has(13);
  @$pb.TagNumber(14)
  void clearSlug() => clearField(14);

  @$pb.TagNumber(15)
  $core.List<$core.int> get tags => $_getList(14);

  @$pb.TagNumber(16)
  $0.Timestamp get updatedAt => $_getN(15);
  @$pb.TagNumber(16)
  set updatedAt($0.Timestamp v) { setField(16, v); }
  @$pb.TagNumber(16)
  $core.bool hasUpdatedAt() => $_has(15);
  @$pb.TagNumber(16)
  void clearUpdatedAt() => clearField(16);
  @$pb.TagNumber(16)
  $0.Timestamp ensureUpdatedAt() => $_ensure(15);

  @$pb.TagNumber(17)
  $core.String get checksum => $_getSZ(16);
  @$pb.TagNumber(17)
  set checksum($core.String v) { $_setString(16, v); }
  @$pb.TagNumber(17)
  $core.bool hasChecksum() => $_has(16);
  @$pb.TagNumber(17)
  void clearChecksum() => clearField(17);
}

class AchievementIconResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AchievementIconResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<AchievementIcon>(1, 'achievementicons', $pb.PbFieldType.PM, subBuilder: AchievementIcon.create)
    ..hasRequiredFields = false
  ;

  AchievementIconResult._() : super();
  factory AchievementIconResult() => create();
  factory AchievementIconResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AchievementIconResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AchievementIconResult clone() => AchievementIconResult()..mergeFromMessage(this);
  AchievementIconResult copyWith(void Function(AchievementIconResult) updates) => super.copyWith((message) => updates(message as AchievementIconResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AchievementIconResult create() => AchievementIconResult._();
  AchievementIconResult createEmptyInstance() => create();
  static $pb.PbList<AchievementIconResult> createRepeated() => $pb.PbList<AchievementIconResult>();
  @$core.pragma('dart2js:noInline')
  static AchievementIconResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AchievementIconResult>(create);
  static AchievementIconResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<AchievementIcon> get achievementicons => $_getList(0);
}

class AchievementIcon extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AchievementIcon', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..a<$core.int>(4, 'height', $pb.PbFieldType.O3)
    ..aOS(5, 'imageId')
    ..aOS(6, 'url')
    ..a<$core.int>(7, 'width', $pb.PbFieldType.O3)
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  AchievementIcon._() : super();
  factory AchievementIcon() => create();
  factory AchievementIcon.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AchievementIcon.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AchievementIcon clone() => AchievementIcon()..mergeFromMessage(this);
  AchievementIcon copyWith(void Function(AchievementIcon) updates) => super.copyWith((message) => updates(message as AchievementIcon));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AchievementIcon create() => AchievementIcon._();
  AchievementIcon createEmptyInstance() => create();
  static $pb.PbList<AchievementIcon> createRepeated() => $pb.PbList<AchievementIcon>();
  @$core.pragma('dart2js:noInline')
  static AchievementIcon getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AchievementIcon>(create);
  static AchievementIcon _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get height => $_getIZ(3);
  @$pb.TagNumber(4)
  set height($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHeight() => $_has(3);
  @$pb.TagNumber(4)
  void clearHeight() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get imageId => $_getSZ(4);
  @$pb.TagNumber(5)
  set imageId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasImageId() => $_has(4);
  @$pb.TagNumber(5)
  void clearImageId() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get width => $_getIZ(6);
  @$pb.TagNumber(7)
  set width($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasWidth() => $_has(6);
  @$pb.TagNumber(7)
  void clearWidth() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class AgeRatingResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AgeRatingResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<AgeRating>(1, 'ageratings', $pb.PbFieldType.PM, subBuilder: AgeRating.create)
    ..hasRequiredFields = false
  ;

  AgeRatingResult._() : super();
  factory AgeRatingResult() => create();
  factory AgeRatingResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AgeRatingResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AgeRatingResult clone() => AgeRatingResult()..mergeFromMessage(this);
  AgeRatingResult copyWith(void Function(AgeRatingResult) updates) => super.copyWith((message) => updates(message as AgeRatingResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AgeRatingResult create() => AgeRatingResult._();
  AgeRatingResult createEmptyInstance() => create();
  static $pb.PbList<AgeRatingResult> createRepeated() => $pb.PbList<AgeRatingResult>();
  @$core.pragma('dart2js:noInline')
  static AgeRatingResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AgeRatingResult>(create);
  static AgeRatingResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<AgeRating> get ageratings => $_getList(0);
}

class AgeRating extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AgeRating', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<AgeRatingCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: AgeRatingCategoryEnum.AGERATING_CATEGORY_NULL, valueOf: AgeRatingCategoryEnum.valueOf, enumValues: AgeRatingCategoryEnum.values)
    ..pc<AgeRatingContentDescription>(3, 'contentDescriptions', $pb.PbFieldType.PM, subBuilder: AgeRatingContentDescription.create)
    ..e<AgeRatingRatingEnum>(4, 'rating', $pb.PbFieldType.OE, defaultOrMaker: AgeRatingRatingEnum.AGERATING_RATING_NULL, valueOf: AgeRatingRatingEnum.valueOf, enumValues: AgeRatingRatingEnum.values)
    ..aOS(5, 'ratingCoverUrl')
    ..aOS(6, 'synopsis')
    ..aOS(7, 'checksum')
    ..hasRequiredFields = false
  ;

  AgeRating._() : super();
  factory AgeRating() => create();
  factory AgeRating.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AgeRating.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AgeRating clone() => AgeRating()..mergeFromMessage(this);
  AgeRating copyWith(void Function(AgeRating) updates) => super.copyWith((message) => updates(message as AgeRating));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AgeRating create() => AgeRating._();
  AgeRating createEmptyInstance() => create();
  static $pb.PbList<AgeRating> createRepeated() => $pb.PbList<AgeRating>();
  @$core.pragma('dart2js:noInline')
  static AgeRating getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AgeRating>(create);
  static AgeRating _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  AgeRatingCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(AgeRatingCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<AgeRatingContentDescription> get contentDescriptions => $_getList(2);

  @$pb.TagNumber(4)
  AgeRatingRatingEnum get rating => $_getN(3);
  @$pb.TagNumber(4)
  set rating(AgeRatingRatingEnum v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasRating() => $_has(3);
  @$pb.TagNumber(4)
  void clearRating() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get ratingCoverUrl => $_getSZ(4);
  @$pb.TagNumber(5)
  set ratingCoverUrl($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasRatingCoverUrl() => $_has(4);
  @$pb.TagNumber(5)
  void clearRatingCoverUrl() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get synopsis => $_getSZ(5);
  @$pb.TagNumber(6)
  set synopsis($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasSynopsis() => $_has(5);
  @$pb.TagNumber(6)
  void clearSynopsis() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get checksum => $_getSZ(6);
  @$pb.TagNumber(7)
  set checksum($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasChecksum() => $_has(6);
  @$pb.TagNumber(7)
  void clearChecksum() => clearField(7);
}

class AgeRatingContentDescriptionResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AgeRatingContentDescriptionResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<AgeRatingContentDescription>(1, 'ageratingcontentdescriptions', $pb.PbFieldType.PM, subBuilder: AgeRatingContentDescription.create)
    ..hasRequiredFields = false
  ;

  AgeRatingContentDescriptionResult._() : super();
  factory AgeRatingContentDescriptionResult() => create();
  factory AgeRatingContentDescriptionResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AgeRatingContentDescriptionResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AgeRatingContentDescriptionResult clone() => AgeRatingContentDescriptionResult()..mergeFromMessage(this);
  AgeRatingContentDescriptionResult copyWith(void Function(AgeRatingContentDescriptionResult) updates) => super.copyWith((message) => updates(message as AgeRatingContentDescriptionResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AgeRatingContentDescriptionResult create() => AgeRatingContentDescriptionResult._();
  AgeRatingContentDescriptionResult createEmptyInstance() => create();
  static $pb.PbList<AgeRatingContentDescriptionResult> createRepeated() => $pb.PbList<AgeRatingContentDescriptionResult>();
  @$core.pragma('dart2js:noInline')
  static AgeRatingContentDescriptionResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AgeRatingContentDescriptionResult>(create);
  static AgeRatingContentDescriptionResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<AgeRatingContentDescription> get ageratingcontentdescriptions => $_getList(0);
}

class AgeRatingContentDescription extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AgeRatingContentDescription', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<AgeRatingRatingEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: AgeRatingRatingEnum.AGERATING_RATING_NULL, valueOf: AgeRatingRatingEnum.valueOf, enumValues: AgeRatingRatingEnum.values)
    ..aOS(3, 'description')
    ..aOS(4, 'checksum')
    ..hasRequiredFields = false
  ;

  AgeRatingContentDescription._() : super();
  factory AgeRatingContentDescription() => create();
  factory AgeRatingContentDescription.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AgeRatingContentDescription.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AgeRatingContentDescription clone() => AgeRatingContentDescription()..mergeFromMessage(this);
  AgeRatingContentDescription copyWith(void Function(AgeRatingContentDescription) updates) => super.copyWith((message) => updates(message as AgeRatingContentDescription));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AgeRatingContentDescription create() => AgeRatingContentDescription._();
  AgeRatingContentDescription createEmptyInstance() => create();
  static $pb.PbList<AgeRatingContentDescription> createRepeated() => $pb.PbList<AgeRatingContentDescription>();
  @$core.pragma('dart2js:noInline')
  static AgeRatingContentDescription getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AgeRatingContentDescription>(create);
  static AgeRatingContentDescription _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  AgeRatingRatingEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(AgeRatingRatingEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get description => $_getSZ(2);
  @$pb.TagNumber(3)
  set description($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasDescription() => $_has(2);
  @$pb.TagNumber(3)
  void clearDescription() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get checksum => $_getSZ(3);
  @$pb.TagNumber(4)
  set checksum($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasChecksum() => $_has(3);
  @$pb.TagNumber(4)
  void clearChecksum() => clearField(4);
}

class AlternativeNameResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AlternativeNameResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<AlternativeName>(1, 'alternativenames', $pb.PbFieldType.PM, subBuilder: AlternativeName.create)
    ..hasRequiredFields = false
  ;

  AlternativeNameResult._() : super();
  factory AlternativeNameResult() => create();
  factory AlternativeNameResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AlternativeNameResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AlternativeNameResult clone() => AlternativeNameResult()..mergeFromMessage(this);
  AlternativeNameResult copyWith(void Function(AlternativeNameResult) updates) => super.copyWith((message) => updates(message as AlternativeNameResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AlternativeNameResult create() => AlternativeNameResult._();
  AlternativeNameResult createEmptyInstance() => create();
  static $pb.PbList<AlternativeNameResult> createRepeated() => $pb.PbList<AlternativeNameResult>();
  @$core.pragma('dart2js:noInline')
  static AlternativeNameResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AlternativeNameResult>(create);
  static AlternativeNameResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<AlternativeName> get alternativenames => $_getList(0);
}

class AlternativeName extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AlternativeName', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOS(2, 'comment')
    ..aOM<Game>(3, 'game', subBuilder: Game.create)
    ..aOS(4, 'name')
    ..aOS(5, 'checksum')
    ..hasRequiredFields = false
  ;

  AlternativeName._() : super();
  factory AlternativeName() => create();
  factory AlternativeName.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AlternativeName.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AlternativeName clone() => AlternativeName()..mergeFromMessage(this);
  AlternativeName copyWith(void Function(AlternativeName) updates) => super.copyWith((message) => updates(message as AlternativeName));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AlternativeName create() => AlternativeName._();
  AlternativeName createEmptyInstance() => create();
  static $pb.PbList<AlternativeName> createRepeated() => $pb.PbList<AlternativeName>();
  @$core.pragma('dart2js:noInline')
  static AlternativeName getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AlternativeName>(create);
  static AlternativeName _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get comment => $_getSZ(1);
  @$pb.TagNumber(2)
  set comment($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasComment() => $_has(1);
  @$pb.TagNumber(2)
  void clearComment() => clearField(2);

  @$pb.TagNumber(3)
  Game get game => $_getN(2);
  @$pb.TagNumber(3)
  set game(Game v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasGame() => $_has(2);
  @$pb.TagNumber(3)
  void clearGame() => clearField(3);
  @$pb.TagNumber(3)
  Game ensureGame() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.String get name => $_getSZ(3);
  @$pb.TagNumber(4)
  set name($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasName() => $_has(3);
  @$pb.TagNumber(4)
  void clearName() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get checksum => $_getSZ(4);
  @$pb.TagNumber(5)
  set checksum($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasChecksum() => $_has(4);
  @$pb.TagNumber(5)
  void clearChecksum() => clearField(5);
}

class ArtworkResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ArtworkResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Artwork>(1, 'artworks', $pb.PbFieldType.PM, subBuilder: Artwork.create)
    ..hasRequiredFields = false
  ;

  ArtworkResult._() : super();
  factory ArtworkResult() => create();
  factory ArtworkResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ArtworkResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ArtworkResult clone() => ArtworkResult()..mergeFromMessage(this);
  ArtworkResult copyWith(void Function(ArtworkResult) updates) => super.copyWith((message) => updates(message as ArtworkResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ArtworkResult create() => ArtworkResult._();
  ArtworkResult createEmptyInstance() => create();
  static $pb.PbList<ArtworkResult> createRepeated() => $pb.PbList<ArtworkResult>();
  @$core.pragma('dart2js:noInline')
  static ArtworkResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ArtworkResult>(create);
  static ArtworkResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Artwork> get artworks => $_getList(0);
}

class Artwork extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Artwork', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..aOM<Game>(4, 'game', subBuilder: Game.create)
    ..a<$core.int>(5, 'height', $pb.PbFieldType.O3)
    ..aOS(6, 'imageId')
    ..aOS(7, 'url')
    ..a<$core.int>(8, 'width', $pb.PbFieldType.O3)
    ..aOS(9, 'checksum')
    ..hasRequiredFields = false
  ;

  Artwork._() : super();
  factory Artwork() => create();
  factory Artwork.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Artwork.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Artwork clone() => Artwork()..mergeFromMessage(this);
  Artwork copyWith(void Function(Artwork) updates) => super.copyWith((message) => updates(message as Artwork));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Artwork create() => Artwork._();
  Artwork createEmptyInstance() => create();
  static $pb.PbList<Artwork> createRepeated() => $pb.PbList<Artwork>();
  @$core.pragma('dart2js:noInline')
  static Artwork getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Artwork>(create);
  static Artwork _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  Game get game => $_getN(3);
  @$pb.TagNumber(4)
  set game(Game v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGame() => $_has(3);
  @$pb.TagNumber(4)
  void clearGame() => clearField(4);
  @$pb.TagNumber(4)
  Game ensureGame() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.int get height => $_getIZ(4);
  @$pb.TagNumber(5)
  set height($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasHeight() => $_has(4);
  @$pb.TagNumber(5)
  void clearHeight() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get imageId => $_getSZ(5);
  @$pb.TagNumber(6)
  set imageId($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasImageId() => $_has(5);
  @$pb.TagNumber(6)
  void clearImageId() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get url => $_getSZ(6);
  @$pb.TagNumber(7)
  set url($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasUrl() => $_has(6);
  @$pb.TagNumber(7)
  void clearUrl() => clearField(7);

  @$pb.TagNumber(8)
  $core.int get width => $_getIZ(7);
  @$pb.TagNumber(8)
  set width($core.int v) { $_setSignedInt32(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasWidth() => $_has(7);
  @$pb.TagNumber(8)
  void clearWidth() => clearField(8);

  @$pb.TagNumber(9)
  $core.String get checksum => $_getSZ(8);
  @$pb.TagNumber(9)
  set checksum($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasChecksum() => $_has(8);
  @$pb.TagNumber(9)
  void clearChecksum() => clearField(9);
}

class CharacterResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CharacterResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Character>(1, 'characters', $pb.PbFieldType.PM, subBuilder: Character.create)
    ..hasRequiredFields = false
  ;

  CharacterResult._() : super();
  factory CharacterResult() => create();
  factory CharacterResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CharacterResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CharacterResult clone() => CharacterResult()..mergeFromMessage(this);
  CharacterResult copyWith(void Function(CharacterResult) updates) => super.copyWith((message) => updates(message as CharacterResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CharacterResult create() => CharacterResult._();
  CharacterResult createEmptyInstance() => create();
  static $pb.PbList<CharacterResult> createRepeated() => $pb.PbList<CharacterResult>();
  @$core.pragma('dart2js:noInline')
  static CharacterResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CharacterResult>(create);
  static CharacterResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Character> get characters => $_getList(0);
}

class Character extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Character', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..pPS(2, 'akas')
    ..aOS(3, 'countryName')
    ..aOM<$0.Timestamp>(4, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(5, 'description')
    ..pc<Game>(6, 'games', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..e<GenderGenderEnum>(7, 'gender', $pb.PbFieldType.OE, defaultOrMaker: GenderGenderEnum.GENDER_GENDER_NULL, valueOf: GenderGenderEnum.valueOf, enumValues: GenderGenderEnum.values)
    ..aOM<CharacterMugShot>(8, 'mugShot', subBuilder: CharacterMugShot.create)
    ..aOS(9, 'name')
    ..pc<Person>(10, 'people', $pb.PbFieldType.PM, subBuilder: Person.create)
    ..aOS(11, 'slug')
    ..e<CharacterSpeciesEnum>(12, 'species', $pb.PbFieldType.OE, defaultOrMaker: CharacterSpeciesEnum.CHARACTER_SPECIES_NULL, valueOf: CharacterSpeciesEnum.valueOf, enumValues: CharacterSpeciesEnum.values)
    ..aOM<$0.Timestamp>(13, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(14, 'url')
    ..aOS(15, 'checksum')
    ..hasRequiredFields = false
  ;

  Character._() : super();
  factory Character() => create();
  factory Character.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Character.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Character clone() => Character()..mergeFromMessage(this);
  Character copyWith(void Function(Character) updates) => super.copyWith((message) => updates(message as Character));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Character create() => Character._();
  Character createEmptyInstance() => create();
  static $pb.PbList<Character> createRepeated() => $pb.PbList<Character>();
  @$core.pragma('dart2js:noInline')
  static Character getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Character>(create);
  static Character _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.String> get akas => $_getList(1);

  @$pb.TagNumber(3)
  $core.String get countryName => $_getSZ(2);
  @$pb.TagNumber(3)
  set countryName($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasCountryName() => $_has(2);
  @$pb.TagNumber(3)
  void clearCountryName() => clearField(3);

  @$pb.TagNumber(4)
  $0.Timestamp get createdAt => $_getN(3);
  @$pb.TagNumber(4)
  set createdAt($0.Timestamp v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCreatedAt() => $_has(3);
  @$pb.TagNumber(4)
  void clearCreatedAt() => clearField(4);
  @$pb.TagNumber(4)
  $0.Timestamp ensureCreatedAt() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.String get description => $_getSZ(4);
  @$pb.TagNumber(5)
  set description($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasDescription() => $_has(4);
  @$pb.TagNumber(5)
  void clearDescription() => clearField(5);

  @$pb.TagNumber(6)
  $core.List<Game> get games => $_getList(5);

  @$pb.TagNumber(7)
  GenderGenderEnum get gender => $_getN(6);
  @$pb.TagNumber(7)
  set gender(GenderGenderEnum v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasGender() => $_has(6);
  @$pb.TagNumber(7)
  void clearGender() => clearField(7);

  @$pb.TagNumber(8)
  CharacterMugShot get mugShot => $_getN(7);
  @$pb.TagNumber(8)
  set mugShot(CharacterMugShot v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasMugShot() => $_has(7);
  @$pb.TagNumber(8)
  void clearMugShot() => clearField(8);
  @$pb.TagNumber(8)
  CharacterMugShot ensureMugShot() => $_ensure(7);

  @$pb.TagNumber(9)
  $core.String get name => $_getSZ(8);
  @$pb.TagNumber(9)
  set name($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasName() => $_has(8);
  @$pb.TagNumber(9)
  void clearName() => clearField(9);

  @$pb.TagNumber(10)
  $core.List<Person> get people => $_getList(9);

  @$pb.TagNumber(11)
  $core.String get slug => $_getSZ(10);
  @$pb.TagNumber(11)
  set slug($core.String v) { $_setString(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasSlug() => $_has(10);
  @$pb.TagNumber(11)
  void clearSlug() => clearField(11);

  @$pb.TagNumber(12)
  CharacterSpeciesEnum get species => $_getN(11);
  @$pb.TagNumber(12)
  set species(CharacterSpeciesEnum v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasSpecies() => $_has(11);
  @$pb.TagNumber(12)
  void clearSpecies() => clearField(12);

  @$pb.TagNumber(13)
  $0.Timestamp get updatedAt => $_getN(12);
  @$pb.TagNumber(13)
  set updatedAt($0.Timestamp v) { setField(13, v); }
  @$pb.TagNumber(13)
  $core.bool hasUpdatedAt() => $_has(12);
  @$pb.TagNumber(13)
  void clearUpdatedAt() => clearField(13);
  @$pb.TagNumber(13)
  $0.Timestamp ensureUpdatedAt() => $_ensure(12);

  @$pb.TagNumber(14)
  $core.String get url => $_getSZ(13);
  @$pb.TagNumber(14)
  set url($core.String v) { $_setString(13, v); }
  @$pb.TagNumber(14)
  $core.bool hasUrl() => $_has(13);
  @$pb.TagNumber(14)
  void clearUrl() => clearField(14);

  @$pb.TagNumber(15)
  $core.String get checksum => $_getSZ(14);
  @$pb.TagNumber(15)
  set checksum($core.String v) { $_setString(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasChecksum() => $_has(14);
  @$pb.TagNumber(15)
  void clearChecksum() => clearField(15);
}

class CharacterMugShotResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CharacterMugShotResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<CharacterMugShot>(1, 'charactermugshots', $pb.PbFieldType.PM, subBuilder: CharacterMugShot.create)
    ..hasRequiredFields = false
  ;

  CharacterMugShotResult._() : super();
  factory CharacterMugShotResult() => create();
  factory CharacterMugShotResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CharacterMugShotResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CharacterMugShotResult clone() => CharacterMugShotResult()..mergeFromMessage(this);
  CharacterMugShotResult copyWith(void Function(CharacterMugShotResult) updates) => super.copyWith((message) => updates(message as CharacterMugShotResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CharacterMugShotResult create() => CharacterMugShotResult._();
  CharacterMugShotResult createEmptyInstance() => create();
  static $pb.PbList<CharacterMugShotResult> createRepeated() => $pb.PbList<CharacterMugShotResult>();
  @$core.pragma('dart2js:noInline')
  static CharacterMugShotResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CharacterMugShotResult>(create);
  static CharacterMugShotResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<CharacterMugShot> get charactermugshots => $_getList(0);
}

class CharacterMugShot extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CharacterMugShot', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..a<$core.int>(4, 'height', $pb.PbFieldType.O3)
    ..aOS(5, 'imageId')
    ..aOS(6, 'url')
    ..a<$core.int>(7, 'width', $pb.PbFieldType.O3)
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  CharacterMugShot._() : super();
  factory CharacterMugShot() => create();
  factory CharacterMugShot.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CharacterMugShot.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CharacterMugShot clone() => CharacterMugShot()..mergeFromMessage(this);
  CharacterMugShot copyWith(void Function(CharacterMugShot) updates) => super.copyWith((message) => updates(message as CharacterMugShot));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CharacterMugShot create() => CharacterMugShot._();
  CharacterMugShot createEmptyInstance() => create();
  static $pb.PbList<CharacterMugShot> createRepeated() => $pb.PbList<CharacterMugShot>();
  @$core.pragma('dart2js:noInline')
  static CharacterMugShot getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CharacterMugShot>(create);
  static CharacterMugShot _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get height => $_getIZ(3);
  @$pb.TagNumber(4)
  set height($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHeight() => $_has(3);
  @$pb.TagNumber(4)
  void clearHeight() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get imageId => $_getSZ(4);
  @$pb.TagNumber(5)
  set imageId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasImageId() => $_has(4);
  @$pb.TagNumber(5)
  void clearImageId() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get width => $_getIZ(6);
  @$pb.TagNumber(7)
  set width($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasWidth() => $_has(6);
  @$pb.TagNumber(7)
  void clearWidth() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class CollectionResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CollectionResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Collection>(1, 'collections', $pb.PbFieldType.PM, subBuilder: Collection.create)
    ..hasRequiredFields = false
  ;

  CollectionResult._() : super();
  factory CollectionResult() => create();
  factory CollectionResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CollectionResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CollectionResult clone() => CollectionResult()..mergeFromMessage(this);
  CollectionResult copyWith(void Function(CollectionResult) updates) => super.copyWith((message) => updates(message as CollectionResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CollectionResult create() => CollectionResult._();
  CollectionResult createEmptyInstance() => create();
  static $pb.PbList<CollectionResult> createRepeated() => $pb.PbList<CollectionResult>();
  @$core.pragma('dart2js:noInline')
  static CollectionResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CollectionResult>(create);
  static CollectionResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Collection> get collections => $_getList(0);
}

class Collection extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Collection', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..pc<Game>(3, 'games', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..aOS(4, 'name')
    ..aOS(5, 'slug')
    ..aOM<$0.Timestamp>(6, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(7, 'url')
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  Collection._() : super();
  factory Collection() => create();
  factory Collection.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Collection.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Collection clone() => Collection()..mergeFromMessage(this);
  Collection copyWith(void Function(Collection) updates) => super.copyWith((message) => updates(message as Collection));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Collection create() => Collection._();
  Collection createEmptyInstance() => create();
  static $pb.PbList<Collection> createRepeated() => $pb.PbList<Collection>();
  @$core.pragma('dart2js:noInline')
  static Collection getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Collection>(create);
  static Collection _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.List<Game> get games => $_getList(2);

  @$pb.TagNumber(4)
  $core.String get name => $_getSZ(3);
  @$pb.TagNumber(4)
  set name($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasName() => $_has(3);
  @$pb.TagNumber(4)
  void clearName() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get slug => $_getSZ(4);
  @$pb.TagNumber(5)
  set slug($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasSlug() => $_has(4);
  @$pb.TagNumber(5)
  void clearSlug() => clearField(5);

  @$pb.TagNumber(6)
  $0.Timestamp get updatedAt => $_getN(5);
  @$pb.TagNumber(6)
  set updatedAt($0.Timestamp v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasUpdatedAt() => $_has(5);
  @$pb.TagNumber(6)
  void clearUpdatedAt() => clearField(6);
  @$pb.TagNumber(6)
  $0.Timestamp ensureUpdatedAt() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.String get url => $_getSZ(6);
  @$pb.TagNumber(7)
  set url($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasUrl() => $_has(6);
  @$pb.TagNumber(7)
  void clearUrl() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class CompanyResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CompanyResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Company>(1, 'companies', $pb.PbFieldType.PM, subBuilder: Company.create)
    ..hasRequiredFields = false
  ;

  CompanyResult._() : super();
  factory CompanyResult() => create();
  factory CompanyResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CompanyResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CompanyResult clone() => CompanyResult()..mergeFromMessage(this);
  CompanyResult copyWith(void Function(CompanyResult) updates) => super.copyWith((message) => updates(message as CompanyResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CompanyResult create() => CompanyResult._();
  CompanyResult createEmptyInstance() => create();
  static $pb.PbList<CompanyResult> createRepeated() => $pb.PbList<CompanyResult>();
  @$core.pragma('dart2js:noInline')
  static CompanyResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CompanyResult>(create);
  static CompanyResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Company> get companies => $_getList(0);
}

class Company extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Company', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'changeDate', subBuilder: $0.Timestamp.create)
    ..e<DateFormatChangeDateCategoryEnum>(3, 'changeDateCategory', $pb.PbFieldType.OE, defaultOrMaker: DateFormatChangeDateCategoryEnum.YYYYMMMMDD, valueOf: DateFormatChangeDateCategoryEnum.valueOf, enumValues: DateFormatChangeDateCategoryEnum.values)
    ..aOM<Company>(4, 'changedCompanyId', subBuilder: Company.create)
    ..a<$core.int>(5, 'country', $pb.PbFieldType.O3)
    ..aOM<$0.Timestamp>(6, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(7, 'description')
    ..pc<Game>(8, 'developed', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..aOM<CompanyLogo>(9, 'logo', subBuilder: CompanyLogo.create)
    ..aOS(10, 'name')
    ..aOM<Company>(11, 'parent', subBuilder: Company.create)
    ..pc<Game>(12, 'published', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..aOS(13, 'slug')
    ..aOM<$0.Timestamp>(14, 'startDate', subBuilder: $0.Timestamp.create)
    ..e<DateFormatChangeDateCategoryEnum>(15, 'startDateCategory', $pb.PbFieldType.OE, defaultOrMaker: DateFormatChangeDateCategoryEnum.YYYYMMMMDD, valueOf: DateFormatChangeDateCategoryEnum.valueOf, enumValues: DateFormatChangeDateCategoryEnum.values)
    ..aOM<$0.Timestamp>(16, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(17, 'url')
    ..pc<CompanyWebsite>(18, 'websites', $pb.PbFieldType.PM, subBuilder: CompanyWebsite.create)
    ..aOS(19, 'checksum')
    ..hasRequiredFields = false
  ;

  Company._() : super();
  factory Company() => create();
  factory Company.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Company.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Company clone() => Company()..mergeFromMessage(this);
  Company copyWith(void Function(Company) updates) => super.copyWith((message) => updates(message as Company));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Company create() => Company._();
  Company createEmptyInstance() => create();
  static $pb.PbList<Company> createRepeated() => $pb.PbList<Company>();
  @$core.pragma('dart2js:noInline')
  static Company getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Company>(create);
  static Company _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get changeDate => $_getN(1);
  @$pb.TagNumber(2)
  set changeDate($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasChangeDate() => $_has(1);
  @$pb.TagNumber(2)
  void clearChangeDate() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureChangeDate() => $_ensure(1);

  @$pb.TagNumber(3)
  DateFormatChangeDateCategoryEnum get changeDateCategory => $_getN(2);
  @$pb.TagNumber(3)
  set changeDateCategory(DateFormatChangeDateCategoryEnum v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasChangeDateCategory() => $_has(2);
  @$pb.TagNumber(3)
  void clearChangeDateCategory() => clearField(3);

  @$pb.TagNumber(4)
  Company get changedCompanyId => $_getN(3);
  @$pb.TagNumber(4)
  set changedCompanyId(Company v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasChangedCompanyId() => $_has(3);
  @$pb.TagNumber(4)
  void clearChangedCompanyId() => clearField(4);
  @$pb.TagNumber(4)
  Company ensureChangedCompanyId() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.int get country => $_getIZ(4);
  @$pb.TagNumber(5)
  set country($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasCountry() => $_has(4);
  @$pb.TagNumber(5)
  void clearCountry() => clearField(5);

  @$pb.TagNumber(6)
  $0.Timestamp get createdAt => $_getN(5);
  @$pb.TagNumber(6)
  set createdAt($0.Timestamp v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasCreatedAt() => $_has(5);
  @$pb.TagNumber(6)
  void clearCreatedAt() => clearField(6);
  @$pb.TagNumber(6)
  $0.Timestamp ensureCreatedAt() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.String get description => $_getSZ(6);
  @$pb.TagNumber(7)
  set description($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasDescription() => $_has(6);
  @$pb.TagNumber(7)
  void clearDescription() => clearField(7);

  @$pb.TagNumber(8)
  $core.List<Game> get developed => $_getList(7);

  @$pb.TagNumber(9)
  CompanyLogo get logo => $_getN(8);
  @$pb.TagNumber(9)
  set logo(CompanyLogo v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasLogo() => $_has(8);
  @$pb.TagNumber(9)
  void clearLogo() => clearField(9);
  @$pb.TagNumber(9)
  CompanyLogo ensureLogo() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.String get name => $_getSZ(9);
  @$pb.TagNumber(10)
  set name($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasName() => $_has(9);
  @$pb.TagNumber(10)
  void clearName() => clearField(10);

  @$pb.TagNumber(11)
  Company get parent => $_getN(10);
  @$pb.TagNumber(11)
  set parent(Company v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasParent() => $_has(10);
  @$pb.TagNumber(11)
  void clearParent() => clearField(11);
  @$pb.TagNumber(11)
  Company ensureParent() => $_ensure(10);

  @$pb.TagNumber(12)
  $core.List<Game> get published => $_getList(11);

  @$pb.TagNumber(13)
  $core.String get slug => $_getSZ(12);
  @$pb.TagNumber(13)
  set slug($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasSlug() => $_has(12);
  @$pb.TagNumber(13)
  void clearSlug() => clearField(13);

  @$pb.TagNumber(14)
  $0.Timestamp get startDate => $_getN(13);
  @$pb.TagNumber(14)
  set startDate($0.Timestamp v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasStartDate() => $_has(13);
  @$pb.TagNumber(14)
  void clearStartDate() => clearField(14);
  @$pb.TagNumber(14)
  $0.Timestamp ensureStartDate() => $_ensure(13);

  @$pb.TagNumber(15)
  DateFormatChangeDateCategoryEnum get startDateCategory => $_getN(14);
  @$pb.TagNumber(15)
  set startDateCategory(DateFormatChangeDateCategoryEnum v) { setField(15, v); }
  @$pb.TagNumber(15)
  $core.bool hasStartDateCategory() => $_has(14);
  @$pb.TagNumber(15)
  void clearStartDateCategory() => clearField(15);

  @$pb.TagNumber(16)
  $0.Timestamp get updatedAt => $_getN(15);
  @$pb.TagNumber(16)
  set updatedAt($0.Timestamp v) { setField(16, v); }
  @$pb.TagNumber(16)
  $core.bool hasUpdatedAt() => $_has(15);
  @$pb.TagNumber(16)
  void clearUpdatedAt() => clearField(16);
  @$pb.TagNumber(16)
  $0.Timestamp ensureUpdatedAt() => $_ensure(15);

  @$pb.TagNumber(17)
  $core.String get url => $_getSZ(16);
  @$pb.TagNumber(17)
  set url($core.String v) { $_setString(16, v); }
  @$pb.TagNumber(17)
  $core.bool hasUrl() => $_has(16);
  @$pb.TagNumber(17)
  void clearUrl() => clearField(17);

  @$pb.TagNumber(18)
  $core.List<CompanyWebsite> get websites => $_getList(17);

  @$pb.TagNumber(19)
  $core.String get checksum => $_getSZ(18);
  @$pb.TagNumber(19)
  set checksum($core.String v) { $_setString(18, v); }
  @$pb.TagNumber(19)
  $core.bool hasChecksum() => $_has(18);
  @$pb.TagNumber(19)
  void clearChecksum() => clearField(19);
}

class CompanyLogoResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CompanyLogoResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<CompanyLogo>(1, 'companylogos', $pb.PbFieldType.PM, subBuilder: CompanyLogo.create)
    ..hasRequiredFields = false
  ;

  CompanyLogoResult._() : super();
  factory CompanyLogoResult() => create();
  factory CompanyLogoResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CompanyLogoResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CompanyLogoResult clone() => CompanyLogoResult()..mergeFromMessage(this);
  CompanyLogoResult copyWith(void Function(CompanyLogoResult) updates) => super.copyWith((message) => updates(message as CompanyLogoResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CompanyLogoResult create() => CompanyLogoResult._();
  CompanyLogoResult createEmptyInstance() => create();
  static $pb.PbList<CompanyLogoResult> createRepeated() => $pb.PbList<CompanyLogoResult>();
  @$core.pragma('dart2js:noInline')
  static CompanyLogoResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CompanyLogoResult>(create);
  static CompanyLogoResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<CompanyLogo> get companylogos => $_getList(0);
}

class CompanyLogo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CompanyLogo', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..a<$core.int>(4, 'height', $pb.PbFieldType.O3)
    ..aOS(5, 'imageId')
    ..aOS(6, 'url')
    ..a<$core.int>(7, 'width', $pb.PbFieldType.O3)
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  CompanyLogo._() : super();
  factory CompanyLogo() => create();
  factory CompanyLogo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CompanyLogo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CompanyLogo clone() => CompanyLogo()..mergeFromMessage(this);
  CompanyLogo copyWith(void Function(CompanyLogo) updates) => super.copyWith((message) => updates(message as CompanyLogo));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CompanyLogo create() => CompanyLogo._();
  CompanyLogo createEmptyInstance() => create();
  static $pb.PbList<CompanyLogo> createRepeated() => $pb.PbList<CompanyLogo>();
  @$core.pragma('dart2js:noInline')
  static CompanyLogo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CompanyLogo>(create);
  static CompanyLogo _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get height => $_getIZ(3);
  @$pb.TagNumber(4)
  set height($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHeight() => $_has(3);
  @$pb.TagNumber(4)
  void clearHeight() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get imageId => $_getSZ(4);
  @$pb.TagNumber(5)
  set imageId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasImageId() => $_has(4);
  @$pb.TagNumber(5)
  void clearImageId() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get width => $_getIZ(6);
  @$pb.TagNumber(7)
  set width($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasWidth() => $_has(6);
  @$pb.TagNumber(7)
  void clearWidth() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class CompanyWebsiteResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CompanyWebsiteResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<CompanyWebsite>(1, 'companywebsites', $pb.PbFieldType.PM, subBuilder: CompanyWebsite.create)
    ..hasRequiredFields = false
  ;

  CompanyWebsiteResult._() : super();
  factory CompanyWebsiteResult() => create();
  factory CompanyWebsiteResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CompanyWebsiteResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CompanyWebsiteResult clone() => CompanyWebsiteResult()..mergeFromMessage(this);
  CompanyWebsiteResult copyWith(void Function(CompanyWebsiteResult) updates) => super.copyWith((message) => updates(message as CompanyWebsiteResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CompanyWebsiteResult create() => CompanyWebsiteResult._();
  CompanyWebsiteResult createEmptyInstance() => create();
  static $pb.PbList<CompanyWebsiteResult> createRepeated() => $pb.PbList<CompanyWebsiteResult>();
  @$core.pragma('dart2js:noInline')
  static CompanyWebsiteResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CompanyWebsiteResult>(create);
  static CompanyWebsiteResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<CompanyWebsite> get companywebsites => $_getList(0);
}

class CompanyWebsite extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CompanyWebsite', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<WebsiteCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: WebsiteCategoryEnum.WEBSITE_CATEGORY_NULL, valueOf: WebsiteCategoryEnum.valueOf, enumValues: WebsiteCategoryEnum.values)
    ..aOB(3, 'trusted')
    ..aOS(4, 'url')
    ..aOS(5, 'checksum')
    ..hasRequiredFields = false
  ;

  CompanyWebsite._() : super();
  factory CompanyWebsite() => create();
  factory CompanyWebsite.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CompanyWebsite.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CompanyWebsite clone() => CompanyWebsite()..mergeFromMessage(this);
  CompanyWebsite copyWith(void Function(CompanyWebsite) updates) => super.copyWith((message) => updates(message as CompanyWebsite));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CompanyWebsite create() => CompanyWebsite._();
  CompanyWebsite createEmptyInstance() => create();
  static $pb.PbList<CompanyWebsite> createRepeated() => $pb.PbList<CompanyWebsite>();
  @$core.pragma('dart2js:noInline')
  static CompanyWebsite getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CompanyWebsite>(create);
  static CompanyWebsite _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  WebsiteCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(WebsiteCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get trusted => $_getBF(2);
  @$pb.TagNumber(3)
  set trusted($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasTrusted() => $_has(2);
  @$pb.TagNumber(3)
  void clearTrusted() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get url => $_getSZ(3);
  @$pb.TagNumber(4)
  set url($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasUrl() => $_has(3);
  @$pb.TagNumber(4)
  void clearUrl() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get checksum => $_getSZ(4);
  @$pb.TagNumber(5)
  set checksum($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasChecksum() => $_has(4);
  @$pb.TagNumber(5)
  void clearChecksum() => clearField(5);
}

class CoverResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CoverResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Cover>(1, 'covers', $pb.PbFieldType.PM, subBuilder: Cover.create)
    ..hasRequiredFields = false
  ;

  CoverResult._() : super();
  factory CoverResult() => create();
  factory CoverResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CoverResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CoverResult clone() => CoverResult()..mergeFromMessage(this);
  CoverResult copyWith(void Function(CoverResult) updates) => super.copyWith((message) => updates(message as CoverResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CoverResult create() => CoverResult._();
  CoverResult createEmptyInstance() => create();
  static $pb.PbList<CoverResult> createRepeated() => $pb.PbList<CoverResult>();
  @$core.pragma('dart2js:noInline')
  static CoverResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CoverResult>(create);
  static CoverResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Cover> get covers => $_getList(0);
}

class Cover extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Cover', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..aOM<Game>(4, 'game', subBuilder: Game.create)
    ..a<$core.int>(5, 'height', $pb.PbFieldType.O3)
    ..aOS(6, 'imageId')
    ..aOS(7, 'url')
    ..a<$core.int>(8, 'width', $pb.PbFieldType.O3)
    ..aOS(9, 'checksum')
    ..hasRequiredFields = false
  ;

  Cover._() : super();
  factory Cover() => create();
  factory Cover.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Cover.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Cover clone() => Cover()..mergeFromMessage(this);
  Cover copyWith(void Function(Cover) updates) => super.copyWith((message) => updates(message as Cover));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Cover create() => Cover._();
  Cover createEmptyInstance() => create();
  static $pb.PbList<Cover> createRepeated() => $pb.PbList<Cover>();
  @$core.pragma('dart2js:noInline')
  static Cover getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Cover>(create);
  static Cover _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  Game get game => $_getN(3);
  @$pb.TagNumber(4)
  set game(Game v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGame() => $_has(3);
  @$pb.TagNumber(4)
  void clearGame() => clearField(4);
  @$pb.TagNumber(4)
  Game ensureGame() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.int get height => $_getIZ(4);
  @$pb.TagNumber(5)
  set height($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasHeight() => $_has(4);
  @$pb.TagNumber(5)
  void clearHeight() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get imageId => $_getSZ(5);
  @$pb.TagNumber(6)
  set imageId($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasImageId() => $_has(5);
  @$pb.TagNumber(6)
  void clearImageId() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get url => $_getSZ(6);
  @$pb.TagNumber(7)
  set url($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasUrl() => $_has(6);
  @$pb.TagNumber(7)
  void clearUrl() => clearField(7);

  @$pb.TagNumber(8)
  $core.int get width => $_getIZ(7);
  @$pb.TagNumber(8)
  set width($core.int v) { $_setSignedInt32(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasWidth() => $_has(7);
  @$pb.TagNumber(8)
  void clearWidth() => clearField(8);

  @$pb.TagNumber(9)
  $core.String get checksum => $_getSZ(8);
  @$pb.TagNumber(9)
  set checksum($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasChecksum() => $_has(8);
  @$pb.TagNumber(9)
  void clearChecksum() => clearField(9);
}

class CreditResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('CreditResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Credit>(1, 'credits', $pb.PbFieldType.PM, subBuilder: Credit.create)
    ..hasRequiredFields = false
  ;

  CreditResult._() : super();
  factory CreditResult() => create();
  factory CreditResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreditResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  CreditResult clone() => CreditResult()..mergeFromMessage(this);
  CreditResult copyWith(void Function(CreditResult) updates) => super.copyWith((message) => updates(message as CreditResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CreditResult create() => CreditResult._();
  CreditResult createEmptyInstance() => create();
  static $pb.PbList<CreditResult> createRepeated() => $pb.PbList<CreditResult>();
  @$core.pragma('dart2js:noInline')
  static CreditResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreditResult>(create);
  static CreditResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Credit> get credits => $_getList(0);
}

class Credit extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Credit', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<CreditCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: CreditCategoryEnum.CREDIT_CATEGORY_NULL, valueOf: CreditCategoryEnum.valueOf, enumValues: CreditCategoryEnum.values)
    ..aOM<Character>(3, 'character', subBuilder: Character.create)
    ..aOS(4, 'characterCreditedName')
    ..aOS(5, 'comment')
    ..aOM<Company>(6, 'company', subBuilder: Company.create)
    ..a<$core.int>(7, 'country', $pb.PbFieldType.O3)
    ..aOM<$0.Timestamp>(8, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(9, 'creditedName')
    ..aOM<Game>(10, 'game', subBuilder: Game.create)
    ..aOM<Person>(11, 'person', subBuilder: Person.create)
    ..aOM<Title>(12, 'personTitle', subBuilder: Title.create)
    ..a<$core.int>(13, 'position', $pb.PbFieldType.O3)
    ..aOM<$0.Timestamp>(14, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(15, 'checksum')
    ..hasRequiredFields = false
  ;

  Credit._() : super();
  factory Credit() => create();
  factory Credit.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Credit.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Credit clone() => Credit()..mergeFromMessage(this);
  Credit copyWith(void Function(Credit) updates) => super.copyWith((message) => updates(message as Credit));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Credit create() => Credit._();
  Credit createEmptyInstance() => create();
  static $pb.PbList<Credit> createRepeated() => $pb.PbList<Credit>();
  @$core.pragma('dart2js:noInline')
  static Credit getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Credit>(create);
  static Credit _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  CreditCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(CreditCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  Character get character => $_getN(2);
  @$pb.TagNumber(3)
  set character(Character v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCharacter() => $_has(2);
  @$pb.TagNumber(3)
  void clearCharacter() => clearField(3);
  @$pb.TagNumber(3)
  Character ensureCharacter() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.String get characterCreditedName => $_getSZ(3);
  @$pb.TagNumber(4)
  set characterCreditedName($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasCharacterCreditedName() => $_has(3);
  @$pb.TagNumber(4)
  void clearCharacterCreditedName() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get comment => $_getSZ(4);
  @$pb.TagNumber(5)
  set comment($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasComment() => $_has(4);
  @$pb.TagNumber(5)
  void clearComment() => clearField(5);

  @$pb.TagNumber(6)
  Company get company => $_getN(5);
  @$pb.TagNumber(6)
  set company(Company v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasCompany() => $_has(5);
  @$pb.TagNumber(6)
  void clearCompany() => clearField(6);
  @$pb.TagNumber(6)
  Company ensureCompany() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.int get country => $_getIZ(6);
  @$pb.TagNumber(7)
  set country($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasCountry() => $_has(6);
  @$pb.TagNumber(7)
  void clearCountry() => clearField(7);

  @$pb.TagNumber(8)
  $0.Timestamp get createdAt => $_getN(7);
  @$pb.TagNumber(8)
  set createdAt($0.Timestamp v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasCreatedAt() => $_has(7);
  @$pb.TagNumber(8)
  void clearCreatedAt() => clearField(8);
  @$pb.TagNumber(8)
  $0.Timestamp ensureCreatedAt() => $_ensure(7);

  @$pb.TagNumber(9)
  $core.String get creditedName => $_getSZ(8);
  @$pb.TagNumber(9)
  set creditedName($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasCreditedName() => $_has(8);
  @$pb.TagNumber(9)
  void clearCreditedName() => clearField(9);

  @$pb.TagNumber(10)
  Game get game => $_getN(9);
  @$pb.TagNumber(10)
  set game(Game v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasGame() => $_has(9);
  @$pb.TagNumber(10)
  void clearGame() => clearField(10);
  @$pb.TagNumber(10)
  Game ensureGame() => $_ensure(9);

  @$pb.TagNumber(11)
  Person get person => $_getN(10);
  @$pb.TagNumber(11)
  set person(Person v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasPerson() => $_has(10);
  @$pb.TagNumber(11)
  void clearPerson() => clearField(11);
  @$pb.TagNumber(11)
  Person ensurePerson() => $_ensure(10);

  @$pb.TagNumber(12)
  Title get personTitle => $_getN(11);
  @$pb.TagNumber(12)
  set personTitle(Title v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasPersonTitle() => $_has(11);
  @$pb.TagNumber(12)
  void clearPersonTitle() => clearField(12);
  @$pb.TagNumber(12)
  Title ensurePersonTitle() => $_ensure(11);

  @$pb.TagNumber(13)
  $core.int get position => $_getIZ(12);
  @$pb.TagNumber(13)
  set position($core.int v) { $_setSignedInt32(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasPosition() => $_has(12);
  @$pb.TagNumber(13)
  void clearPosition() => clearField(13);

  @$pb.TagNumber(14)
  $0.Timestamp get updatedAt => $_getN(13);
  @$pb.TagNumber(14)
  set updatedAt($0.Timestamp v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasUpdatedAt() => $_has(13);
  @$pb.TagNumber(14)
  void clearUpdatedAt() => clearField(14);
  @$pb.TagNumber(14)
  $0.Timestamp ensureUpdatedAt() => $_ensure(13);

  @$pb.TagNumber(15)
  $core.String get checksum => $_getSZ(14);
  @$pb.TagNumber(15)
  set checksum($core.String v) { $_setString(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasChecksum() => $_has(14);
  @$pb.TagNumber(15)
  void clearChecksum() => clearField(15);
}

class ExternalGameResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ExternalGameResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<ExternalGame>(1, 'externalgames', $pb.PbFieldType.PM, subBuilder: ExternalGame.create)
    ..hasRequiredFields = false
  ;

  ExternalGameResult._() : super();
  factory ExternalGameResult() => create();
  factory ExternalGameResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ExternalGameResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ExternalGameResult clone() => ExternalGameResult()..mergeFromMessage(this);
  ExternalGameResult copyWith(void Function(ExternalGameResult) updates) => super.copyWith((message) => updates(message as ExternalGameResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ExternalGameResult create() => ExternalGameResult._();
  ExternalGameResult createEmptyInstance() => create();
  static $pb.PbList<ExternalGameResult> createRepeated() => $pb.PbList<ExternalGameResult>();
  @$core.pragma('dart2js:noInline')
  static ExternalGameResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ExternalGameResult>(create);
  static ExternalGameResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<ExternalGame> get externalgames => $_getList(0);
}

class ExternalGame extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ExternalGame', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<ExternalGameCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: ExternalGameCategoryEnum.EXTERNALGAME_CATEGORY_NULL, valueOf: ExternalGameCategoryEnum.valueOf, enumValues: ExternalGameCategoryEnum.values)
    ..aOM<$0.Timestamp>(3, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOM<Game>(4, 'game', subBuilder: Game.create)
    ..aOS(5, 'name')
    ..aOS(6, 'uid')
    ..aOM<$0.Timestamp>(7, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(8, 'url')
    ..a<$core.int>(9, 'year', $pb.PbFieldType.O3)
    ..e<ExternalGameMediaEnum>(10, 'media', $pb.PbFieldType.OE, defaultOrMaker: ExternalGameMediaEnum.EXTERNALGAME_MEDIA_NULL, valueOf: ExternalGameMediaEnum.valueOf, enumValues: ExternalGameMediaEnum.values)
    ..aOM<Platform>(11, 'platform', subBuilder: Platform.create)
    ..p<$core.int>(12, 'countries', $pb.PbFieldType.P3)
    ..aOS(13, 'checksum')
    ..hasRequiredFields = false
  ;

  ExternalGame._() : super();
  factory ExternalGame() => create();
  factory ExternalGame.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ExternalGame.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ExternalGame clone() => ExternalGame()..mergeFromMessage(this);
  ExternalGame copyWith(void Function(ExternalGame) updates) => super.copyWith((message) => updates(message as ExternalGame));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ExternalGame create() => ExternalGame._();
  ExternalGame createEmptyInstance() => create();
  static $pb.PbList<ExternalGame> createRepeated() => $pb.PbList<ExternalGame>();
  @$core.pragma('dart2js:noInline')
  static ExternalGame getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ExternalGame>(create);
  static ExternalGame _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  ExternalGameCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(ExternalGameCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $0.Timestamp get createdAt => $_getN(2);
  @$pb.TagNumber(3)
  set createdAt($0.Timestamp v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCreatedAt() => $_has(2);
  @$pb.TagNumber(3)
  void clearCreatedAt() => clearField(3);
  @$pb.TagNumber(3)
  $0.Timestamp ensureCreatedAt() => $_ensure(2);

  @$pb.TagNumber(4)
  Game get game => $_getN(3);
  @$pb.TagNumber(4)
  set game(Game v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGame() => $_has(3);
  @$pb.TagNumber(4)
  void clearGame() => clearField(4);
  @$pb.TagNumber(4)
  Game ensureGame() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.String get name => $_getSZ(4);
  @$pb.TagNumber(5)
  set name($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasName() => $_has(4);
  @$pb.TagNumber(5)
  void clearName() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get uid => $_getSZ(5);
  @$pb.TagNumber(6)
  set uid($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUid() => $_has(5);
  @$pb.TagNumber(6)
  void clearUid() => clearField(6);

  @$pb.TagNumber(7)
  $0.Timestamp get updatedAt => $_getN(6);
  @$pb.TagNumber(7)
  set updatedAt($0.Timestamp v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasUpdatedAt() => $_has(6);
  @$pb.TagNumber(7)
  void clearUpdatedAt() => clearField(7);
  @$pb.TagNumber(7)
  $0.Timestamp ensureUpdatedAt() => $_ensure(6);

  @$pb.TagNumber(8)
  $core.String get url => $_getSZ(7);
  @$pb.TagNumber(8)
  set url($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasUrl() => $_has(7);
  @$pb.TagNumber(8)
  void clearUrl() => clearField(8);

  @$pb.TagNumber(9)
  $core.int get year => $_getIZ(8);
  @$pb.TagNumber(9)
  set year($core.int v) { $_setSignedInt32(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasYear() => $_has(8);
  @$pb.TagNumber(9)
  void clearYear() => clearField(9);

  @$pb.TagNumber(10)
  ExternalGameMediaEnum get media => $_getN(9);
  @$pb.TagNumber(10)
  set media(ExternalGameMediaEnum v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasMedia() => $_has(9);
  @$pb.TagNumber(10)
  void clearMedia() => clearField(10);

  @$pb.TagNumber(11)
  Platform get platform => $_getN(10);
  @$pb.TagNumber(11)
  set platform(Platform v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasPlatform() => $_has(10);
  @$pb.TagNumber(11)
  void clearPlatform() => clearField(11);
  @$pb.TagNumber(11)
  Platform ensurePlatform() => $_ensure(10);

  @$pb.TagNumber(12)
  $core.List<$core.int> get countries => $_getList(11);

  @$pb.TagNumber(13)
  $core.String get checksum => $_getSZ(12);
  @$pb.TagNumber(13)
  set checksum($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasChecksum() => $_has(12);
  @$pb.TagNumber(13)
  void clearChecksum() => clearField(13);
}

class FeedResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('FeedResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Feed>(1, 'feeds', $pb.PbFieldType.PM, subBuilder: Feed.create)
    ..hasRequiredFields = false
  ;

  FeedResult._() : super();
  factory FeedResult() => create();
  factory FeedResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FeedResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  FeedResult clone() => FeedResult()..mergeFromMessage(this);
  FeedResult copyWith(void Function(FeedResult) updates) => super.copyWith((message) => updates(message as FeedResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FeedResult create() => FeedResult._();
  FeedResult createEmptyInstance() => create();
  static $pb.PbList<FeedResult> createRepeated() => $pb.PbList<FeedResult>();
  @$core.pragma('dart2js:noInline')
  static FeedResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FeedResult>(create);
  static FeedResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Feed> get feeds => $_getList(0);
}

class Feed extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Feed', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<FeedCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: FeedCategoryEnum.FEED_CATEGORY_NULL, valueOf: FeedCategoryEnum.valueOf, enumValues: FeedCategoryEnum.values)
    ..aOS(3, 'content')
    ..aOM<$0.Timestamp>(4, 'createdAt', subBuilder: $0.Timestamp.create)
    ..a<$core.int>(5, 'feedLikesCount', $pb.PbFieldType.O3)
    ..aOM<GameVideo>(6, 'feedVideo', subBuilder: GameVideo.create)
    ..pc<Game>(7, 'games', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..aOS(8, 'meta')
    ..aOM<$0.Timestamp>(9, 'publishedAt', subBuilder: $0.Timestamp.create)
    ..aOM<Pulse>(10, 'pulse', subBuilder: Pulse.create)
    ..aOS(11, 'slug')
    ..aOS(12, 'title')
    ..aOS(13, 'uid')
    ..aOM<$0.Timestamp>(14, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(15, 'url')
    ..a<$core.int>(16, 'user', $pb.PbFieldType.O3)
    ..aOS(17, 'checksum')
    ..hasRequiredFields = false
  ;

  Feed._() : super();
  factory Feed() => create();
  factory Feed.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Feed.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Feed clone() => Feed()..mergeFromMessage(this);
  Feed copyWith(void Function(Feed) updates) => super.copyWith((message) => updates(message as Feed));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Feed create() => Feed._();
  Feed createEmptyInstance() => create();
  static $pb.PbList<Feed> createRepeated() => $pb.PbList<Feed>();
  @$core.pragma('dart2js:noInline')
  static Feed getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Feed>(create);
  static Feed _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  FeedCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(FeedCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get content => $_getSZ(2);
  @$pb.TagNumber(3)
  set content($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasContent() => $_has(2);
  @$pb.TagNumber(3)
  void clearContent() => clearField(3);

  @$pb.TagNumber(4)
  $0.Timestamp get createdAt => $_getN(3);
  @$pb.TagNumber(4)
  set createdAt($0.Timestamp v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCreatedAt() => $_has(3);
  @$pb.TagNumber(4)
  void clearCreatedAt() => clearField(4);
  @$pb.TagNumber(4)
  $0.Timestamp ensureCreatedAt() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.int get feedLikesCount => $_getIZ(4);
  @$pb.TagNumber(5)
  set feedLikesCount($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasFeedLikesCount() => $_has(4);
  @$pb.TagNumber(5)
  void clearFeedLikesCount() => clearField(5);

  @$pb.TagNumber(6)
  GameVideo get feedVideo => $_getN(5);
  @$pb.TagNumber(6)
  set feedVideo(GameVideo v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasFeedVideo() => $_has(5);
  @$pb.TagNumber(6)
  void clearFeedVideo() => clearField(6);
  @$pb.TagNumber(6)
  GameVideo ensureFeedVideo() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.List<Game> get games => $_getList(6);

  @$pb.TagNumber(8)
  $core.String get meta => $_getSZ(7);
  @$pb.TagNumber(8)
  set meta($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasMeta() => $_has(7);
  @$pb.TagNumber(8)
  void clearMeta() => clearField(8);

  @$pb.TagNumber(9)
  $0.Timestamp get publishedAt => $_getN(8);
  @$pb.TagNumber(9)
  set publishedAt($0.Timestamp v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasPublishedAt() => $_has(8);
  @$pb.TagNumber(9)
  void clearPublishedAt() => clearField(9);
  @$pb.TagNumber(9)
  $0.Timestamp ensurePublishedAt() => $_ensure(8);

  @$pb.TagNumber(10)
  Pulse get pulse => $_getN(9);
  @$pb.TagNumber(10)
  set pulse(Pulse v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasPulse() => $_has(9);
  @$pb.TagNumber(10)
  void clearPulse() => clearField(10);
  @$pb.TagNumber(10)
  Pulse ensurePulse() => $_ensure(9);

  @$pb.TagNumber(11)
  $core.String get slug => $_getSZ(10);
  @$pb.TagNumber(11)
  set slug($core.String v) { $_setString(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasSlug() => $_has(10);
  @$pb.TagNumber(11)
  void clearSlug() => clearField(11);

  @$pb.TagNumber(12)
  $core.String get title => $_getSZ(11);
  @$pb.TagNumber(12)
  set title($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasTitle() => $_has(11);
  @$pb.TagNumber(12)
  void clearTitle() => clearField(12);

  @$pb.TagNumber(13)
  $core.String get uid => $_getSZ(12);
  @$pb.TagNumber(13)
  set uid($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasUid() => $_has(12);
  @$pb.TagNumber(13)
  void clearUid() => clearField(13);

  @$pb.TagNumber(14)
  $0.Timestamp get updatedAt => $_getN(13);
  @$pb.TagNumber(14)
  set updatedAt($0.Timestamp v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasUpdatedAt() => $_has(13);
  @$pb.TagNumber(14)
  void clearUpdatedAt() => clearField(14);
  @$pb.TagNumber(14)
  $0.Timestamp ensureUpdatedAt() => $_ensure(13);

  @$pb.TagNumber(15)
  $core.String get url => $_getSZ(14);
  @$pb.TagNumber(15)
  set url($core.String v) { $_setString(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasUrl() => $_has(14);
  @$pb.TagNumber(15)
  void clearUrl() => clearField(15);

  @$pb.TagNumber(16)
  $core.int get user => $_getIZ(15);
  @$pb.TagNumber(16)
  set user($core.int v) { $_setSignedInt32(15, v); }
  @$pb.TagNumber(16)
  $core.bool hasUser() => $_has(15);
  @$pb.TagNumber(16)
  void clearUser() => clearField(16);

  @$pb.TagNumber(17)
  $core.String get checksum => $_getSZ(16);
  @$pb.TagNumber(17)
  set checksum($core.String v) { $_setString(16, v); }
  @$pb.TagNumber(17)
  $core.bool hasChecksum() => $_has(16);
  @$pb.TagNumber(17)
  void clearChecksum() => clearField(17);
}

class FeedFollowResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('FeedFollowResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<FeedFollow>(1, 'feedfollows', $pb.PbFieldType.PM, subBuilder: FeedFollow.create)
    ..hasRequiredFields = false
  ;

  FeedFollowResult._() : super();
  factory FeedFollowResult() => create();
  factory FeedFollowResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FeedFollowResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  FeedFollowResult clone() => FeedFollowResult()..mergeFromMessage(this);
  FeedFollowResult copyWith(void Function(FeedFollowResult) updates) => super.copyWith((message) => updates(message as FeedFollowResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FeedFollowResult create() => FeedFollowResult._();
  FeedFollowResult createEmptyInstance() => create();
  static $pb.PbList<FeedFollowResult> createRepeated() => $pb.PbList<FeedFollowResult>();
  @$core.pragma('dart2js:noInline')
  static FeedFollowResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FeedFollowResult>(create);
  static FeedFollowResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<FeedFollow> get feedfollows => $_getList(0);
}

class FeedFollow extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('FeedFollow', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..e<FeedCategoryEnum>(3, 'feed', $pb.PbFieldType.OE, defaultOrMaker: FeedCategoryEnum.FEED_CATEGORY_NULL, valueOf: FeedCategoryEnum.valueOf, enumValues: FeedCategoryEnum.values)
    ..aOM<$0.Timestamp>(4, 'publishedAt', subBuilder: $0.Timestamp.create)
    ..aOM<$0.Timestamp>(5, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOM<User>(6, 'user', subBuilder: User.create)
    ..aOS(7, 'checksum')
    ..hasRequiredFields = false
  ;

  FeedFollow._() : super();
  factory FeedFollow() => create();
  factory FeedFollow.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FeedFollow.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  FeedFollow clone() => FeedFollow()..mergeFromMessage(this);
  FeedFollow copyWith(void Function(FeedFollow) updates) => super.copyWith((message) => updates(message as FeedFollow));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FeedFollow create() => FeedFollow._();
  FeedFollow createEmptyInstance() => create();
  static $pb.PbList<FeedFollow> createRepeated() => $pb.PbList<FeedFollow>();
  @$core.pragma('dart2js:noInline')
  static FeedFollow getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FeedFollow>(create);
  static FeedFollow _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  FeedCategoryEnum get feed => $_getN(2);
  @$pb.TagNumber(3)
  set feed(FeedCategoryEnum v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasFeed() => $_has(2);
  @$pb.TagNumber(3)
  void clearFeed() => clearField(3);

  @$pb.TagNumber(4)
  $0.Timestamp get publishedAt => $_getN(3);
  @$pb.TagNumber(4)
  set publishedAt($0.Timestamp v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasPublishedAt() => $_has(3);
  @$pb.TagNumber(4)
  void clearPublishedAt() => clearField(4);
  @$pb.TagNumber(4)
  $0.Timestamp ensurePublishedAt() => $_ensure(3);

  @$pb.TagNumber(5)
  $0.Timestamp get updatedAt => $_getN(4);
  @$pb.TagNumber(5)
  set updatedAt($0.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasUpdatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearUpdatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $0.Timestamp ensureUpdatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  User get user => $_getN(5);
  @$pb.TagNumber(6)
  set user(User v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasUser() => $_has(5);
  @$pb.TagNumber(6)
  void clearUser() => clearField(6);
  @$pb.TagNumber(6)
  User ensureUser() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.String get checksum => $_getSZ(6);
  @$pb.TagNumber(7)
  set checksum($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasChecksum() => $_has(6);
  @$pb.TagNumber(7)
  void clearChecksum() => clearField(7);
}

class FollowResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('FollowResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Follow>(1, 'follows', $pb.PbFieldType.PM, subBuilder: Follow.create)
    ..hasRequiredFields = false
  ;

  FollowResult._() : super();
  factory FollowResult() => create();
  factory FollowResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FollowResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  FollowResult clone() => FollowResult()..mergeFromMessage(this);
  FollowResult copyWith(void Function(FollowResult) updates) => super.copyWith((message) => updates(message as FollowResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FollowResult create() => FollowResult._();
  FollowResult createEmptyInstance() => create();
  static $pb.PbList<FollowResult> createRepeated() => $pb.PbList<FollowResult>();
  @$core.pragma('dart2js:noInline')
  static FollowResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FollowResult>(create);
  static FollowResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Follow> get follows => $_getList(0);
}

class Follow extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Follow', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<Game>(2, 'game', subBuilder: Game.create)
    ..aOM<User>(3, 'user', subBuilder: User.create)
    ..aOS(4, 'checksum')
    ..hasRequiredFields = false
  ;

  Follow._() : super();
  factory Follow() => create();
  factory Follow.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Follow.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Follow clone() => Follow()..mergeFromMessage(this);
  Follow copyWith(void Function(Follow) updates) => super.copyWith((message) => updates(message as Follow));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Follow create() => Follow._();
  Follow createEmptyInstance() => create();
  static $pb.PbList<Follow> createRepeated() => $pb.PbList<Follow>();
  @$core.pragma('dart2js:noInline')
  static Follow getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Follow>(create);
  static Follow _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  Game get game => $_getN(1);
  @$pb.TagNumber(2)
  set game(Game v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasGame() => $_has(1);
  @$pb.TagNumber(2)
  void clearGame() => clearField(2);
  @$pb.TagNumber(2)
  Game ensureGame() => $_ensure(1);

  @$pb.TagNumber(3)
  User get user => $_getN(2);
  @$pb.TagNumber(3)
  set user(User v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasUser() => $_has(2);
  @$pb.TagNumber(3)
  void clearUser() => clearField(3);
  @$pb.TagNumber(3)
  User ensureUser() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.String get checksum => $_getSZ(3);
  @$pb.TagNumber(4)
  set checksum($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasChecksum() => $_has(3);
  @$pb.TagNumber(4)
  void clearChecksum() => clearField(4);
}

class FranchiseResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('FranchiseResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Franchise>(1, 'franchises', $pb.PbFieldType.PM, subBuilder: Franchise.create)
    ..hasRequiredFields = false
  ;

  FranchiseResult._() : super();
  factory FranchiseResult() => create();
  factory FranchiseResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FranchiseResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  FranchiseResult clone() => FranchiseResult()..mergeFromMessage(this);
  FranchiseResult copyWith(void Function(FranchiseResult) updates) => super.copyWith((message) => updates(message as FranchiseResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FranchiseResult create() => FranchiseResult._();
  FranchiseResult createEmptyInstance() => create();
  static $pb.PbList<FranchiseResult> createRepeated() => $pb.PbList<FranchiseResult>();
  @$core.pragma('dart2js:noInline')
  static FranchiseResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FranchiseResult>(create);
  static FranchiseResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Franchise> get franchises => $_getList(0);
}

class Franchise extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Franchise', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..pc<Game>(3, 'games', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..aOS(4, 'name')
    ..aOS(5, 'slug')
    ..aOM<$0.Timestamp>(6, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(7, 'url')
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  Franchise._() : super();
  factory Franchise() => create();
  factory Franchise.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Franchise.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Franchise clone() => Franchise()..mergeFromMessage(this);
  Franchise copyWith(void Function(Franchise) updates) => super.copyWith((message) => updates(message as Franchise));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Franchise create() => Franchise._();
  Franchise createEmptyInstance() => create();
  static $pb.PbList<Franchise> createRepeated() => $pb.PbList<Franchise>();
  @$core.pragma('dart2js:noInline')
  static Franchise getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Franchise>(create);
  static Franchise _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.List<Game> get games => $_getList(2);

  @$pb.TagNumber(4)
  $core.String get name => $_getSZ(3);
  @$pb.TagNumber(4)
  set name($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasName() => $_has(3);
  @$pb.TagNumber(4)
  void clearName() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get slug => $_getSZ(4);
  @$pb.TagNumber(5)
  set slug($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasSlug() => $_has(4);
  @$pb.TagNumber(5)
  void clearSlug() => clearField(5);

  @$pb.TagNumber(6)
  $0.Timestamp get updatedAt => $_getN(5);
  @$pb.TagNumber(6)
  set updatedAt($0.Timestamp v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasUpdatedAt() => $_has(5);
  @$pb.TagNumber(6)
  void clearUpdatedAt() => clearField(6);
  @$pb.TagNumber(6)
  $0.Timestamp ensureUpdatedAt() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.String get url => $_getSZ(6);
  @$pb.TagNumber(7)
  set url($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasUrl() => $_has(6);
  @$pb.TagNumber(7)
  void clearUrl() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class GameResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Game>(1, 'games', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..hasRequiredFields = false
  ;

  GameResult._() : super();
  factory GameResult() => create();
  factory GameResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameResult clone() => GameResult()..mergeFromMessage(this);
  GameResult copyWith(void Function(GameResult) updates) => super.copyWith((message) => updates(message as GameResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameResult create() => GameResult._();
  GameResult createEmptyInstance() => create();
  static $pb.PbList<GameResult> createRepeated() => $pb.PbList<GameResult>();
  @$core.pragma('dart2js:noInline')
  static GameResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameResult>(create);
  static GameResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Game> get games => $_getList(0);
}

class Game extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Game', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..pc<AgeRating>(2, 'ageRatings', $pb.PbFieldType.PM, subBuilder: AgeRating.create)
    ..a<$core.double>(3, 'aggregatedRating', $pb.PbFieldType.OD)
    ..a<$core.int>(4, 'aggregatedRatingCount', $pb.PbFieldType.O3)
    ..pc<AlternativeName>(5, 'alternativeNames', $pb.PbFieldType.PM, subBuilder: AlternativeName.create)
    ..pc<Artwork>(6, 'artworks', $pb.PbFieldType.PM, subBuilder: Artwork.create)
    ..pc<Game>(7, 'bundles', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..e<GameCategoryEnum>(8, 'category', $pb.PbFieldType.OE, defaultOrMaker: GameCategoryEnum.MAIN_GAME, valueOf: GameCategoryEnum.valueOf, enumValues: GameCategoryEnum.values)
    ..aOM<Collection>(9, 'collection', subBuilder: Collection.create)
    ..aOM<Cover>(10, 'cover', subBuilder: Cover.create)
    ..aOM<$0.Timestamp>(11, 'createdAt', subBuilder: $0.Timestamp.create)
    ..pc<Game>(12, 'dlcs', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..pc<Game>(13, 'expansions', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..pc<ExternalGame>(14, 'externalGames', $pb.PbFieldType.PM, subBuilder: ExternalGame.create)
    ..aOM<$0.Timestamp>(15, 'firstReleaseDate', subBuilder: $0.Timestamp.create)
    ..a<$core.int>(16, 'follows', $pb.PbFieldType.O3)
    ..aOM<Franchise>(17, 'franchise', subBuilder: Franchise.create)
    ..pc<Franchise>(18, 'franchises', $pb.PbFieldType.PM, subBuilder: Franchise.create)
    ..pc<GameEngine>(19, 'gameEngines', $pb.PbFieldType.PM, subBuilder: GameEngine.create)
    ..pc<GameMode>(20, 'gameModes', $pb.PbFieldType.PM, subBuilder: GameMode.create)
    ..pc<Genre>(21, 'genres', $pb.PbFieldType.PM, subBuilder: Genre.create)
    ..a<$core.int>(22, 'hypes', $pb.PbFieldType.O3)
    ..pc<InvolvedCompany>(23, 'involvedCompanies', $pb.PbFieldType.PM, subBuilder: InvolvedCompany.create)
    ..pc<Keyword>(24, 'keywords', $pb.PbFieldType.PM, subBuilder: Keyword.create)
    ..pc<MultiplayerMode>(25, 'multiplayerModes', $pb.PbFieldType.PM, subBuilder: MultiplayerMode.create)
    ..aOS(26, 'name')
    ..aOM<Game>(27, 'parentGame', subBuilder: Game.create)
    ..pc<Platform>(28, 'platforms', $pb.PbFieldType.PM, subBuilder: Platform.create)
    ..pc<PlayerPerspective>(29, 'playerPerspectives', $pb.PbFieldType.PM, subBuilder: PlayerPerspective.create)
    ..a<$core.double>(30, 'popularity', $pb.PbFieldType.OD)
    ..a<$core.int>(31, 'pulseCount', $pb.PbFieldType.O3)
    ..a<$core.double>(32, 'rating', $pb.PbFieldType.OD)
    ..a<$core.int>(33, 'ratingCount', $pb.PbFieldType.O3)
    ..pc<ReleaseDate>(34, 'releaseDates', $pb.PbFieldType.PM, subBuilder: ReleaseDate.create)
    ..pc<Screenshot>(35, 'screenshots', $pb.PbFieldType.PM, subBuilder: Screenshot.create)
    ..pc<Game>(36, 'similarGames', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..aOS(37, 'slug')
    ..pc<Game>(38, 'standaloneExpansions', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..e<GameStatusEnum>(39, 'status', $pb.PbFieldType.OE, defaultOrMaker: GameStatusEnum.RELEASED, valueOf: GameStatusEnum.valueOf, enumValues: GameStatusEnum.values)
    ..aOS(40, 'storyline')
    ..aOS(41, 'summary')
    ..p<$core.int>(42, 'tags', $pb.PbFieldType.P3)
    ..pc<Theme>(43, 'themes', $pb.PbFieldType.PM, subBuilder: Theme.create)
    ..aOM<TimeToBeat>(44, 'timeToBeat', subBuilder: TimeToBeat.create)
    ..a<$core.double>(45, 'totalRating', $pb.PbFieldType.OD)
    ..a<$core.int>(46, 'totalRatingCount', $pb.PbFieldType.O3)
    ..aOM<$0.Timestamp>(47, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(48, 'url')
    ..aOM<Game>(49, 'versionParent', subBuilder: Game.create)
    ..aOS(50, 'versionTitle')
    ..pc<GameVideo>(51, 'videos', $pb.PbFieldType.PM, subBuilder: GameVideo.create)
    ..pc<Website>(52, 'websites', $pb.PbFieldType.PM, subBuilder: Website.create)
    ..aOS(53, 'checksum')
    ..hasRequiredFields = false
  ;

  Game._() : super();
  factory Game() => create();
  factory Game.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Game.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Game clone() => Game()..mergeFromMessage(this);
  Game copyWith(void Function(Game) updates) => super.copyWith((message) => updates(message as Game));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Game create() => Game._();
  Game createEmptyInstance() => create();
  static $pb.PbList<Game> createRepeated() => $pb.PbList<Game>();
  @$core.pragma('dart2js:noInline')
  static Game getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Game>(create);
  static Game _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<AgeRating> get ageRatings => $_getList(1);

  @$pb.TagNumber(3)
  $core.double get aggregatedRating => $_getN(2);
  @$pb.TagNumber(3)
  set aggregatedRating($core.double v) { $_setDouble(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAggregatedRating() => $_has(2);
  @$pb.TagNumber(3)
  void clearAggregatedRating() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get aggregatedRatingCount => $_getIZ(3);
  @$pb.TagNumber(4)
  set aggregatedRatingCount($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasAggregatedRatingCount() => $_has(3);
  @$pb.TagNumber(4)
  void clearAggregatedRatingCount() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<AlternativeName> get alternativeNames => $_getList(4);

  @$pb.TagNumber(6)
  $core.List<Artwork> get artworks => $_getList(5);

  @$pb.TagNumber(7)
  $core.List<Game> get bundles => $_getList(6);

  @$pb.TagNumber(8)
  GameCategoryEnum get category => $_getN(7);
  @$pb.TagNumber(8)
  set category(GameCategoryEnum v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasCategory() => $_has(7);
  @$pb.TagNumber(8)
  void clearCategory() => clearField(8);

  @$pb.TagNumber(9)
  Collection get collection => $_getN(8);
  @$pb.TagNumber(9)
  set collection(Collection v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasCollection() => $_has(8);
  @$pb.TagNumber(9)
  void clearCollection() => clearField(9);
  @$pb.TagNumber(9)
  Collection ensureCollection() => $_ensure(8);

  @$pb.TagNumber(10)
  Cover get cover => $_getN(9);
  @$pb.TagNumber(10)
  set cover(Cover v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasCover() => $_has(9);
  @$pb.TagNumber(10)
  void clearCover() => clearField(10);
  @$pb.TagNumber(10)
  Cover ensureCover() => $_ensure(9);

  @$pb.TagNumber(11)
  $0.Timestamp get createdAt => $_getN(10);
  @$pb.TagNumber(11)
  set createdAt($0.Timestamp v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasCreatedAt() => $_has(10);
  @$pb.TagNumber(11)
  void clearCreatedAt() => clearField(11);
  @$pb.TagNumber(11)
  $0.Timestamp ensureCreatedAt() => $_ensure(10);

  @$pb.TagNumber(12)
  $core.List<Game> get dlcs => $_getList(11);

  @$pb.TagNumber(13)
  $core.List<Game> get expansions => $_getList(12);

  @$pb.TagNumber(14)
  $core.List<ExternalGame> get externalGames => $_getList(13);

  @$pb.TagNumber(15)
  $0.Timestamp get firstReleaseDate => $_getN(14);
  @$pb.TagNumber(15)
  set firstReleaseDate($0.Timestamp v) { setField(15, v); }
  @$pb.TagNumber(15)
  $core.bool hasFirstReleaseDate() => $_has(14);
  @$pb.TagNumber(15)
  void clearFirstReleaseDate() => clearField(15);
  @$pb.TagNumber(15)
  $0.Timestamp ensureFirstReleaseDate() => $_ensure(14);

  @$pb.TagNumber(16)
  $core.int get follows => $_getIZ(15);
  @$pb.TagNumber(16)
  set follows($core.int v) { $_setSignedInt32(15, v); }
  @$pb.TagNumber(16)
  $core.bool hasFollows() => $_has(15);
  @$pb.TagNumber(16)
  void clearFollows() => clearField(16);

  @$pb.TagNumber(17)
  Franchise get franchise => $_getN(16);
  @$pb.TagNumber(17)
  set franchise(Franchise v) { setField(17, v); }
  @$pb.TagNumber(17)
  $core.bool hasFranchise() => $_has(16);
  @$pb.TagNumber(17)
  void clearFranchise() => clearField(17);
  @$pb.TagNumber(17)
  Franchise ensureFranchise() => $_ensure(16);

  @$pb.TagNumber(18)
  $core.List<Franchise> get franchises => $_getList(17);

  @$pb.TagNumber(19)
  $core.List<GameEngine> get gameEngines => $_getList(18);

  @$pb.TagNumber(20)
  $core.List<GameMode> get gameModes => $_getList(19);

  @$pb.TagNumber(21)
  $core.List<Genre> get genres => $_getList(20);

  @$pb.TagNumber(22)
  $core.int get hypes => $_getIZ(21);
  @$pb.TagNumber(22)
  set hypes($core.int v) { $_setSignedInt32(21, v); }
  @$pb.TagNumber(22)
  $core.bool hasHypes() => $_has(21);
  @$pb.TagNumber(22)
  void clearHypes() => clearField(22);

  @$pb.TagNumber(23)
  $core.List<InvolvedCompany> get involvedCompanies => $_getList(22);

  @$pb.TagNumber(24)
  $core.List<Keyword> get keywords => $_getList(23);

  @$pb.TagNumber(25)
  $core.List<MultiplayerMode> get multiplayerModes => $_getList(24);

  @$pb.TagNumber(26)
  $core.String get name => $_getSZ(25);
  @$pb.TagNumber(26)
  set name($core.String v) { $_setString(25, v); }
  @$pb.TagNumber(26)
  $core.bool hasName() => $_has(25);
  @$pb.TagNumber(26)
  void clearName() => clearField(26);

  @$pb.TagNumber(27)
  Game get parentGame => $_getN(26);
  @$pb.TagNumber(27)
  set parentGame(Game v) { setField(27, v); }
  @$pb.TagNumber(27)
  $core.bool hasParentGame() => $_has(26);
  @$pb.TagNumber(27)
  void clearParentGame() => clearField(27);
  @$pb.TagNumber(27)
  Game ensureParentGame() => $_ensure(26);

  @$pb.TagNumber(28)
  $core.List<Platform> get platforms => $_getList(27);

  @$pb.TagNumber(29)
  $core.List<PlayerPerspective> get playerPerspectives => $_getList(28);

  @$pb.TagNumber(30)
  $core.double get popularity => $_getN(29);
  @$pb.TagNumber(30)
  set popularity($core.double v) { $_setDouble(29, v); }
  @$pb.TagNumber(30)
  $core.bool hasPopularity() => $_has(29);
  @$pb.TagNumber(30)
  void clearPopularity() => clearField(30);

  @$pb.TagNumber(31)
  $core.int get pulseCount => $_getIZ(30);
  @$pb.TagNumber(31)
  set pulseCount($core.int v) { $_setSignedInt32(30, v); }
  @$pb.TagNumber(31)
  $core.bool hasPulseCount() => $_has(30);
  @$pb.TagNumber(31)
  void clearPulseCount() => clearField(31);

  @$pb.TagNumber(32)
  $core.double get rating => $_getN(31);
  @$pb.TagNumber(32)
  set rating($core.double v) { $_setDouble(31, v); }
  @$pb.TagNumber(32)
  $core.bool hasRating() => $_has(31);
  @$pb.TagNumber(32)
  void clearRating() => clearField(32);

  @$pb.TagNumber(33)
  $core.int get ratingCount => $_getIZ(32);
  @$pb.TagNumber(33)
  set ratingCount($core.int v) { $_setSignedInt32(32, v); }
  @$pb.TagNumber(33)
  $core.bool hasRatingCount() => $_has(32);
  @$pb.TagNumber(33)
  void clearRatingCount() => clearField(33);

  @$pb.TagNumber(34)
  $core.List<ReleaseDate> get releaseDates => $_getList(33);

  @$pb.TagNumber(35)
  $core.List<Screenshot> get screenshots => $_getList(34);

  @$pb.TagNumber(36)
  $core.List<Game> get similarGames => $_getList(35);

  @$pb.TagNumber(37)
  $core.String get slug => $_getSZ(36);
  @$pb.TagNumber(37)
  set slug($core.String v) { $_setString(36, v); }
  @$pb.TagNumber(37)
  $core.bool hasSlug() => $_has(36);
  @$pb.TagNumber(37)
  void clearSlug() => clearField(37);

  @$pb.TagNumber(38)
  $core.List<Game> get standaloneExpansions => $_getList(37);

  @$pb.TagNumber(39)
  GameStatusEnum get status => $_getN(38);
  @$pb.TagNumber(39)
  set status(GameStatusEnum v) { setField(39, v); }
  @$pb.TagNumber(39)
  $core.bool hasStatus() => $_has(38);
  @$pb.TagNumber(39)
  void clearStatus() => clearField(39);

  @$pb.TagNumber(40)
  $core.String get storyline => $_getSZ(39);
  @$pb.TagNumber(40)
  set storyline($core.String v) { $_setString(39, v); }
  @$pb.TagNumber(40)
  $core.bool hasStoryline() => $_has(39);
  @$pb.TagNumber(40)
  void clearStoryline() => clearField(40);

  @$pb.TagNumber(41)
  $core.String get summary => $_getSZ(40);
  @$pb.TagNumber(41)
  set summary($core.String v) { $_setString(40, v); }
  @$pb.TagNumber(41)
  $core.bool hasSummary() => $_has(40);
  @$pb.TagNumber(41)
  void clearSummary() => clearField(41);

  @$pb.TagNumber(42)
  $core.List<$core.int> get tags => $_getList(41);

  @$pb.TagNumber(43)
  $core.List<Theme> get themes => $_getList(42);

  @$pb.TagNumber(44)
  TimeToBeat get timeToBeat => $_getN(43);
  @$pb.TagNumber(44)
  set timeToBeat(TimeToBeat v) { setField(44, v); }
  @$pb.TagNumber(44)
  $core.bool hasTimeToBeat() => $_has(43);
  @$pb.TagNumber(44)
  void clearTimeToBeat() => clearField(44);
  @$pb.TagNumber(44)
  TimeToBeat ensureTimeToBeat() => $_ensure(43);

  @$pb.TagNumber(45)
  $core.double get totalRating => $_getN(44);
  @$pb.TagNumber(45)
  set totalRating($core.double v) { $_setDouble(44, v); }
  @$pb.TagNumber(45)
  $core.bool hasTotalRating() => $_has(44);
  @$pb.TagNumber(45)
  void clearTotalRating() => clearField(45);

  @$pb.TagNumber(46)
  $core.int get totalRatingCount => $_getIZ(45);
  @$pb.TagNumber(46)
  set totalRatingCount($core.int v) { $_setSignedInt32(45, v); }
  @$pb.TagNumber(46)
  $core.bool hasTotalRatingCount() => $_has(45);
  @$pb.TagNumber(46)
  void clearTotalRatingCount() => clearField(46);

  @$pb.TagNumber(47)
  $0.Timestamp get updatedAt => $_getN(46);
  @$pb.TagNumber(47)
  set updatedAt($0.Timestamp v) { setField(47, v); }
  @$pb.TagNumber(47)
  $core.bool hasUpdatedAt() => $_has(46);
  @$pb.TagNumber(47)
  void clearUpdatedAt() => clearField(47);
  @$pb.TagNumber(47)
  $0.Timestamp ensureUpdatedAt() => $_ensure(46);

  @$pb.TagNumber(48)
  $core.String get url => $_getSZ(47);
  @$pb.TagNumber(48)
  set url($core.String v) { $_setString(47, v); }
  @$pb.TagNumber(48)
  $core.bool hasUrl() => $_has(47);
  @$pb.TagNumber(48)
  void clearUrl() => clearField(48);

  @$pb.TagNumber(49)
  Game get versionParent => $_getN(48);
  @$pb.TagNumber(49)
  set versionParent(Game v) { setField(49, v); }
  @$pb.TagNumber(49)
  $core.bool hasVersionParent() => $_has(48);
  @$pb.TagNumber(49)
  void clearVersionParent() => clearField(49);
  @$pb.TagNumber(49)
  Game ensureVersionParent() => $_ensure(48);

  @$pb.TagNumber(50)
  $core.String get versionTitle => $_getSZ(49);
  @$pb.TagNumber(50)
  set versionTitle($core.String v) { $_setString(49, v); }
  @$pb.TagNumber(50)
  $core.bool hasVersionTitle() => $_has(49);
  @$pb.TagNumber(50)
  void clearVersionTitle() => clearField(50);

  @$pb.TagNumber(51)
  $core.List<GameVideo> get videos => $_getList(50);

  @$pb.TagNumber(52)
  $core.List<Website> get websites => $_getList(51);

  @$pb.TagNumber(53)
  $core.String get checksum => $_getSZ(52);
  @$pb.TagNumber(53)
  set checksum($core.String v) { $_setString(52, v); }
  @$pb.TagNumber(53)
  $core.bool hasChecksum() => $_has(52);
  @$pb.TagNumber(53)
  void clearChecksum() => clearField(53);
}

class GameEngineResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameEngineResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<GameEngine>(1, 'gameengines', $pb.PbFieldType.PM, subBuilder: GameEngine.create)
    ..hasRequiredFields = false
  ;

  GameEngineResult._() : super();
  factory GameEngineResult() => create();
  factory GameEngineResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameEngineResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameEngineResult clone() => GameEngineResult()..mergeFromMessage(this);
  GameEngineResult copyWith(void Function(GameEngineResult) updates) => super.copyWith((message) => updates(message as GameEngineResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameEngineResult create() => GameEngineResult._();
  GameEngineResult createEmptyInstance() => create();
  static $pb.PbList<GameEngineResult> createRepeated() => $pb.PbList<GameEngineResult>();
  @$core.pragma('dart2js:noInline')
  static GameEngineResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameEngineResult>(create);
  static GameEngineResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<GameEngine> get gameengines => $_getList(0);
}

class GameEngine extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameEngine', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..pc<Company>(2, 'companies', $pb.PbFieldType.PM, subBuilder: Company.create)
    ..aOM<$0.Timestamp>(3, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(4, 'description')
    ..aOM<GameEngineLogo>(5, 'logo', subBuilder: GameEngineLogo.create)
    ..aOS(6, 'name')
    ..pc<Platform>(7, 'platforms', $pb.PbFieldType.PM, subBuilder: Platform.create)
    ..aOS(8, 'slug')
    ..aOM<$0.Timestamp>(9, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(10, 'url')
    ..aOS(11, 'checksum')
    ..hasRequiredFields = false
  ;

  GameEngine._() : super();
  factory GameEngine() => create();
  factory GameEngine.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameEngine.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameEngine clone() => GameEngine()..mergeFromMessage(this);
  GameEngine copyWith(void Function(GameEngine) updates) => super.copyWith((message) => updates(message as GameEngine));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameEngine create() => GameEngine._();
  GameEngine createEmptyInstance() => create();
  static $pb.PbList<GameEngine> createRepeated() => $pb.PbList<GameEngine>();
  @$core.pragma('dart2js:noInline')
  static GameEngine getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameEngine>(create);
  static GameEngine _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<Company> get companies => $_getList(1);

  @$pb.TagNumber(3)
  $0.Timestamp get createdAt => $_getN(2);
  @$pb.TagNumber(3)
  set createdAt($0.Timestamp v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCreatedAt() => $_has(2);
  @$pb.TagNumber(3)
  void clearCreatedAt() => clearField(3);
  @$pb.TagNumber(3)
  $0.Timestamp ensureCreatedAt() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.String get description => $_getSZ(3);
  @$pb.TagNumber(4)
  set description($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasDescription() => $_has(3);
  @$pb.TagNumber(4)
  void clearDescription() => clearField(4);

  @$pb.TagNumber(5)
  GameEngineLogo get logo => $_getN(4);
  @$pb.TagNumber(5)
  set logo(GameEngineLogo v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasLogo() => $_has(4);
  @$pb.TagNumber(5)
  void clearLogo() => clearField(5);
  @$pb.TagNumber(5)
  GameEngineLogo ensureLogo() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get name => $_getSZ(5);
  @$pb.TagNumber(6)
  set name($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasName() => $_has(5);
  @$pb.TagNumber(6)
  void clearName() => clearField(6);

  @$pb.TagNumber(7)
  $core.List<Platform> get platforms => $_getList(6);

  @$pb.TagNumber(8)
  $core.String get slug => $_getSZ(7);
  @$pb.TagNumber(8)
  set slug($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasSlug() => $_has(7);
  @$pb.TagNumber(8)
  void clearSlug() => clearField(8);

  @$pb.TagNumber(9)
  $0.Timestamp get updatedAt => $_getN(8);
  @$pb.TagNumber(9)
  set updatedAt($0.Timestamp v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasUpdatedAt() => $_has(8);
  @$pb.TagNumber(9)
  void clearUpdatedAt() => clearField(9);
  @$pb.TagNumber(9)
  $0.Timestamp ensureUpdatedAt() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.String get url => $_getSZ(9);
  @$pb.TagNumber(10)
  set url($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasUrl() => $_has(9);
  @$pb.TagNumber(10)
  void clearUrl() => clearField(10);

  @$pb.TagNumber(11)
  $core.String get checksum => $_getSZ(10);
  @$pb.TagNumber(11)
  set checksum($core.String v) { $_setString(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasChecksum() => $_has(10);
  @$pb.TagNumber(11)
  void clearChecksum() => clearField(11);
}

class GameEngineLogoResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameEngineLogoResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<GameEngineLogo>(1, 'gameenginelogos', $pb.PbFieldType.PM, subBuilder: GameEngineLogo.create)
    ..hasRequiredFields = false
  ;

  GameEngineLogoResult._() : super();
  factory GameEngineLogoResult() => create();
  factory GameEngineLogoResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameEngineLogoResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameEngineLogoResult clone() => GameEngineLogoResult()..mergeFromMessage(this);
  GameEngineLogoResult copyWith(void Function(GameEngineLogoResult) updates) => super.copyWith((message) => updates(message as GameEngineLogoResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameEngineLogoResult create() => GameEngineLogoResult._();
  GameEngineLogoResult createEmptyInstance() => create();
  static $pb.PbList<GameEngineLogoResult> createRepeated() => $pb.PbList<GameEngineLogoResult>();
  @$core.pragma('dart2js:noInline')
  static GameEngineLogoResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameEngineLogoResult>(create);
  static GameEngineLogoResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<GameEngineLogo> get gameenginelogos => $_getList(0);
}

class GameEngineLogo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameEngineLogo', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..a<$core.int>(4, 'height', $pb.PbFieldType.O3)
    ..aOS(5, 'imageId')
    ..aOS(6, 'url')
    ..a<$core.int>(7, 'width', $pb.PbFieldType.O3)
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  GameEngineLogo._() : super();
  factory GameEngineLogo() => create();
  factory GameEngineLogo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameEngineLogo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameEngineLogo clone() => GameEngineLogo()..mergeFromMessage(this);
  GameEngineLogo copyWith(void Function(GameEngineLogo) updates) => super.copyWith((message) => updates(message as GameEngineLogo));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameEngineLogo create() => GameEngineLogo._();
  GameEngineLogo createEmptyInstance() => create();
  static $pb.PbList<GameEngineLogo> createRepeated() => $pb.PbList<GameEngineLogo>();
  @$core.pragma('dart2js:noInline')
  static GameEngineLogo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameEngineLogo>(create);
  static GameEngineLogo _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get height => $_getIZ(3);
  @$pb.TagNumber(4)
  set height($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHeight() => $_has(3);
  @$pb.TagNumber(4)
  void clearHeight() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get imageId => $_getSZ(4);
  @$pb.TagNumber(5)
  set imageId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasImageId() => $_has(4);
  @$pb.TagNumber(5)
  void clearImageId() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get width => $_getIZ(6);
  @$pb.TagNumber(7)
  set width($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasWidth() => $_has(6);
  @$pb.TagNumber(7)
  void clearWidth() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class GameModeResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameModeResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<GameMode>(1, 'gamemodes', $pb.PbFieldType.PM, subBuilder: GameMode.create)
    ..hasRequiredFields = false
  ;

  GameModeResult._() : super();
  factory GameModeResult() => create();
  factory GameModeResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameModeResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameModeResult clone() => GameModeResult()..mergeFromMessage(this);
  GameModeResult copyWith(void Function(GameModeResult) updates) => super.copyWith((message) => updates(message as GameModeResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameModeResult create() => GameModeResult._();
  GameModeResult createEmptyInstance() => create();
  static $pb.PbList<GameModeResult> createRepeated() => $pb.PbList<GameModeResult>();
  @$core.pragma('dart2js:noInline')
  static GameModeResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameModeResult>(create);
  static GameModeResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<GameMode> get gamemodes => $_getList(0);
}

class GameMode extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameMode', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(3, 'name')
    ..aOS(4, 'slug')
    ..aOM<$0.Timestamp>(5, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(6, 'url')
    ..aOS(7, 'checksum')
    ..hasRequiredFields = false
  ;

  GameMode._() : super();
  factory GameMode() => create();
  factory GameMode.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameMode.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameMode clone() => GameMode()..mergeFromMessage(this);
  GameMode copyWith(void Function(GameMode) updates) => super.copyWith((message) => updates(message as GameMode));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameMode create() => GameMode._();
  GameMode createEmptyInstance() => create();
  static $pb.PbList<GameMode> createRepeated() => $pb.PbList<GameMode>();
  @$core.pragma('dart2js:noInline')
  static GameMode getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameMode>(create);
  static GameMode _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get name => $_getSZ(2);
  @$pb.TagNumber(3)
  set name($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasName() => $_has(2);
  @$pb.TagNumber(3)
  void clearName() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get slug => $_getSZ(3);
  @$pb.TagNumber(4)
  set slug($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasSlug() => $_has(3);
  @$pb.TagNumber(4)
  void clearSlug() => clearField(4);

  @$pb.TagNumber(5)
  $0.Timestamp get updatedAt => $_getN(4);
  @$pb.TagNumber(5)
  set updatedAt($0.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasUpdatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearUpdatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $0.Timestamp ensureUpdatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get checksum => $_getSZ(6);
  @$pb.TagNumber(7)
  set checksum($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasChecksum() => $_has(6);
  @$pb.TagNumber(7)
  void clearChecksum() => clearField(7);
}

class GameVersionResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameVersionResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<GameVersion>(1, 'gameversions', $pb.PbFieldType.PM, subBuilder: GameVersion.create)
    ..hasRequiredFields = false
  ;

  GameVersionResult._() : super();
  factory GameVersionResult() => create();
  factory GameVersionResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameVersionResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameVersionResult clone() => GameVersionResult()..mergeFromMessage(this);
  GameVersionResult copyWith(void Function(GameVersionResult) updates) => super.copyWith((message) => updates(message as GameVersionResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameVersionResult create() => GameVersionResult._();
  GameVersionResult createEmptyInstance() => create();
  static $pb.PbList<GameVersionResult> createRepeated() => $pb.PbList<GameVersionResult>();
  @$core.pragma('dart2js:noInline')
  static GameVersionResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameVersionResult>(create);
  static GameVersionResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<GameVersion> get gameversions => $_getList(0);
}

class GameVersion extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameVersion', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..pc<GameVersionFeature>(3, 'features', $pb.PbFieldType.PM, subBuilder: GameVersionFeature.create)
    ..aOM<Game>(4, 'game', subBuilder: Game.create)
    ..pc<Game>(5, 'games', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..aOM<$0.Timestamp>(6, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(7, 'url')
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  GameVersion._() : super();
  factory GameVersion() => create();
  factory GameVersion.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameVersion.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameVersion clone() => GameVersion()..mergeFromMessage(this);
  GameVersion copyWith(void Function(GameVersion) updates) => super.copyWith((message) => updates(message as GameVersion));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameVersion create() => GameVersion._();
  GameVersion createEmptyInstance() => create();
  static $pb.PbList<GameVersion> createRepeated() => $pb.PbList<GameVersion>();
  @$core.pragma('dart2js:noInline')
  static GameVersion getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameVersion>(create);
  static GameVersion _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.List<GameVersionFeature> get features => $_getList(2);

  @$pb.TagNumber(4)
  Game get game => $_getN(3);
  @$pb.TagNumber(4)
  set game(Game v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGame() => $_has(3);
  @$pb.TagNumber(4)
  void clearGame() => clearField(4);
  @$pb.TagNumber(4)
  Game ensureGame() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.List<Game> get games => $_getList(4);

  @$pb.TagNumber(6)
  $0.Timestamp get updatedAt => $_getN(5);
  @$pb.TagNumber(6)
  set updatedAt($0.Timestamp v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasUpdatedAt() => $_has(5);
  @$pb.TagNumber(6)
  void clearUpdatedAt() => clearField(6);
  @$pb.TagNumber(6)
  $0.Timestamp ensureUpdatedAt() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.String get url => $_getSZ(6);
  @$pb.TagNumber(7)
  set url($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasUrl() => $_has(6);
  @$pb.TagNumber(7)
  void clearUrl() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class GameVersionFeatureResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameVersionFeatureResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<GameVersionFeature>(1, 'gameversionfeatures', $pb.PbFieldType.PM, subBuilder: GameVersionFeature.create)
    ..hasRequiredFields = false
  ;

  GameVersionFeatureResult._() : super();
  factory GameVersionFeatureResult() => create();
  factory GameVersionFeatureResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameVersionFeatureResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameVersionFeatureResult clone() => GameVersionFeatureResult()..mergeFromMessage(this);
  GameVersionFeatureResult copyWith(void Function(GameVersionFeatureResult) updates) => super.copyWith((message) => updates(message as GameVersionFeatureResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameVersionFeatureResult create() => GameVersionFeatureResult._();
  GameVersionFeatureResult createEmptyInstance() => create();
  static $pb.PbList<GameVersionFeatureResult> createRepeated() => $pb.PbList<GameVersionFeatureResult>();
  @$core.pragma('dart2js:noInline')
  static GameVersionFeatureResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameVersionFeatureResult>(create);
  static GameVersionFeatureResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<GameVersionFeature> get gameversionfeatures => $_getList(0);
}

class GameVersionFeature extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameVersionFeature', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<GameVersionFeatureCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: GameVersionFeatureCategoryEnum.BOOLEAN, valueOf: GameVersionFeatureCategoryEnum.valueOf, enumValues: GameVersionFeatureCategoryEnum.values)
    ..aOS(3, 'description')
    ..a<$core.int>(4, 'position', $pb.PbFieldType.O3)
    ..aOS(5, 'title')
    ..pc<GameVersionFeatureValue>(6, 'values', $pb.PbFieldType.PM, subBuilder: GameVersionFeatureValue.create)
    ..aOS(7, 'checksum')
    ..hasRequiredFields = false
  ;

  GameVersionFeature._() : super();
  factory GameVersionFeature() => create();
  factory GameVersionFeature.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameVersionFeature.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameVersionFeature clone() => GameVersionFeature()..mergeFromMessage(this);
  GameVersionFeature copyWith(void Function(GameVersionFeature) updates) => super.copyWith((message) => updates(message as GameVersionFeature));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameVersionFeature create() => GameVersionFeature._();
  GameVersionFeature createEmptyInstance() => create();
  static $pb.PbList<GameVersionFeature> createRepeated() => $pb.PbList<GameVersionFeature>();
  @$core.pragma('dart2js:noInline')
  static GameVersionFeature getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameVersionFeature>(create);
  static GameVersionFeature _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  GameVersionFeatureCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(GameVersionFeatureCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get description => $_getSZ(2);
  @$pb.TagNumber(3)
  set description($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasDescription() => $_has(2);
  @$pb.TagNumber(3)
  void clearDescription() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get position => $_getIZ(3);
  @$pb.TagNumber(4)
  set position($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasPosition() => $_has(3);
  @$pb.TagNumber(4)
  void clearPosition() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get title => $_getSZ(4);
  @$pb.TagNumber(5)
  set title($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasTitle() => $_has(4);
  @$pb.TagNumber(5)
  void clearTitle() => clearField(5);

  @$pb.TagNumber(6)
  $core.List<GameVersionFeatureValue> get values => $_getList(5);

  @$pb.TagNumber(7)
  $core.String get checksum => $_getSZ(6);
  @$pb.TagNumber(7)
  set checksum($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasChecksum() => $_has(6);
  @$pb.TagNumber(7)
  void clearChecksum() => clearField(7);
}

class GameVersionFeatureValueResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameVersionFeatureValueResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<GameVersionFeatureValue>(1, 'gameversionfeaturevalues', $pb.PbFieldType.PM, subBuilder: GameVersionFeatureValue.create)
    ..hasRequiredFields = false
  ;

  GameVersionFeatureValueResult._() : super();
  factory GameVersionFeatureValueResult() => create();
  factory GameVersionFeatureValueResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameVersionFeatureValueResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameVersionFeatureValueResult clone() => GameVersionFeatureValueResult()..mergeFromMessage(this);
  GameVersionFeatureValueResult copyWith(void Function(GameVersionFeatureValueResult) updates) => super.copyWith((message) => updates(message as GameVersionFeatureValueResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameVersionFeatureValueResult create() => GameVersionFeatureValueResult._();
  GameVersionFeatureValueResult createEmptyInstance() => create();
  static $pb.PbList<GameVersionFeatureValueResult> createRepeated() => $pb.PbList<GameVersionFeatureValueResult>();
  @$core.pragma('dart2js:noInline')
  static GameVersionFeatureValueResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameVersionFeatureValueResult>(create);
  static GameVersionFeatureValueResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<GameVersionFeatureValue> get gameversionfeaturevalues => $_getList(0);
}

class GameVersionFeatureValue extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameVersionFeatureValue', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<Game>(2, 'game', subBuilder: Game.create)
    ..aOM<GameVersionFeature>(3, 'gameFeature', subBuilder: GameVersionFeature.create)
    ..e<GameVersionFeatureValueIncludedFeatureEnum>(4, 'includedFeature', $pb.PbFieldType.OE, defaultOrMaker: GameVersionFeatureValueIncludedFeatureEnum.NOT_INCLUDED, valueOf: GameVersionFeatureValueIncludedFeatureEnum.valueOf, enumValues: GameVersionFeatureValueIncludedFeatureEnum.values)
    ..aOS(5, 'note')
    ..aOS(6, 'checksum')
    ..hasRequiredFields = false
  ;

  GameVersionFeatureValue._() : super();
  factory GameVersionFeatureValue() => create();
  factory GameVersionFeatureValue.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameVersionFeatureValue.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameVersionFeatureValue clone() => GameVersionFeatureValue()..mergeFromMessage(this);
  GameVersionFeatureValue copyWith(void Function(GameVersionFeatureValue) updates) => super.copyWith((message) => updates(message as GameVersionFeatureValue));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameVersionFeatureValue create() => GameVersionFeatureValue._();
  GameVersionFeatureValue createEmptyInstance() => create();
  static $pb.PbList<GameVersionFeatureValue> createRepeated() => $pb.PbList<GameVersionFeatureValue>();
  @$core.pragma('dart2js:noInline')
  static GameVersionFeatureValue getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameVersionFeatureValue>(create);
  static GameVersionFeatureValue _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  Game get game => $_getN(1);
  @$pb.TagNumber(2)
  set game(Game v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasGame() => $_has(1);
  @$pb.TagNumber(2)
  void clearGame() => clearField(2);
  @$pb.TagNumber(2)
  Game ensureGame() => $_ensure(1);

  @$pb.TagNumber(3)
  GameVersionFeature get gameFeature => $_getN(2);
  @$pb.TagNumber(3)
  set gameFeature(GameVersionFeature v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasGameFeature() => $_has(2);
  @$pb.TagNumber(3)
  void clearGameFeature() => clearField(3);
  @$pb.TagNumber(3)
  GameVersionFeature ensureGameFeature() => $_ensure(2);

  @$pb.TagNumber(4)
  GameVersionFeatureValueIncludedFeatureEnum get includedFeature => $_getN(3);
  @$pb.TagNumber(4)
  set includedFeature(GameVersionFeatureValueIncludedFeatureEnum v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasIncludedFeature() => $_has(3);
  @$pb.TagNumber(4)
  void clearIncludedFeature() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get note => $_getSZ(4);
  @$pb.TagNumber(5)
  set note($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasNote() => $_has(4);
  @$pb.TagNumber(5)
  void clearNote() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get checksum => $_getSZ(5);
  @$pb.TagNumber(6)
  set checksum($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasChecksum() => $_has(5);
  @$pb.TagNumber(6)
  void clearChecksum() => clearField(6);
}

class GameVideoResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameVideoResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<GameVideo>(1, 'gamevideos', $pb.PbFieldType.PM, subBuilder: GameVideo.create)
    ..hasRequiredFields = false
  ;

  GameVideoResult._() : super();
  factory GameVideoResult() => create();
  factory GameVideoResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameVideoResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameVideoResult clone() => GameVideoResult()..mergeFromMessage(this);
  GameVideoResult copyWith(void Function(GameVideoResult) updates) => super.copyWith((message) => updates(message as GameVideoResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameVideoResult create() => GameVideoResult._();
  GameVideoResult createEmptyInstance() => create();
  static $pb.PbList<GameVideoResult> createRepeated() => $pb.PbList<GameVideoResult>();
  @$core.pragma('dart2js:noInline')
  static GameVideoResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameVideoResult>(create);
  static GameVideoResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<GameVideo> get gamevideos => $_getList(0);
}

class GameVideo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GameVideo', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<Game>(2, 'game', subBuilder: Game.create)
    ..aOS(3, 'name')
    ..aOS(4, 'videoId')
    ..aOS(5, 'checksum')
    ..hasRequiredFields = false
  ;

  GameVideo._() : super();
  factory GameVideo() => create();
  factory GameVideo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GameVideo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GameVideo clone() => GameVideo()..mergeFromMessage(this);
  GameVideo copyWith(void Function(GameVideo) updates) => super.copyWith((message) => updates(message as GameVideo));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GameVideo create() => GameVideo._();
  GameVideo createEmptyInstance() => create();
  static $pb.PbList<GameVideo> createRepeated() => $pb.PbList<GameVideo>();
  @$core.pragma('dart2js:noInline')
  static GameVideo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GameVideo>(create);
  static GameVideo _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  Game get game => $_getN(1);
  @$pb.TagNumber(2)
  set game(Game v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasGame() => $_has(1);
  @$pb.TagNumber(2)
  void clearGame() => clearField(2);
  @$pb.TagNumber(2)
  Game ensureGame() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get name => $_getSZ(2);
  @$pb.TagNumber(3)
  set name($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasName() => $_has(2);
  @$pb.TagNumber(3)
  void clearName() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get videoId => $_getSZ(3);
  @$pb.TagNumber(4)
  set videoId($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasVideoId() => $_has(3);
  @$pb.TagNumber(4)
  void clearVideoId() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get checksum => $_getSZ(4);
  @$pb.TagNumber(5)
  set checksum($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasChecksum() => $_has(4);
  @$pb.TagNumber(5)
  void clearChecksum() => clearField(5);
}

class GenreResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GenreResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Genre>(1, 'genres', $pb.PbFieldType.PM, subBuilder: Genre.create)
    ..hasRequiredFields = false
  ;

  GenreResult._() : super();
  factory GenreResult() => create();
  factory GenreResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GenreResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GenreResult clone() => GenreResult()..mergeFromMessage(this);
  GenreResult copyWith(void Function(GenreResult) updates) => super.copyWith((message) => updates(message as GenreResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GenreResult create() => GenreResult._();
  GenreResult createEmptyInstance() => create();
  static $pb.PbList<GenreResult> createRepeated() => $pb.PbList<GenreResult>();
  @$core.pragma('dart2js:noInline')
  static GenreResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GenreResult>(create);
  static GenreResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Genre> get genres => $_getList(0);
}

class Genre extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Genre', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(3, 'name')
    ..aOS(4, 'slug')
    ..aOM<$0.Timestamp>(5, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(6, 'url')
    ..aOS(7, 'checksum')
    ..hasRequiredFields = false
  ;

  Genre._() : super();
  factory Genre() => create();
  factory Genre.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Genre.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Genre clone() => Genre()..mergeFromMessage(this);
  Genre copyWith(void Function(Genre) updates) => super.copyWith((message) => updates(message as Genre));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Genre create() => Genre._();
  Genre createEmptyInstance() => create();
  static $pb.PbList<Genre> createRepeated() => $pb.PbList<Genre>();
  @$core.pragma('dart2js:noInline')
  static Genre getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Genre>(create);
  static Genre _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get name => $_getSZ(2);
  @$pb.TagNumber(3)
  set name($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasName() => $_has(2);
  @$pb.TagNumber(3)
  void clearName() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get slug => $_getSZ(3);
  @$pb.TagNumber(4)
  set slug($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasSlug() => $_has(3);
  @$pb.TagNumber(4)
  void clearSlug() => clearField(4);

  @$pb.TagNumber(5)
  $0.Timestamp get updatedAt => $_getN(4);
  @$pb.TagNumber(5)
  set updatedAt($0.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasUpdatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearUpdatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $0.Timestamp ensureUpdatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get checksum => $_getSZ(6);
  @$pb.TagNumber(7)
  set checksum($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasChecksum() => $_has(6);
  @$pb.TagNumber(7)
  void clearChecksum() => clearField(7);
}

class InvolvedCompanyResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('InvolvedCompanyResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<InvolvedCompany>(1, 'involvedcompanies', $pb.PbFieldType.PM, subBuilder: InvolvedCompany.create)
    ..hasRequiredFields = false
  ;

  InvolvedCompanyResult._() : super();
  factory InvolvedCompanyResult() => create();
  factory InvolvedCompanyResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvolvedCompanyResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  InvolvedCompanyResult clone() => InvolvedCompanyResult()..mergeFromMessage(this);
  InvolvedCompanyResult copyWith(void Function(InvolvedCompanyResult) updates) => super.copyWith((message) => updates(message as InvolvedCompanyResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvolvedCompanyResult create() => InvolvedCompanyResult._();
  InvolvedCompanyResult createEmptyInstance() => create();
  static $pb.PbList<InvolvedCompanyResult> createRepeated() => $pb.PbList<InvolvedCompanyResult>();
  @$core.pragma('dart2js:noInline')
  static InvolvedCompanyResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvolvedCompanyResult>(create);
  static InvolvedCompanyResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<InvolvedCompany> get involvedcompanies => $_getList(0);
}

class InvolvedCompany extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('InvolvedCompany', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<Company>(2, 'company', subBuilder: Company.create)
    ..aOM<$0.Timestamp>(3, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOB(4, 'developer')
    ..aOM<Game>(5, 'game', subBuilder: Game.create)
    ..aOB(6, 'porting')
    ..aOB(7, 'publisher')
    ..aOB(8, 'supporting')
    ..aOM<$0.Timestamp>(9, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(10, 'checksum')
    ..hasRequiredFields = false
  ;

  InvolvedCompany._() : super();
  factory InvolvedCompany() => create();
  factory InvolvedCompany.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvolvedCompany.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  InvolvedCompany clone() => InvolvedCompany()..mergeFromMessage(this);
  InvolvedCompany copyWith(void Function(InvolvedCompany) updates) => super.copyWith((message) => updates(message as InvolvedCompany));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvolvedCompany create() => InvolvedCompany._();
  InvolvedCompany createEmptyInstance() => create();
  static $pb.PbList<InvolvedCompany> createRepeated() => $pb.PbList<InvolvedCompany>();
  @$core.pragma('dart2js:noInline')
  static InvolvedCompany getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvolvedCompany>(create);
  static InvolvedCompany _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  Company get company => $_getN(1);
  @$pb.TagNumber(2)
  set company(Company v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCompany() => $_has(1);
  @$pb.TagNumber(2)
  void clearCompany() => clearField(2);
  @$pb.TagNumber(2)
  Company ensureCompany() => $_ensure(1);

  @$pb.TagNumber(3)
  $0.Timestamp get createdAt => $_getN(2);
  @$pb.TagNumber(3)
  set createdAt($0.Timestamp v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCreatedAt() => $_has(2);
  @$pb.TagNumber(3)
  void clearCreatedAt() => clearField(3);
  @$pb.TagNumber(3)
  $0.Timestamp ensureCreatedAt() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.bool get developer => $_getBF(3);
  @$pb.TagNumber(4)
  set developer($core.bool v) { $_setBool(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasDeveloper() => $_has(3);
  @$pb.TagNumber(4)
  void clearDeveloper() => clearField(4);

  @$pb.TagNumber(5)
  Game get game => $_getN(4);
  @$pb.TagNumber(5)
  set game(Game v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasGame() => $_has(4);
  @$pb.TagNumber(5)
  void clearGame() => clearField(5);
  @$pb.TagNumber(5)
  Game ensureGame() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.bool get porting => $_getBF(5);
  @$pb.TagNumber(6)
  set porting($core.bool v) { $_setBool(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasPorting() => $_has(5);
  @$pb.TagNumber(6)
  void clearPorting() => clearField(6);

  @$pb.TagNumber(7)
  $core.bool get publisher => $_getBF(6);
  @$pb.TagNumber(7)
  set publisher($core.bool v) { $_setBool(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasPublisher() => $_has(6);
  @$pb.TagNumber(7)
  void clearPublisher() => clearField(7);

  @$pb.TagNumber(8)
  $core.bool get supporting => $_getBF(7);
  @$pb.TagNumber(8)
  set supporting($core.bool v) { $_setBool(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasSupporting() => $_has(7);
  @$pb.TagNumber(8)
  void clearSupporting() => clearField(8);

  @$pb.TagNumber(9)
  $0.Timestamp get updatedAt => $_getN(8);
  @$pb.TagNumber(9)
  set updatedAt($0.Timestamp v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasUpdatedAt() => $_has(8);
  @$pb.TagNumber(9)
  void clearUpdatedAt() => clearField(9);
  @$pb.TagNumber(9)
  $0.Timestamp ensureUpdatedAt() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.String get checksum => $_getSZ(9);
  @$pb.TagNumber(10)
  set checksum($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasChecksum() => $_has(9);
  @$pb.TagNumber(10)
  void clearChecksum() => clearField(10);
}

class KeywordResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('KeywordResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Keyword>(1, 'keywords', $pb.PbFieldType.PM, subBuilder: Keyword.create)
    ..hasRequiredFields = false
  ;

  KeywordResult._() : super();
  factory KeywordResult() => create();
  factory KeywordResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory KeywordResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  KeywordResult clone() => KeywordResult()..mergeFromMessage(this);
  KeywordResult copyWith(void Function(KeywordResult) updates) => super.copyWith((message) => updates(message as KeywordResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static KeywordResult create() => KeywordResult._();
  KeywordResult createEmptyInstance() => create();
  static $pb.PbList<KeywordResult> createRepeated() => $pb.PbList<KeywordResult>();
  @$core.pragma('dart2js:noInline')
  static KeywordResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<KeywordResult>(create);
  static KeywordResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Keyword> get keywords => $_getList(0);
}

class Keyword extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Keyword', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(3, 'name')
    ..aOS(4, 'slug')
    ..aOM<$0.Timestamp>(5, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(6, 'url')
    ..aOS(7, 'checksum')
    ..hasRequiredFields = false
  ;

  Keyword._() : super();
  factory Keyword() => create();
  factory Keyword.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Keyword.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Keyword clone() => Keyword()..mergeFromMessage(this);
  Keyword copyWith(void Function(Keyword) updates) => super.copyWith((message) => updates(message as Keyword));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Keyword create() => Keyword._();
  Keyword createEmptyInstance() => create();
  static $pb.PbList<Keyword> createRepeated() => $pb.PbList<Keyword>();
  @$core.pragma('dart2js:noInline')
  static Keyword getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Keyword>(create);
  static Keyword _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get name => $_getSZ(2);
  @$pb.TagNumber(3)
  set name($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasName() => $_has(2);
  @$pb.TagNumber(3)
  void clearName() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get slug => $_getSZ(3);
  @$pb.TagNumber(4)
  set slug($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasSlug() => $_has(3);
  @$pb.TagNumber(4)
  void clearSlug() => clearField(4);

  @$pb.TagNumber(5)
  $0.Timestamp get updatedAt => $_getN(4);
  @$pb.TagNumber(5)
  set updatedAt($0.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasUpdatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearUpdatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $0.Timestamp ensureUpdatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get checksum => $_getSZ(6);
  @$pb.TagNumber(7)
  set checksum($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasChecksum() => $_has(6);
  @$pb.TagNumber(7)
  void clearChecksum() => clearField(7);
}

class ListResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ListResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<List_>(1, 'lists', $pb.PbFieldType.PM, subBuilder: List_.create)
    ..hasRequiredFields = false
  ;

  ListResult._() : super();
  factory ListResult() => create();
  factory ListResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ListResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ListResult clone() => ListResult()..mergeFromMessage(this);
  ListResult copyWith(void Function(ListResult) updates) => super.copyWith((message) => updates(message as ListResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ListResult create() => ListResult._();
  ListResult createEmptyInstance() => create();
  static $pb.PbList<ListResult> createRepeated() => $pb.PbList<ListResult>();
  @$core.pragma('dart2js:noInline')
  static ListResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ListResult>(create);
  static ListResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<List_> get lists => $_getList(0);
}

class List_ extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('List', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(3, 'description')
    ..a<$core.int>(4, 'entriesCount', $pb.PbFieldType.O3)
    ..pc<ListEntry>(5, 'listEntries', $pb.PbFieldType.PM, subBuilder: ListEntry.create)
    ..p<$core.int>(6, 'listTags', $pb.PbFieldType.P3)
    ..pc<Game>(7, 'listedGames', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..aOS(8, 'name')
    ..aOB(9, 'numbering')
    ..aOB(10, 'private')
    ..pc<List_>(11, 'similarLists', $pb.PbFieldType.PM, subBuilder: List_.create)
    ..aOS(12, 'slug')
    ..aOM<$0.Timestamp>(13, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(14, 'url')
    ..aOM<User>(15, 'user', subBuilder: User.create)
    ..aOS(16, 'checksum')
    ..hasRequiredFields = false
  ;

  List_._() : super();
  factory List_() => create();
  factory List_.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory List_.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  List_ clone() => List_()..mergeFromMessage(this);
  List_ copyWith(void Function(List_) updates) => super.copyWith((message) => updates(message as List_));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static List_ create() => List_._();
  List_ createEmptyInstance() => create();
  static $pb.PbList<List_> createRepeated() => $pb.PbList<List_>();
  @$core.pragma('dart2js:noInline')
  static List_ getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<List_>(create);
  static List_ _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get description => $_getSZ(2);
  @$pb.TagNumber(3)
  set description($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasDescription() => $_has(2);
  @$pb.TagNumber(3)
  void clearDescription() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get entriesCount => $_getIZ(3);
  @$pb.TagNumber(4)
  set entriesCount($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasEntriesCount() => $_has(3);
  @$pb.TagNumber(4)
  void clearEntriesCount() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<ListEntry> get listEntries => $_getList(4);

  @$pb.TagNumber(6)
  $core.List<$core.int> get listTags => $_getList(5);

  @$pb.TagNumber(7)
  $core.List<Game> get listedGames => $_getList(6);

  @$pb.TagNumber(8)
  $core.String get name => $_getSZ(7);
  @$pb.TagNumber(8)
  set name($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasName() => $_has(7);
  @$pb.TagNumber(8)
  void clearName() => clearField(8);

  @$pb.TagNumber(9)
  $core.bool get numbering => $_getBF(8);
  @$pb.TagNumber(9)
  set numbering($core.bool v) { $_setBool(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasNumbering() => $_has(8);
  @$pb.TagNumber(9)
  void clearNumbering() => clearField(9);

  @$pb.TagNumber(10)
  $core.bool get private => $_getBF(9);
  @$pb.TagNumber(10)
  set private($core.bool v) { $_setBool(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasPrivate() => $_has(9);
  @$pb.TagNumber(10)
  void clearPrivate() => clearField(10);

  @$pb.TagNumber(11)
  $core.List<List_> get similarLists => $_getList(10);

  @$pb.TagNumber(12)
  $core.String get slug => $_getSZ(11);
  @$pb.TagNumber(12)
  set slug($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasSlug() => $_has(11);
  @$pb.TagNumber(12)
  void clearSlug() => clearField(12);

  @$pb.TagNumber(13)
  $0.Timestamp get updatedAt => $_getN(12);
  @$pb.TagNumber(13)
  set updatedAt($0.Timestamp v) { setField(13, v); }
  @$pb.TagNumber(13)
  $core.bool hasUpdatedAt() => $_has(12);
  @$pb.TagNumber(13)
  void clearUpdatedAt() => clearField(13);
  @$pb.TagNumber(13)
  $0.Timestamp ensureUpdatedAt() => $_ensure(12);

  @$pb.TagNumber(14)
  $core.String get url => $_getSZ(13);
  @$pb.TagNumber(14)
  set url($core.String v) { $_setString(13, v); }
  @$pb.TagNumber(14)
  $core.bool hasUrl() => $_has(13);
  @$pb.TagNumber(14)
  void clearUrl() => clearField(14);

  @$pb.TagNumber(15)
  User get user => $_getN(14);
  @$pb.TagNumber(15)
  set user(User v) { setField(15, v); }
  @$pb.TagNumber(15)
  $core.bool hasUser() => $_has(14);
  @$pb.TagNumber(15)
  void clearUser() => clearField(15);
  @$pb.TagNumber(15)
  User ensureUser() => $_ensure(14);

  @$pb.TagNumber(16)
  $core.String get checksum => $_getSZ(15);
  @$pb.TagNumber(16)
  set checksum($core.String v) { $_setString(15, v); }
  @$pb.TagNumber(16)
  $core.bool hasChecksum() => $_has(15);
  @$pb.TagNumber(16)
  void clearChecksum() => clearField(16);
}

class ListEntryResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ListEntryResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<ListEntry>(1, 'listentries', $pb.PbFieldType.PM, subBuilder: ListEntry.create)
    ..hasRequiredFields = false
  ;

  ListEntryResult._() : super();
  factory ListEntryResult() => create();
  factory ListEntryResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ListEntryResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ListEntryResult clone() => ListEntryResult()..mergeFromMessage(this);
  ListEntryResult copyWith(void Function(ListEntryResult) updates) => super.copyWith((message) => updates(message as ListEntryResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ListEntryResult create() => ListEntryResult._();
  ListEntryResult createEmptyInstance() => create();
  static $pb.PbList<ListEntryResult> createRepeated() => $pb.PbList<ListEntryResult>();
  @$core.pragma('dart2js:noInline')
  static ListEntryResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ListEntryResult>(create);
  static ListEntryResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<ListEntry> get listentries => $_getList(0);
}

class ListEntry extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ListEntry', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOS(2, 'description')
    ..aOM<Game>(3, 'game', subBuilder: Game.create)
    ..aOM<List_>(4, 'list', subBuilder: List_.create)
    ..aOM<Platform>(5, 'platform', subBuilder: Platform.create)
    ..a<$core.int>(6, 'position', $pb.PbFieldType.O3)
    ..aOB(7, 'private')
    ..aOM<User>(8, 'user', subBuilder: User.create)
    ..aOS(9, 'checksum')
    ..hasRequiredFields = false
  ;

  ListEntry._() : super();
  factory ListEntry() => create();
  factory ListEntry.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ListEntry.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ListEntry clone() => ListEntry()..mergeFromMessage(this);
  ListEntry copyWith(void Function(ListEntry) updates) => super.copyWith((message) => updates(message as ListEntry));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ListEntry create() => ListEntry._();
  ListEntry createEmptyInstance() => create();
  static $pb.PbList<ListEntry> createRepeated() => $pb.PbList<ListEntry>();
  @$core.pragma('dart2js:noInline')
  static ListEntry getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ListEntry>(create);
  static ListEntry _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get description => $_getSZ(1);
  @$pb.TagNumber(2)
  set description($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasDescription() => $_has(1);
  @$pb.TagNumber(2)
  void clearDescription() => clearField(2);

  @$pb.TagNumber(3)
  Game get game => $_getN(2);
  @$pb.TagNumber(3)
  set game(Game v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasGame() => $_has(2);
  @$pb.TagNumber(3)
  void clearGame() => clearField(3);
  @$pb.TagNumber(3)
  Game ensureGame() => $_ensure(2);

  @$pb.TagNumber(4)
  List_ get list => $_getN(3);
  @$pb.TagNumber(4)
  set list(List_ v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasList() => $_has(3);
  @$pb.TagNumber(4)
  void clearList() => clearField(4);
  @$pb.TagNumber(4)
  List_ ensureList() => $_ensure(3);

  @$pb.TagNumber(5)
  Platform get platform => $_getN(4);
  @$pb.TagNumber(5)
  set platform(Platform v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasPlatform() => $_has(4);
  @$pb.TagNumber(5)
  void clearPlatform() => clearField(5);
  @$pb.TagNumber(5)
  Platform ensurePlatform() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.int get position => $_getIZ(5);
  @$pb.TagNumber(6)
  set position($core.int v) { $_setSignedInt32(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasPosition() => $_has(5);
  @$pb.TagNumber(6)
  void clearPosition() => clearField(6);

  @$pb.TagNumber(7)
  $core.bool get private => $_getBF(6);
  @$pb.TagNumber(7)
  set private($core.bool v) { $_setBool(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasPrivate() => $_has(6);
  @$pb.TagNumber(7)
  void clearPrivate() => clearField(7);

  @$pb.TagNumber(8)
  User get user => $_getN(7);
  @$pb.TagNumber(8)
  set user(User v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasUser() => $_has(7);
  @$pb.TagNumber(8)
  void clearUser() => clearField(8);
  @$pb.TagNumber(8)
  User ensureUser() => $_ensure(7);

  @$pb.TagNumber(9)
  $core.String get checksum => $_getSZ(8);
  @$pb.TagNumber(9)
  set checksum($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasChecksum() => $_has(8);
  @$pb.TagNumber(9)
  void clearChecksum() => clearField(9);
}

class MultiplayerModeResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('MultiplayerModeResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<MultiplayerMode>(1, 'multiplayermodes', $pb.PbFieldType.PM, subBuilder: MultiplayerMode.create)
    ..hasRequiredFields = false
  ;

  MultiplayerModeResult._() : super();
  factory MultiplayerModeResult() => create();
  factory MultiplayerModeResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MultiplayerModeResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  MultiplayerModeResult clone() => MultiplayerModeResult()..mergeFromMessage(this);
  MultiplayerModeResult copyWith(void Function(MultiplayerModeResult) updates) => super.copyWith((message) => updates(message as MultiplayerModeResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MultiplayerModeResult create() => MultiplayerModeResult._();
  MultiplayerModeResult createEmptyInstance() => create();
  static $pb.PbList<MultiplayerModeResult> createRepeated() => $pb.PbList<MultiplayerModeResult>();
  @$core.pragma('dart2js:noInline')
  static MultiplayerModeResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MultiplayerModeResult>(create);
  static MultiplayerModeResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<MultiplayerMode> get multiplayermodes => $_getList(0);
}

class MultiplayerMode extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('MultiplayerMode', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'campaigncoop')
    ..aOB(3, 'dropin')
    ..aOM<Game>(4, 'game', subBuilder: Game.create)
    ..aOB(5, 'lancoop')
    ..aOB(6, 'offlinecoop')
    ..a<$core.int>(7, 'offlinecoopmax', $pb.PbFieldType.O3)
    ..a<$core.int>(8, 'offlinemax', $pb.PbFieldType.O3)
    ..aOB(9, 'onlinecoop')
    ..a<$core.int>(10, 'onlinecoopmax', $pb.PbFieldType.O3)
    ..a<$core.int>(11, 'onlinemax', $pb.PbFieldType.O3)
    ..aOM<Platform>(12, 'platform', subBuilder: Platform.create)
    ..aOB(13, 'splitscreen')
    ..aOB(14, 'splitscreenonline')
    ..aOS(15, 'checksum')
    ..hasRequiredFields = false
  ;

  MultiplayerMode._() : super();
  factory MultiplayerMode() => create();
  factory MultiplayerMode.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MultiplayerMode.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  MultiplayerMode clone() => MultiplayerMode()..mergeFromMessage(this);
  MultiplayerMode copyWith(void Function(MultiplayerMode) updates) => super.copyWith((message) => updates(message as MultiplayerMode));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MultiplayerMode create() => MultiplayerMode._();
  MultiplayerMode createEmptyInstance() => create();
  static $pb.PbList<MultiplayerMode> createRepeated() => $pb.PbList<MultiplayerMode>();
  @$core.pragma('dart2js:noInline')
  static MultiplayerMode getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MultiplayerMode>(create);
  static MultiplayerMode _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get campaigncoop => $_getBF(1);
  @$pb.TagNumber(2)
  set campaigncoop($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasCampaigncoop() => $_has(1);
  @$pb.TagNumber(2)
  void clearCampaigncoop() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get dropin => $_getBF(2);
  @$pb.TagNumber(3)
  set dropin($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasDropin() => $_has(2);
  @$pb.TagNumber(3)
  void clearDropin() => clearField(3);

  @$pb.TagNumber(4)
  Game get game => $_getN(3);
  @$pb.TagNumber(4)
  set game(Game v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGame() => $_has(3);
  @$pb.TagNumber(4)
  void clearGame() => clearField(4);
  @$pb.TagNumber(4)
  Game ensureGame() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.bool get lancoop => $_getBF(4);
  @$pb.TagNumber(5)
  set lancoop($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasLancoop() => $_has(4);
  @$pb.TagNumber(5)
  void clearLancoop() => clearField(5);

  @$pb.TagNumber(6)
  $core.bool get offlinecoop => $_getBF(5);
  @$pb.TagNumber(6)
  set offlinecoop($core.bool v) { $_setBool(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasOfflinecoop() => $_has(5);
  @$pb.TagNumber(6)
  void clearOfflinecoop() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get offlinecoopmax => $_getIZ(6);
  @$pb.TagNumber(7)
  set offlinecoopmax($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasOfflinecoopmax() => $_has(6);
  @$pb.TagNumber(7)
  void clearOfflinecoopmax() => clearField(7);

  @$pb.TagNumber(8)
  $core.int get offlinemax => $_getIZ(7);
  @$pb.TagNumber(8)
  set offlinemax($core.int v) { $_setSignedInt32(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasOfflinemax() => $_has(7);
  @$pb.TagNumber(8)
  void clearOfflinemax() => clearField(8);

  @$pb.TagNumber(9)
  $core.bool get onlinecoop => $_getBF(8);
  @$pb.TagNumber(9)
  set onlinecoop($core.bool v) { $_setBool(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasOnlinecoop() => $_has(8);
  @$pb.TagNumber(9)
  void clearOnlinecoop() => clearField(9);

  @$pb.TagNumber(10)
  $core.int get onlinecoopmax => $_getIZ(9);
  @$pb.TagNumber(10)
  set onlinecoopmax($core.int v) { $_setSignedInt32(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasOnlinecoopmax() => $_has(9);
  @$pb.TagNumber(10)
  void clearOnlinecoopmax() => clearField(10);

  @$pb.TagNumber(11)
  $core.int get onlinemax => $_getIZ(10);
  @$pb.TagNumber(11)
  set onlinemax($core.int v) { $_setSignedInt32(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasOnlinemax() => $_has(10);
  @$pb.TagNumber(11)
  void clearOnlinemax() => clearField(11);

  @$pb.TagNumber(12)
  Platform get platform => $_getN(11);
  @$pb.TagNumber(12)
  set platform(Platform v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasPlatform() => $_has(11);
  @$pb.TagNumber(12)
  void clearPlatform() => clearField(12);
  @$pb.TagNumber(12)
  Platform ensurePlatform() => $_ensure(11);

  @$pb.TagNumber(13)
  $core.bool get splitscreen => $_getBF(12);
  @$pb.TagNumber(13)
  set splitscreen($core.bool v) { $_setBool(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasSplitscreen() => $_has(12);
  @$pb.TagNumber(13)
  void clearSplitscreen() => clearField(13);

  @$pb.TagNumber(14)
  $core.bool get splitscreenonline => $_getBF(13);
  @$pb.TagNumber(14)
  set splitscreenonline($core.bool v) { $_setBool(13, v); }
  @$pb.TagNumber(14)
  $core.bool hasSplitscreenonline() => $_has(13);
  @$pb.TagNumber(14)
  void clearSplitscreenonline() => clearField(14);

  @$pb.TagNumber(15)
  $core.String get checksum => $_getSZ(14);
  @$pb.TagNumber(15)
  set checksum($core.String v) { $_setString(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasChecksum() => $_has(14);
  @$pb.TagNumber(15)
  void clearChecksum() => clearField(15);
}

class PageResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PageResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Page>(1, 'pages', $pb.PbFieldType.PM, subBuilder: Page.create)
    ..hasRequiredFields = false
  ;

  PageResult._() : super();
  factory PageResult() => create();
  factory PageResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PageResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PageResult clone() => PageResult()..mergeFromMessage(this);
  PageResult copyWith(void Function(PageResult) updates) => super.copyWith((message) => updates(message as PageResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PageResult create() => PageResult._();
  PageResult createEmptyInstance() => create();
  static $pb.PbList<PageResult> createRepeated() => $pb.PbList<PageResult>();
  @$core.pragma('dart2js:noInline')
  static PageResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PageResult>(create);
  static PageResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Page> get pages => $_getList(0);
}

class Page extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Page', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<PageBackground>(2, 'background', subBuilder: PageBackground.create)
    ..aOS(3, 'battlenet')
    ..e<PageCategoryEnum>(4, 'category', $pb.PbFieldType.OE, defaultOrMaker: PageCategoryEnum.PAGE_CATEGORY_NULL, valueOf: PageCategoryEnum.valueOf, enumValues: PageCategoryEnum.values)
    ..e<ColorColorEnum>(5, 'color', $pb.PbFieldType.OE, defaultOrMaker: ColorColorEnum.GREEN, valueOf: ColorColorEnum.valueOf, enumValues: ColorColorEnum.values)
    ..aOM<Company>(6, 'company', subBuilder: Company.create)
    ..a<$core.int>(7, 'country', $pb.PbFieldType.O3)
    ..aOM<$0.Timestamp>(8, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(9, 'description')
    ..aOM<Feed>(10, 'feed', subBuilder: Feed.create)
    ..aOM<Game>(11, 'game', subBuilder: Game.create)
    ..aOS(12, 'name')
    ..aOS(13, 'origin')
    ..a<$core.int>(14, 'pageFollowsCount', $pb.PbFieldType.O3)
    ..aOM<PageLogo>(15, 'pageLogo', subBuilder: PageLogo.create)
    ..aOS(16, 'slug')
    ..e<PageSubCategoryEnum>(17, 'subCategory', $pb.PbFieldType.OE, defaultOrMaker: PageSubCategoryEnum.PAGE_SUB_CATEGORY_NULL, valueOf: PageSubCategoryEnum.valueOf, enumValues: PageSubCategoryEnum.values)
    ..aOM<$0.Timestamp>(18, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(19, 'uplay')
    ..aOS(20, 'url')
    ..aOM<User>(21, 'user', subBuilder: User.create)
    ..pc<PageWebsite>(22, 'websites', $pb.PbFieldType.PM, subBuilder: PageWebsite.create)
    ..aOS(23, 'checksum')
    ..hasRequiredFields = false
  ;

  Page._() : super();
  factory Page() => create();
  factory Page.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Page.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Page clone() => Page()..mergeFromMessage(this);
  Page copyWith(void Function(Page) updates) => super.copyWith((message) => updates(message as Page));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Page create() => Page._();
  Page createEmptyInstance() => create();
  static $pb.PbList<Page> createRepeated() => $pb.PbList<Page>();
  @$core.pragma('dart2js:noInline')
  static Page getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Page>(create);
  static Page _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  PageBackground get background => $_getN(1);
  @$pb.TagNumber(2)
  set background(PageBackground v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasBackground() => $_has(1);
  @$pb.TagNumber(2)
  void clearBackground() => clearField(2);
  @$pb.TagNumber(2)
  PageBackground ensureBackground() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get battlenet => $_getSZ(2);
  @$pb.TagNumber(3)
  set battlenet($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasBattlenet() => $_has(2);
  @$pb.TagNumber(3)
  void clearBattlenet() => clearField(3);

  @$pb.TagNumber(4)
  PageCategoryEnum get category => $_getN(3);
  @$pb.TagNumber(4)
  set category(PageCategoryEnum v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCategory() => $_has(3);
  @$pb.TagNumber(4)
  void clearCategory() => clearField(4);

  @$pb.TagNumber(5)
  ColorColorEnum get color => $_getN(4);
  @$pb.TagNumber(5)
  set color(ColorColorEnum v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasColor() => $_has(4);
  @$pb.TagNumber(5)
  void clearColor() => clearField(5);

  @$pb.TagNumber(6)
  Company get company => $_getN(5);
  @$pb.TagNumber(6)
  set company(Company v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasCompany() => $_has(5);
  @$pb.TagNumber(6)
  void clearCompany() => clearField(6);
  @$pb.TagNumber(6)
  Company ensureCompany() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.int get country => $_getIZ(6);
  @$pb.TagNumber(7)
  set country($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasCountry() => $_has(6);
  @$pb.TagNumber(7)
  void clearCountry() => clearField(7);

  @$pb.TagNumber(8)
  $0.Timestamp get createdAt => $_getN(7);
  @$pb.TagNumber(8)
  set createdAt($0.Timestamp v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasCreatedAt() => $_has(7);
  @$pb.TagNumber(8)
  void clearCreatedAt() => clearField(8);
  @$pb.TagNumber(8)
  $0.Timestamp ensureCreatedAt() => $_ensure(7);

  @$pb.TagNumber(9)
  $core.String get description => $_getSZ(8);
  @$pb.TagNumber(9)
  set description($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasDescription() => $_has(8);
  @$pb.TagNumber(9)
  void clearDescription() => clearField(9);

  @$pb.TagNumber(10)
  Feed get feed => $_getN(9);
  @$pb.TagNumber(10)
  set feed(Feed v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasFeed() => $_has(9);
  @$pb.TagNumber(10)
  void clearFeed() => clearField(10);
  @$pb.TagNumber(10)
  Feed ensureFeed() => $_ensure(9);

  @$pb.TagNumber(11)
  Game get game => $_getN(10);
  @$pb.TagNumber(11)
  set game(Game v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasGame() => $_has(10);
  @$pb.TagNumber(11)
  void clearGame() => clearField(11);
  @$pb.TagNumber(11)
  Game ensureGame() => $_ensure(10);

  @$pb.TagNumber(12)
  $core.String get name => $_getSZ(11);
  @$pb.TagNumber(12)
  set name($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasName() => $_has(11);
  @$pb.TagNumber(12)
  void clearName() => clearField(12);

  @$pb.TagNumber(13)
  $core.String get origin => $_getSZ(12);
  @$pb.TagNumber(13)
  set origin($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasOrigin() => $_has(12);
  @$pb.TagNumber(13)
  void clearOrigin() => clearField(13);

  @$pb.TagNumber(14)
  $core.int get pageFollowsCount => $_getIZ(13);
  @$pb.TagNumber(14)
  set pageFollowsCount($core.int v) { $_setSignedInt32(13, v); }
  @$pb.TagNumber(14)
  $core.bool hasPageFollowsCount() => $_has(13);
  @$pb.TagNumber(14)
  void clearPageFollowsCount() => clearField(14);

  @$pb.TagNumber(15)
  PageLogo get pageLogo => $_getN(14);
  @$pb.TagNumber(15)
  set pageLogo(PageLogo v) { setField(15, v); }
  @$pb.TagNumber(15)
  $core.bool hasPageLogo() => $_has(14);
  @$pb.TagNumber(15)
  void clearPageLogo() => clearField(15);
  @$pb.TagNumber(15)
  PageLogo ensurePageLogo() => $_ensure(14);

  @$pb.TagNumber(16)
  $core.String get slug => $_getSZ(15);
  @$pb.TagNumber(16)
  set slug($core.String v) { $_setString(15, v); }
  @$pb.TagNumber(16)
  $core.bool hasSlug() => $_has(15);
  @$pb.TagNumber(16)
  void clearSlug() => clearField(16);

  @$pb.TagNumber(17)
  PageSubCategoryEnum get subCategory => $_getN(16);
  @$pb.TagNumber(17)
  set subCategory(PageSubCategoryEnum v) { setField(17, v); }
  @$pb.TagNumber(17)
  $core.bool hasSubCategory() => $_has(16);
  @$pb.TagNumber(17)
  void clearSubCategory() => clearField(17);

  @$pb.TagNumber(18)
  $0.Timestamp get updatedAt => $_getN(17);
  @$pb.TagNumber(18)
  set updatedAt($0.Timestamp v) { setField(18, v); }
  @$pb.TagNumber(18)
  $core.bool hasUpdatedAt() => $_has(17);
  @$pb.TagNumber(18)
  void clearUpdatedAt() => clearField(18);
  @$pb.TagNumber(18)
  $0.Timestamp ensureUpdatedAt() => $_ensure(17);

  @$pb.TagNumber(19)
  $core.String get uplay => $_getSZ(18);
  @$pb.TagNumber(19)
  set uplay($core.String v) { $_setString(18, v); }
  @$pb.TagNumber(19)
  $core.bool hasUplay() => $_has(18);
  @$pb.TagNumber(19)
  void clearUplay() => clearField(19);

  @$pb.TagNumber(20)
  $core.String get url => $_getSZ(19);
  @$pb.TagNumber(20)
  set url($core.String v) { $_setString(19, v); }
  @$pb.TagNumber(20)
  $core.bool hasUrl() => $_has(19);
  @$pb.TagNumber(20)
  void clearUrl() => clearField(20);

  @$pb.TagNumber(21)
  User get user => $_getN(20);
  @$pb.TagNumber(21)
  set user(User v) { setField(21, v); }
  @$pb.TagNumber(21)
  $core.bool hasUser() => $_has(20);
  @$pb.TagNumber(21)
  void clearUser() => clearField(21);
  @$pb.TagNumber(21)
  User ensureUser() => $_ensure(20);

  @$pb.TagNumber(22)
  $core.List<PageWebsite> get websites => $_getList(21);

  @$pb.TagNumber(23)
  $core.String get checksum => $_getSZ(22);
  @$pb.TagNumber(23)
  set checksum($core.String v) { $_setString(22, v); }
  @$pb.TagNumber(23)
  $core.bool hasChecksum() => $_has(22);
  @$pb.TagNumber(23)
  void clearChecksum() => clearField(23);
}

class PageBackgroundResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PageBackgroundResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PageBackground>(1, 'pagebackgrounds', $pb.PbFieldType.PM, subBuilder: PageBackground.create)
    ..hasRequiredFields = false
  ;

  PageBackgroundResult._() : super();
  factory PageBackgroundResult() => create();
  factory PageBackgroundResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PageBackgroundResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PageBackgroundResult clone() => PageBackgroundResult()..mergeFromMessage(this);
  PageBackgroundResult copyWith(void Function(PageBackgroundResult) updates) => super.copyWith((message) => updates(message as PageBackgroundResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PageBackgroundResult create() => PageBackgroundResult._();
  PageBackgroundResult createEmptyInstance() => create();
  static $pb.PbList<PageBackgroundResult> createRepeated() => $pb.PbList<PageBackgroundResult>();
  @$core.pragma('dart2js:noInline')
  static PageBackgroundResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PageBackgroundResult>(create);
  static PageBackgroundResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PageBackground> get pagebackgrounds => $_getList(0);
}

class PageBackground extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PageBackground', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..a<$core.int>(4, 'height', $pb.PbFieldType.O3)
    ..aOS(5, 'imageId')
    ..aOS(6, 'url')
    ..a<$core.int>(7, 'width', $pb.PbFieldType.O3)
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  PageBackground._() : super();
  factory PageBackground() => create();
  factory PageBackground.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PageBackground.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PageBackground clone() => PageBackground()..mergeFromMessage(this);
  PageBackground copyWith(void Function(PageBackground) updates) => super.copyWith((message) => updates(message as PageBackground));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PageBackground create() => PageBackground._();
  PageBackground createEmptyInstance() => create();
  static $pb.PbList<PageBackground> createRepeated() => $pb.PbList<PageBackground>();
  @$core.pragma('dart2js:noInline')
  static PageBackground getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PageBackground>(create);
  static PageBackground _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get height => $_getIZ(3);
  @$pb.TagNumber(4)
  set height($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHeight() => $_has(3);
  @$pb.TagNumber(4)
  void clearHeight() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get imageId => $_getSZ(4);
  @$pb.TagNumber(5)
  set imageId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasImageId() => $_has(4);
  @$pb.TagNumber(5)
  void clearImageId() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get width => $_getIZ(6);
  @$pb.TagNumber(7)
  set width($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasWidth() => $_has(6);
  @$pb.TagNumber(7)
  void clearWidth() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class PageLogoResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PageLogoResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PageLogo>(1, 'pagelogos', $pb.PbFieldType.PM, subBuilder: PageLogo.create)
    ..hasRequiredFields = false
  ;

  PageLogoResult._() : super();
  factory PageLogoResult() => create();
  factory PageLogoResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PageLogoResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PageLogoResult clone() => PageLogoResult()..mergeFromMessage(this);
  PageLogoResult copyWith(void Function(PageLogoResult) updates) => super.copyWith((message) => updates(message as PageLogoResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PageLogoResult create() => PageLogoResult._();
  PageLogoResult createEmptyInstance() => create();
  static $pb.PbList<PageLogoResult> createRepeated() => $pb.PbList<PageLogoResult>();
  @$core.pragma('dart2js:noInline')
  static PageLogoResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PageLogoResult>(create);
  static PageLogoResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PageLogo> get pagelogos => $_getList(0);
}

class PageLogo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PageLogo', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..a<$core.int>(4, 'height', $pb.PbFieldType.O3)
    ..aOS(5, 'imageId')
    ..aOS(6, 'url')
    ..a<$core.int>(7, 'width', $pb.PbFieldType.O3)
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  PageLogo._() : super();
  factory PageLogo() => create();
  factory PageLogo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PageLogo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PageLogo clone() => PageLogo()..mergeFromMessage(this);
  PageLogo copyWith(void Function(PageLogo) updates) => super.copyWith((message) => updates(message as PageLogo));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PageLogo create() => PageLogo._();
  PageLogo createEmptyInstance() => create();
  static $pb.PbList<PageLogo> createRepeated() => $pb.PbList<PageLogo>();
  @$core.pragma('dart2js:noInline')
  static PageLogo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PageLogo>(create);
  static PageLogo _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get height => $_getIZ(3);
  @$pb.TagNumber(4)
  set height($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHeight() => $_has(3);
  @$pb.TagNumber(4)
  void clearHeight() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get imageId => $_getSZ(4);
  @$pb.TagNumber(5)
  set imageId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasImageId() => $_has(4);
  @$pb.TagNumber(5)
  void clearImageId() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get width => $_getIZ(6);
  @$pb.TagNumber(7)
  set width($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasWidth() => $_has(6);
  @$pb.TagNumber(7)
  void clearWidth() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class PageWebsiteResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PageWebsiteResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PageWebsite>(1, 'pagewebsites', $pb.PbFieldType.PM, subBuilder: PageWebsite.create)
    ..hasRequiredFields = false
  ;

  PageWebsiteResult._() : super();
  factory PageWebsiteResult() => create();
  factory PageWebsiteResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PageWebsiteResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PageWebsiteResult clone() => PageWebsiteResult()..mergeFromMessage(this);
  PageWebsiteResult copyWith(void Function(PageWebsiteResult) updates) => super.copyWith((message) => updates(message as PageWebsiteResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PageWebsiteResult create() => PageWebsiteResult._();
  PageWebsiteResult createEmptyInstance() => create();
  static $pb.PbList<PageWebsiteResult> createRepeated() => $pb.PbList<PageWebsiteResult>();
  @$core.pragma('dart2js:noInline')
  static PageWebsiteResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PageWebsiteResult>(create);
  static PageWebsiteResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PageWebsite> get pagewebsites => $_getList(0);
}

class PageWebsite extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PageWebsite', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<WebsiteCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: WebsiteCategoryEnum.WEBSITE_CATEGORY_NULL, valueOf: WebsiteCategoryEnum.valueOf, enumValues: WebsiteCategoryEnum.values)
    ..aOB(3, 'trusted')
    ..aOS(4, 'url')
    ..aOS(5, 'checksum')
    ..hasRequiredFields = false
  ;

  PageWebsite._() : super();
  factory PageWebsite() => create();
  factory PageWebsite.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PageWebsite.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PageWebsite clone() => PageWebsite()..mergeFromMessage(this);
  PageWebsite copyWith(void Function(PageWebsite) updates) => super.copyWith((message) => updates(message as PageWebsite));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PageWebsite create() => PageWebsite._();
  PageWebsite createEmptyInstance() => create();
  static $pb.PbList<PageWebsite> createRepeated() => $pb.PbList<PageWebsite>();
  @$core.pragma('dart2js:noInline')
  static PageWebsite getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PageWebsite>(create);
  static PageWebsite _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  WebsiteCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(WebsiteCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get trusted => $_getBF(2);
  @$pb.TagNumber(3)
  set trusted($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasTrusted() => $_has(2);
  @$pb.TagNumber(3)
  void clearTrusted() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get url => $_getSZ(3);
  @$pb.TagNumber(4)
  set url($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasUrl() => $_has(3);
  @$pb.TagNumber(4)
  void clearUrl() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get checksum => $_getSZ(4);
  @$pb.TagNumber(5)
  set checksum($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasChecksum() => $_has(4);
  @$pb.TagNumber(5)
  void clearChecksum() => clearField(5);
}

class PersonResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PersonResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Person>(1, 'people', $pb.PbFieldType.PM, subBuilder: Person.create)
    ..hasRequiredFields = false
  ;

  PersonResult._() : super();
  factory PersonResult() => create();
  factory PersonResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PersonResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PersonResult clone() => PersonResult()..mergeFromMessage(this);
  PersonResult copyWith(void Function(PersonResult) updates) => super.copyWith((message) => updates(message as PersonResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PersonResult create() => PersonResult._();
  PersonResult createEmptyInstance() => create();
  static $pb.PbList<PersonResult> createRepeated() => $pb.PbList<PersonResult>();
  @$core.pragma('dart2js:noInline')
  static PersonResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PersonResult>(create);
  static PersonResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Person> get people => $_getList(0);
}

class Person extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Person', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOS(2, 'bio')
    ..pc<Character>(3, 'characters', $pb.PbFieldType.PM, subBuilder: Character.create)
    ..a<$core.int>(4, 'country', $pb.PbFieldType.O3)
    ..aOM<$0.Timestamp>(5, 'createdAt', subBuilder: $0.Timestamp.create)
    ..pc<Game>(6, 'creditedGames', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..aOS(7, 'description')
    ..aOM<$0.Timestamp>(8, 'dob', subBuilder: $0.Timestamp.create)
    ..e<GenderGenderEnum>(9, 'gender', $pb.PbFieldType.OE, defaultOrMaker: GenderGenderEnum.GENDER_GENDER_NULL, valueOf: GenderGenderEnum.valueOf, enumValues: GenderGenderEnum.values)
    ..a<$core.int>(10, 'lovesCount', $pb.PbFieldType.O3)
    ..aOM<PersonMugShot>(11, 'mugShot', subBuilder: PersonMugShot.create)
    ..aOS(12, 'name')
    ..pPS(13, 'nicknames')
    ..aOM<Person>(14, 'parent', subBuilder: Person.create)
    ..aOS(15, 'slug')
    ..aOM<$0.Timestamp>(16, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(17, 'url')
    ..pc<Game>(18, 'voiceActed', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..pc<PersonWebsite>(19, 'websites', $pb.PbFieldType.PM, subBuilder: PersonWebsite.create)
    ..aOS(20, 'checksum')
    ..hasRequiredFields = false
  ;

  Person._() : super();
  factory Person() => create();
  factory Person.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Person.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Person clone() => Person()..mergeFromMessage(this);
  Person copyWith(void Function(Person) updates) => super.copyWith((message) => updates(message as Person));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Person create() => Person._();
  Person createEmptyInstance() => create();
  static $pb.PbList<Person> createRepeated() => $pb.PbList<Person>();
  @$core.pragma('dart2js:noInline')
  static Person getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Person>(create);
  static Person _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get bio => $_getSZ(1);
  @$pb.TagNumber(2)
  set bio($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBio() => $_has(1);
  @$pb.TagNumber(2)
  void clearBio() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<Character> get characters => $_getList(2);

  @$pb.TagNumber(4)
  $core.int get country => $_getIZ(3);
  @$pb.TagNumber(4)
  set country($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasCountry() => $_has(3);
  @$pb.TagNumber(4)
  void clearCountry() => clearField(4);

  @$pb.TagNumber(5)
  $0.Timestamp get createdAt => $_getN(4);
  @$pb.TagNumber(5)
  set createdAt($0.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasCreatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearCreatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $0.Timestamp ensureCreatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.List<Game> get creditedGames => $_getList(5);

  @$pb.TagNumber(7)
  $core.String get description => $_getSZ(6);
  @$pb.TagNumber(7)
  set description($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasDescription() => $_has(6);
  @$pb.TagNumber(7)
  void clearDescription() => clearField(7);

  @$pb.TagNumber(8)
  $0.Timestamp get dob => $_getN(7);
  @$pb.TagNumber(8)
  set dob($0.Timestamp v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasDob() => $_has(7);
  @$pb.TagNumber(8)
  void clearDob() => clearField(8);
  @$pb.TagNumber(8)
  $0.Timestamp ensureDob() => $_ensure(7);

  @$pb.TagNumber(9)
  GenderGenderEnum get gender => $_getN(8);
  @$pb.TagNumber(9)
  set gender(GenderGenderEnum v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasGender() => $_has(8);
  @$pb.TagNumber(9)
  void clearGender() => clearField(9);

  @$pb.TagNumber(10)
  $core.int get lovesCount => $_getIZ(9);
  @$pb.TagNumber(10)
  set lovesCount($core.int v) { $_setSignedInt32(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasLovesCount() => $_has(9);
  @$pb.TagNumber(10)
  void clearLovesCount() => clearField(10);

  @$pb.TagNumber(11)
  PersonMugShot get mugShot => $_getN(10);
  @$pb.TagNumber(11)
  set mugShot(PersonMugShot v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasMugShot() => $_has(10);
  @$pb.TagNumber(11)
  void clearMugShot() => clearField(11);
  @$pb.TagNumber(11)
  PersonMugShot ensureMugShot() => $_ensure(10);

  @$pb.TagNumber(12)
  $core.String get name => $_getSZ(11);
  @$pb.TagNumber(12)
  set name($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasName() => $_has(11);
  @$pb.TagNumber(12)
  void clearName() => clearField(12);

  @$pb.TagNumber(13)
  $core.List<$core.String> get nicknames => $_getList(12);

  @$pb.TagNumber(14)
  Person get parent => $_getN(13);
  @$pb.TagNumber(14)
  set parent(Person v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasParent() => $_has(13);
  @$pb.TagNumber(14)
  void clearParent() => clearField(14);
  @$pb.TagNumber(14)
  Person ensureParent() => $_ensure(13);

  @$pb.TagNumber(15)
  $core.String get slug => $_getSZ(14);
  @$pb.TagNumber(15)
  set slug($core.String v) { $_setString(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasSlug() => $_has(14);
  @$pb.TagNumber(15)
  void clearSlug() => clearField(15);

  @$pb.TagNumber(16)
  $0.Timestamp get updatedAt => $_getN(15);
  @$pb.TagNumber(16)
  set updatedAt($0.Timestamp v) { setField(16, v); }
  @$pb.TagNumber(16)
  $core.bool hasUpdatedAt() => $_has(15);
  @$pb.TagNumber(16)
  void clearUpdatedAt() => clearField(16);
  @$pb.TagNumber(16)
  $0.Timestamp ensureUpdatedAt() => $_ensure(15);

  @$pb.TagNumber(17)
  $core.String get url => $_getSZ(16);
  @$pb.TagNumber(17)
  set url($core.String v) { $_setString(16, v); }
  @$pb.TagNumber(17)
  $core.bool hasUrl() => $_has(16);
  @$pb.TagNumber(17)
  void clearUrl() => clearField(17);

  @$pb.TagNumber(18)
  $core.List<Game> get voiceActed => $_getList(17);

  @$pb.TagNumber(19)
  $core.List<PersonWebsite> get websites => $_getList(18);

  @$pb.TagNumber(20)
  $core.String get checksum => $_getSZ(19);
  @$pb.TagNumber(20)
  set checksum($core.String v) { $_setString(19, v); }
  @$pb.TagNumber(20)
  $core.bool hasChecksum() => $_has(19);
  @$pb.TagNumber(20)
  void clearChecksum() => clearField(20);
}

class PersonMugShotResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PersonMugShotResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PersonMugShot>(1, 'personmugshots', $pb.PbFieldType.PM, subBuilder: PersonMugShot.create)
    ..hasRequiredFields = false
  ;

  PersonMugShotResult._() : super();
  factory PersonMugShotResult() => create();
  factory PersonMugShotResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PersonMugShotResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PersonMugShotResult clone() => PersonMugShotResult()..mergeFromMessage(this);
  PersonMugShotResult copyWith(void Function(PersonMugShotResult) updates) => super.copyWith((message) => updates(message as PersonMugShotResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PersonMugShotResult create() => PersonMugShotResult._();
  PersonMugShotResult createEmptyInstance() => create();
  static $pb.PbList<PersonMugShotResult> createRepeated() => $pb.PbList<PersonMugShotResult>();
  @$core.pragma('dart2js:noInline')
  static PersonMugShotResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PersonMugShotResult>(create);
  static PersonMugShotResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PersonMugShot> get personmugshots => $_getList(0);
}

class PersonMugShot extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PersonMugShot', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..a<$core.int>(2, 'height', $pb.PbFieldType.O3)
    ..aOS(3, 'imageId')
    ..aOS(4, 'url')
    ..a<$core.int>(5, 'width', $pb.PbFieldType.O3)
    ..aOS(6, 'checksum')
    ..hasRequiredFields = false
  ;

  PersonMugShot._() : super();
  factory PersonMugShot() => create();
  factory PersonMugShot.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PersonMugShot.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PersonMugShot clone() => PersonMugShot()..mergeFromMessage(this);
  PersonMugShot copyWith(void Function(PersonMugShot) updates) => super.copyWith((message) => updates(message as PersonMugShot));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PersonMugShot create() => PersonMugShot._();
  PersonMugShot createEmptyInstance() => create();
  static $pb.PbList<PersonMugShot> createRepeated() => $pb.PbList<PersonMugShot>();
  @$core.pragma('dart2js:noInline')
  static PersonMugShot getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PersonMugShot>(create);
  static PersonMugShot _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get height => $_getIZ(1);
  @$pb.TagNumber(2)
  set height($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasHeight() => $_has(1);
  @$pb.TagNumber(2)
  void clearHeight() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get imageId => $_getSZ(2);
  @$pb.TagNumber(3)
  set imageId($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasImageId() => $_has(2);
  @$pb.TagNumber(3)
  void clearImageId() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get url => $_getSZ(3);
  @$pb.TagNumber(4)
  set url($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasUrl() => $_has(3);
  @$pb.TagNumber(4)
  void clearUrl() => clearField(4);

  @$pb.TagNumber(5)
  $core.int get width => $_getIZ(4);
  @$pb.TagNumber(5)
  set width($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasWidth() => $_has(4);
  @$pb.TagNumber(5)
  void clearWidth() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get checksum => $_getSZ(5);
  @$pb.TagNumber(6)
  set checksum($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasChecksum() => $_has(5);
  @$pb.TagNumber(6)
  void clearChecksum() => clearField(6);
}

class PersonWebsiteResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PersonWebsiteResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PersonWebsite>(1, 'personwebsites', $pb.PbFieldType.PM, subBuilder: PersonWebsite.create)
    ..hasRequiredFields = false
  ;

  PersonWebsiteResult._() : super();
  factory PersonWebsiteResult() => create();
  factory PersonWebsiteResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PersonWebsiteResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PersonWebsiteResult clone() => PersonWebsiteResult()..mergeFromMessage(this);
  PersonWebsiteResult copyWith(void Function(PersonWebsiteResult) updates) => super.copyWith((message) => updates(message as PersonWebsiteResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PersonWebsiteResult create() => PersonWebsiteResult._();
  PersonWebsiteResult createEmptyInstance() => create();
  static $pb.PbList<PersonWebsiteResult> createRepeated() => $pb.PbList<PersonWebsiteResult>();
  @$core.pragma('dart2js:noInline')
  static PersonWebsiteResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PersonWebsiteResult>(create);
  static PersonWebsiteResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PersonWebsite> get personwebsites => $_getList(0);
}

class PersonWebsite extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PersonWebsite', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<WebsiteCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: WebsiteCategoryEnum.WEBSITE_CATEGORY_NULL, valueOf: WebsiteCategoryEnum.valueOf, enumValues: WebsiteCategoryEnum.values)
    ..aOB(3, 'trusted')
    ..aOS(4, 'url')
    ..aOS(5, 'checksum')
    ..hasRequiredFields = false
  ;

  PersonWebsite._() : super();
  factory PersonWebsite() => create();
  factory PersonWebsite.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PersonWebsite.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PersonWebsite clone() => PersonWebsite()..mergeFromMessage(this);
  PersonWebsite copyWith(void Function(PersonWebsite) updates) => super.copyWith((message) => updates(message as PersonWebsite));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PersonWebsite create() => PersonWebsite._();
  PersonWebsite createEmptyInstance() => create();
  static $pb.PbList<PersonWebsite> createRepeated() => $pb.PbList<PersonWebsite>();
  @$core.pragma('dart2js:noInline')
  static PersonWebsite getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PersonWebsite>(create);
  static PersonWebsite _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  WebsiteCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(WebsiteCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get trusted => $_getBF(2);
  @$pb.TagNumber(3)
  set trusted($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasTrusted() => $_has(2);
  @$pb.TagNumber(3)
  void clearTrusted() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get url => $_getSZ(3);
  @$pb.TagNumber(4)
  set url($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasUrl() => $_has(3);
  @$pb.TagNumber(4)
  void clearUrl() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get checksum => $_getSZ(4);
  @$pb.TagNumber(5)
  set checksum($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasChecksum() => $_has(4);
  @$pb.TagNumber(5)
  void clearChecksum() => clearField(5);
}

class PlatformResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Platform>(1, 'platforms', $pb.PbFieldType.PM, subBuilder: Platform.create)
    ..hasRequiredFields = false
  ;

  PlatformResult._() : super();
  factory PlatformResult() => create();
  factory PlatformResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformResult clone() => PlatformResult()..mergeFromMessage(this);
  PlatformResult copyWith(void Function(PlatformResult) updates) => super.copyWith((message) => updates(message as PlatformResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformResult create() => PlatformResult._();
  PlatformResult createEmptyInstance() => create();
  static $pb.PbList<PlatformResult> createRepeated() => $pb.PbList<PlatformResult>();
  @$core.pragma('dart2js:noInline')
  static PlatformResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformResult>(create);
  static PlatformResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Platform> get platforms => $_getList(0);
}

class Platform extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Platform', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOS(2, 'abbreviation')
    ..aOS(3, 'alternativeName')
    ..e<PlatformCategoryEnum>(4, 'category', $pb.PbFieldType.OE, defaultOrMaker: PlatformCategoryEnum.PLATFORM_CATEGORY_NULL, valueOf: PlatformCategoryEnum.valueOf, enumValues: PlatformCategoryEnum.values)
    ..aOM<$0.Timestamp>(5, 'createdAt', subBuilder: $0.Timestamp.create)
    ..a<$core.int>(6, 'generation', $pb.PbFieldType.O3)
    ..aOS(7, 'name')
    ..aOM<PlatformLogo>(8, 'platformLogo', subBuilder: PlatformLogo.create)
    ..aOM<ProductFamily>(9, 'productFamily', subBuilder: ProductFamily.create)
    ..aOS(10, 'slug')
    ..aOS(11, 'summary')
    ..aOM<$0.Timestamp>(12, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(13, 'url')
    ..pc<PlatformVersion>(14, 'versions', $pb.PbFieldType.PM, subBuilder: PlatformVersion.create)
    ..pc<PlatformWebsite>(15, 'websites', $pb.PbFieldType.PM, subBuilder: PlatformWebsite.create)
    ..aOS(16, 'checksum')
    ..hasRequiredFields = false
  ;

  Platform._() : super();
  factory Platform() => create();
  factory Platform.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Platform.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Platform clone() => Platform()..mergeFromMessage(this);
  Platform copyWith(void Function(Platform) updates) => super.copyWith((message) => updates(message as Platform));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Platform create() => Platform._();
  Platform createEmptyInstance() => create();
  static $pb.PbList<Platform> createRepeated() => $pb.PbList<Platform>();
  @$core.pragma('dart2js:noInline')
  static Platform getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Platform>(create);
  static Platform _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get abbreviation => $_getSZ(1);
  @$pb.TagNumber(2)
  set abbreviation($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAbbreviation() => $_has(1);
  @$pb.TagNumber(2)
  void clearAbbreviation() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get alternativeName => $_getSZ(2);
  @$pb.TagNumber(3)
  set alternativeName($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAlternativeName() => $_has(2);
  @$pb.TagNumber(3)
  void clearAlternativeName() => clearField(3);

  @$pb.TagNumber(4)
  PlatformCategoryEnum get category => $_getN(3);
  @$pb.TagNumber(4)
  set category(PlatformCategoryEnum v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCategory() => $_has(3);
  @$pb.TagNumber(4)
  void clearCategory() => clearField(4);

  @$pb.TagNumber(5)
  $0.Timestamp get createdAt => $_getN(4);
  @$pb.TagNumber(5)
  set createdAt($0.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasCreatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearCreatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $0.Timestamp ensureCreatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.int get generation => $_getIZ(5);
  @$pb.TagNumber(6)
  set generation($core.int v) { $_setSignedInt32(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasGeneration() => $_has(5);
  @$pb.TagNumber(6)
  void clearGeneration() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get name => $_getSZ(6);
  @$pb.TagNumber(7)
  set name($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasName() => $_has(6);
  @$pb.TagNumber(7)
  void clearName() => clearField(7);

  @$pb.TagNumber(8)
  PlatformLogo get platformLogo => $_getN(7);
  @$pb.TagNumber(8)
  set platformLogo(PlatformLogo v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasPlatformLogo() => $_has(7);
  @$pb.TagNumber(8)
  void clearPlatformLogo() => clearField(8);
  @$pb.TagNumber(8)
  PlatformLogo ensurePlatformLogo() => $_ensure(7);

  @$pb.TagNumber(9)
  ProductFamily get productFamily => $_getN(8);
  @$pb.TagNumber(9)
  set productFamily(ProductFamily v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasProductFamily() => $_has(8);
  @$pb.TagNumber(9)
  void clearProductFamily() => clearField(9);
  @$pb.TagNumber(9)
  ProductFamily ensureProductFamily() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.String get slug => $_getSZ(9);
  @$pb.TagNumber(10)
  set slug($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasSlug() => $_has(9);
  @$pb.TagNumber(10)
  void clearSlug() => clearField(10);

  @$pb.TagNumber(11)
  $core.String get summary => $_getSZ(10);
  @$pb.TagNumber(11)
  set summary($core.String v) { $_setString(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasSummary() => $_has(10);
  @$pb.TagNumber(11)
  void clearSummary() => clearField(11);

  @$pb.TagNumber(12)
  $0.Timestamp get updatedAt => $_getN(11);
  @$pb.TagNumber(12)
  set updatedAt($0.Timestamp v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasUpdatedAt() => $_has(11);
  @$pb.TagNumber(12)
  void clearUpdatedAt() => clearField(12);
  @$pb.TagNumber(12)
  $0.Timestamp ensureUpdatedAt() => $_ensure(11);

  @$pb.TagNumber(13)
  $core.String get url => $_getSZ(12);
  @$pb.TagNumber(13)
  set url($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasUrl() => $_has(12);
  @$pb.TagNumber(13)
  void clearUrl() => clearField(13);

  @$pb.TagNumber(14)
  $core.List<PlatformVersion> get versions => $_getList(13);

  @$pb.TagNumber(15)
  $core.List<PlatformWebsite> get websites => $_getList(14);

  @$pb.TagNumber(16)
  $core.String get checksum => $_getSZ(15);
  @$pb.TagNumber(16)
  set checksum($core.String v) { $_setString(15, v); }
  @$pb.TagNumber(16)
  $core.bool hasChecksum() => $_has(15);
  @$pb.TagNumber(16)
  void clearChecksum() => clearField(16);
}

class PlatformLogoResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformLogoResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PlatformLogo>(1, 'platformlogos', $pb.PbFieldType.PM, subBuilder: PlatformLogo.create)
    ..hasRequiredFields = false
  ;

  PlatformLogoResult._() : super();
  factory PlatformLogoResult() => create();
  factory PlatformLogoResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformLogoResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformLogoResult clone() => PlatformLogoResult()..mergeFromMessage(this);
  PlatformLogoResult copyWith(void Function(PlatformLogoResult) updates) => super.copyWith((message) => updates(message as PlatformLogoResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformLogoResult create() => PlatformLogoResult._();
  PlatformLogoResult createEmptyInstance() => create();
  static $pb.PbList<PlatformLogoResult> createRepeated() => $pb.PbList<PlatformLogoResult>();
  @$core.pragma('dart2js:noInline')
  static PlatformLogoResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformLogoResult>(create);
  static PlatformLogoResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PlatformLogo> get platformlogos => $_getList(0);
}

class PlatformLogo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformLogo', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..a<$core.int>(4, 'height', $pb.PbFieldType.O3)
    ..aOS(5, 'imageId')
    ..aOS(6, 'url')
    ..a<$core.int>(7, 'width', $pb.PbFieldType.O3)
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  PlatformLogo._() : super();
  factory PlatformLogo() => create();
  factory PlatformLogo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformLogo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformLogo clone() => PlatformLogo()..mergeFromMessage(this);
  PlatformLogo copyWith(void Function(PlatformLogo) updates) => super.copyWith((message) => updates(message as PlatformLogo));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformLogo create() => PlatformLogo._();
  PlatformLogo createEmptyInstance() => create();
  static $pb.PbList<PlatformLogo> createRepeated() => $pb.PbList<PlatformLogo>();
  @$core.pragma('dart2js:noInline')
  static PlatformLogo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformLogo>(create);
  static PlatformLogo _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get height => $_getIZ(3);
  @$pb.TagNumber(4)
  set height($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHeight() => $_has(3);
  @$pb.TagNumber(4)
  void clearHeight() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get imageId => $_getSZ(4);
  @$pb.TagNumber(5)
  set imageId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasImageId() => $_has(4);
  @$pb.TagNumber(5)
  void clearImageId() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get width => $_getIZ(6);
  @$pb.TagNumber(7)
  set width($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasWidth() => $_has(6);
  @$pb.TagNumber(7)
  void clearWidth() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class PlatformVersionResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformVersionResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PlatformVersion>(1, 'platformversions', $pb.PbFieldType.PM, subBuilder: PlatformVersion.create)
    ..hasRequiredFields = false
  ;

  PlatformVersionResult._() : super();
  factory PlatformVersionResult() => create();
  factory PlatformVersionResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformVersionResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformVersionResult clone() => PlatformVersionResult()..mergeFromMessage(this);
  PlatformVersionResult copyWith(void Function(PlatformVersionResult) updates) => super.copyWith((message) => updates(message as PlatformVersionResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformVersionResult create() => PlatformVersionResult._();
  PlatformVersionResult createEmptyInstance() => create();
  static $pb.PbList<PlatformVersionResult> createRepeated() => $pb.PbList<PlatformVersionResult>();
  @$core.pragma('dart2js:noInline')
  static PlatformVersionResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformVersionResult>(create);
  static PlatformVersionResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PlatformVersion> get platformversions => $_getList(0);
}

class PlatformVersion extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformVersion', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..pc<PlatformVersionCompany>(2, 'companies', $pb.PbFieldType.PM, subBuilder: PlatformVersionCompany.create)
    ..aOS(3, 'connectivity')
    ..aOS(4, 'cpu')
    ..aOS(5, 'graphics')
    ..aOM<PlatformVersionCompany>(6, 'mainManufacturer', subBuilder: PlatformVersionCompany.create)
    ..aOS(7, 'media')
    ..aOS(8, 'memory')
    ..aOS(9, 'name')
    ..aOS(10, 'online')
    ..aOS(11, 'os')
    ..aOS(12, 'output')
    ..aOM<PlatformLogo>(13, 'platformLogo', subBuilder: PlatformLogo.create)
    ..pc<PlatformVersionReleaseDate>(14, 'platformVersionReleaseDates', $pb.PbFieldType.PM, subBuilder: PlatformVersionReleaseDate.create)
    ..aOS(15, 'resolutions')
    ..aOS(16, 'slug')
    ..aOS(17, 'sound')
    ..aOS(18, 'storage')
    ..aOS(19, 'summary')
    ..aOS(20, 'url')
    ..aOS(21, 'checksum')
    ..hasRequiredFields = false
  ;

  PlatformVersion._() : super();
  factory PlatformVersion() => create();
  factory PlatformVersion.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformVersion.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformVersion clone() => PlatformVersion()..mergeFromMessage(this);
  PlatformVersion copyWith(void Function(PlatformVersion) updates) => super.copyWith((message) => updates(message as PlatformVersion));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformVersion create() => PlatformVersion._();
  PlatformVersion createEmptyInstance() => create();
  static $pb.PbList<PlatformVersion> createRepeated() => $pb.PbList<PlatformVersion>();
  @$core.pragma('dart2js:noInline')
  static PlatformVersion getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformVersion>(create);
  static PlatformVersion _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<PlatformVersionCompany> get companies => $_getList(1);

  @$pb.TagNumber(3)
  $core.String get connectivity => $_getSZ(2);
  @$pb.TagNumber(3)
  set connectivity($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasConnectivity() => $_has(2);
  @$pb.TagNumber(3)
  void clearConnectivity() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get cpu => $_getSZ(3);
  @$pb.TagNumber(4)
  set cpu($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasCpu() => $_has(3);
  @$pb.TagNumber(4)
  void clearCpu() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get graphics => $_getSZ(4);
  @$pb.TagNumber(5)
  set graphics($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasGraphics() => $_has(4);
  @$pb.TagNumber(5)
  void clearGraphics() => clearField(5);

  @$pb.TagNumber(6)
  PlatformVersionCompany get mainManufacturer => $_getN(5);
  @$pb.TagNumber(6)
  set mainManufacturer(PlatformVersionCompany v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasMainManufacturer() => $_has(5);
  @$pb.TagNumber(6)
  void clearMainManufacturer() => clearField(6);
  @$pb.TagNumber(6)
  PlatformVersionCompany ensureMainManufacturer() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.String get media => $_getSZ(6);
  @$pb.TagNumber(7)
  set media($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasMedia() => $_has(6);
  @$pb.TagNumber(7)
  void clearMedia() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get memory => $_getSZ(7);
  @$pb.TagNumber(8)
  set memory($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasMemory() => $_has(7);
  @$pb.TagNumber(8)
  void clearMemory() => clearField(8);

  @$pb.TagNumber(9)
  $core.String get name => $_getSZ(8);
  @$pb.TagNumber(9)
  set name($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasName() => $_has(8);
  @$pb.TagNumber(9)
  void clearName() => clearField(9);

  @$pb.TagNumber(10)
  $core.String get online => $_getSZ(9);
  @$pb.TagNumber(10)
  set online($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasOnline() => $_has(9);
  @$pb.TagNumber(10)
  void clearOnline() => clearField(10);

  @$pb.TagNumber(11)
  $core.String get os => $_getSZ(10);
  @$pb.TagNumber(11)
  set os($core.String v) { $_setString(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasOs() => $_has(10);
  @$pb.TagNumber(11)
  void clearOs() => clearField(11);

  @$pb.TagNumber(12)
  $core.String get output => $_getSZ(11);
  @$pb.TagNumber(12)
  set output($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasOutput() => $_has(11);
  @$pb.TagNumber(12)
  void clearOutput() => clearField(12);

  @$pb.TagNumber(13)
  PlatformLogo get platformLogo => $_getN(12);
  @$pb.TagNumber(13)
  set platformLogo(PlatformLogo v) { setField(13, v); }
  @$pb.TagNumber(13)
  $core.bool hasPlatformLogo() => $_has(12);
  @$pb.TagNumber(13)
  void clearPlatformLogo() => clearField(13);
  @$pb.TagNumber(13)
  PlatformLogo ensurePlatformLogo() => $_ensure(12);

  @$pb.TagNumber(14)
  $core.List<PlatformVersionReleaseDate> get platformVersionReleaseDates => $_getList(13);

  @$pb.TagNumber(15)
  $core.String get resolutions => $_getSZ(14);
  @$pb.TagNumber(15)
  set resolutions($core.String v) { $_setString(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasResolutions() => $_has(14);
  @$pb.TagNumber(15)
  void clearResolutions() => clearField(15);

  @$pb.TagNumber(16)
  $core.String get slug => $_getSZ(15);
  @$pb.TagNumber(16)
  set slug($core.String v) { $_setString(15, v); }
  @$pb.TagNumber(16)
  $core.bool hasSlug() => $_has(15);
  @$pb.TagNumber(16)
  void clearSlug() => clearField(16);

  @$pb.TagNumber(17)
  $core.String get sound => $_getSZ(16);
  @$pb.TagNumber(17)
  set sound($core.String v) { $_setString(16, v); }
  @$pb.TagNumber(17)
  $core.bool hasSound() => $_has(16);
  @$pb.TagNumber(17)
  void clearSound() => clearField(17);

  @$pb.TagNumber(18)
  $core.String get storage => $_getSZ(17);
  @$pb.TagNumber(18)
  set storage($core.String v) { $_setString(17, v); }
  @$pb.TagNumber(18)
  $core.bool hasStorage() => $_has(17);
  @$pb.TagNumber(18)
  void clearStorage() => clearField(18);

  @$pb.TagNumber(19)
  $core.String get summary => $_getSZ(18);
  @$pb.TagNumber(19)
  set summary($core.String v) { $_setString(18, v); }
  @$pb.TagNumber(19)
  $core.bool hasSummary() => $_has(18);
  @$pb.TagNumber(19)
  void clearSummary() => clearField(19);

  @$pb.TagNumber(20)
  $core.String get url => $_getSZ(19);
  @$pb.TagNumber(20)
  set url($core.String v) { $_setString(19, v); }
  @$pb.TagNumber(20)
  $core.bool hasUrl() => $_has(19);
  @$pb.TagNumber(20)
  void clearUrl() => clearField(20);

  @$pb.TagNumber(21)
  $core.String get checksum => $_getSZ(20);
  @$pb.TagNumber(21)
  set checksum($core.String v) { $_setString(20, v); }
  @$pb.TagNumber(21)
  $core.bool hasChecksum() => $_has(20);
  @$pb.TagNumber(21)
  void clearChecksum() => clearField(21);
}

class PlatformVersionCompanyResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformVersionCompanyResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PlatformVersionCompany>(1, 'platformversioncompanies', $pb.PbFieldType.PM, subBuilder: PlatformVersionCompany.create)
    ..hasRequiredFields = false
  ;

  PlatformVersionCompanyResult._() : super();
  factory PlatformVersionCompanyResult() => create();
  factory PlatformVersionCompanyResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformVersionCompanyResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformVersionCompanyResult clone() => PlatformVersionCompanyResult()..mergeFromMessage(this);
  PlatformVersionCompanyResult copyWith(void Function(PlatformVersionCompanyResult) updates) => super.copyWith((message) => updates(message as PlatformVersionCompanyResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformVersionCompanyResult create() => PlatformVersionCompanyResult._();
  PlatformVersionCompanyResult createEmptyInstance() => create();
  static $pb.PbList<PlatformVersionCompanyResult> createRepeated() => $pb.PbList<PlatformVersionCompanyResult>();
  @$core.pragma('dart2js:noInline')
  static PlatformVersionCompanyResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformVersionCompanyResult>(create);
  static PlatformVersionCompanyResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PlatformVersionCompany> get platformversioncompanies => $_getList(0);
}

class PlatformVersionCompany extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformVersionCompany', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOS(2, 'comment')
    ..aOM<Company>(3, 'company', subBuilder: Company.create)
    ..aOB(4, 'developer')
    ..aOB(5, 'manufacturer')
    ..aOS(6, 'checksum')
    ..hasRequiredFields = false
  ;

  PlatformVersionCompany._() : super();
  factory PlatformVersionCompany() => create();
  factory PlatformVersionCompany.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformVersionCompany.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformVersionCompany clone() => PlatformVersionCompany()..mergeFromMessage(this);
  PlatformVersionCompany copyWith(void Function(PlatformVersionCompany) updates) => super.copyWith((message) => updates(message as PlatformVersionCompany));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformVersionCompany create() => PlatformVersionCompany._();
  PlatformVersionCompany createEmptyInstance() => create();
  static $pb.PbList<PlatformVersionCompany> createRepeated() => $pb.PbList<PlatformVersionCompany>();
  @$core.pragma('dart2js:noInline')
  static PlatformVersionCompany getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformVersionCompany>(create);
  static PlatformVersionCompany _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get comment => $_getSZ(1);
  @$pb.TagNumber(2)
  set comment($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasComment() => $_has(1);
  @$pb.TagNumber(2)
  void clearComment() => clearField(2);

  @$pb.TagNumber(3)
  Company get company => $_getN(2);
  @$pb.TagNumber(3)
  set company(Company v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCompany() => $_has(2);
  @$pb.TagNumber(3)
  void clearCompany() => clearField(3);
  @$pb.TagNumber(3)
  Company ensureCompany() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.bool get developer => $_getBF(3);
  @$pb.TagNumber(4)
  set developer($core.bool v) { $_setBool(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasDeveloper() => $_has(3);
  @$pb.TagNumber(4)
  void clearDeveloper() => clearField(4);

  @$pb.TagNumber(5)
  $core.bool get manufacturer => $_getBF(4);
  @$pb.TagNumber(5)
  set manufacturer($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasManufacturer() => $_has(4);
  @$pb.TagNumber(5)
  void clearManufacturer() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get checksum => $_getSZ(5);
  @$pb.TagNumber(6)
  set checksum($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasChecksum() => $_has(5);
  @$pb.TagNumber(6)
  void clearChecksum() => clearField(6);
}

class PlatformVersionReleaseDateResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformVersionReleaseDateResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PlatformVersionReleaseDate>(1, 'platformversionreleasedates', $pb.PbFieldType.PM, subBuilder: PlatformVersionReleaseDate.create)
    ..hasRequiredFields = false
  ;

  PlatformVersionReleaseDateResult._() : super();
  factory PlatformVersionReleaseDateResult() => create();
  factory PlatformVersionReleaseDateResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformVersionReleaseDateResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformVersionReleaseDateResult clone() => PlatformVersionReleaseDateResult()..mergeFromMessage(this);
  PlatformVersionReleaseDateResult copyWith(void Function(PlatformVersionReleaseDateResult) updates) => super.copyWith((message) => updates(message as PlatformVersionReleaseDateResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformVersionReleaseDateResult create() => PlatformVersionReleaseDateResult._();
  PlatformVersionReleaseDateResult createEmptyInstance() => create();
  static $pb.PbList<PlatformVersionReleaseDateResult> createRepeated() => $pb.PbList<PlatformVersionReleaseDateResult>();
  @$core.pragma('dart2js:noInline')
  static PlatformVersionReleaseDateResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformVersionReleaseDateResult>(create);
  static PlatformVersionReleaseDateResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PlatformVersionReleaseDate> get platformversionreleasedates => $_getList(0);
}

class PlatformVersionReleaseDate extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformVersionReleaseDate', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<DateFormatChangeDateCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: DateFormatChangeDateCategoryEnum.YYYYMMMMDD, valueOf: DateFormatChangeDateCategoryEnum.valueOf, enumValues: DateFormatChangeDateCategoryEnum.values)
    ..aOM<$0.Timestamp>(3, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOM<$0.Timestamp>(4, 'date', subBuilder: $0.Timestamp.create)
    ..aOS(5, 'human')
    ..a<$core.int>(6, 'm', $pb.PbFieldType.O3)
    ..aOM<PlatformVersion>(7, 'platformVersion', subBuilder: PlatformVersion.create)
    ..e<RegionLanguageEnum>(8, 'region', $pb.PbFieldType.OE, defaultOrMaker: RegionLanguageEnum.REGION_LANGUAGE_NULL, valueOf: RegionLanguageEnum.valueOf, enumValues: RegionLanguageEnum.values)
    ..aOM<$0.Timestamp>(9, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..a<$core.int>(10, 'y', $pb.PbFieldType.O3)
    ..aOS(11, 'checksum')
    ..hasRequiredFields = false
  ;

  PlatformVersionReleaseDate._() : super();
  factory PlatformVersionReleaseDate() => create();
  factory PlatformVersionReleaseDate.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformVersionReleaseDate.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformVersionReleaseDate clone() => PlatformVersionReleaseDate()..mergeFromMessage(this);
  PlatformVersionReleaseDate copyWith(void Function(PlatformVersionReleaseDate) updates) => super.copyWith((message) => updates(message as PlatformVersionReleaseDate));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformVersionReleaseDate create() => PlatformVersionReleaseDate._();
  PlatformVersionReleaseDate createEmptyInstance() => create();
  static $pb.PbList<PlatformVersionReleaseDate> createRepeated() => $pb.PbList<PlatformVersionReleaseDate>();
  @$core.pragma('dart2js:noInline')
  static PlatformVersionReleaseDate getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformVersionReleaseDate>(create);
  static PlatformVersionReleaseDate _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  DateFormatChangeDateCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(DateFormatChangeDateCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $0.Timestamp get createdAt => $_getN(2);
  @$pb.TagNumber(3)
  set createdAt($0.Timestamp v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCreatedAt() => $_has(2);
  @$pb.TagNumber(3)
  void clearCreatedAt() => clearField(3);
  @$pb.TagNumber(3)
  $0.Timestamp ensureCreatedAt() => $_ensure(2);

  @$pb.TagNumber(4)
  $0.Timestamp get date => $_getN(3);
  @$pb.TagNumber(4)
  set date($0.Timestamp v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasDate() => $_has(3);
  @$pb.TagNumber(4)
  void clearDate() => clearField(4);
  @$pb.TagNumber(4)
  $0.Timestamp ensureDate() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.String get human => $_getSZ(4);
  @$pb.TagNumber(5)
  set human($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasHuman() => $_has(4);
  @$pb.TagNumber(5)
  void clearHuman() => clearField(5);

  @$pb.TagNumber(6)
  $core.int get m => $_getIZ(5);
  @$pb.TagNumber(6)
  set m($core.int v) { $_setSignedInt32(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasM() => $_has(5);
  @$pb.TagNumber(6)
  void clearM() => clearField(6);

  @$pb.TagNumber(7)
  PlatformVersion get platformVersion => $_getN(6);
  @$pb.TagNumber(7)
  set platformVersion(PlatformVersion v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasPlatformVersion() => $_has(6);
  @$pb.TagNumber(7)
  void clearPlatformVersion() => clearField(7);
  @$pb.TagNumber(7)
  PlatformVersion ensurePlatformVersion() => $_ensure(6);

  @$pb.TagNumber(8)
  RegionLanguageEnum get region => $_getN(7);
  @$pb.TagNumber(8)
  set region(RegionLanguageEnum v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasRegion() => $_has(7);
  @$pb.TagNumber(8)
  void clearRegion() => clearField(8);

  @$pb.TagNumber(9)
  $0.Timestamp get updatedAt => $_getN(8);
  @$pb.TagNumber(9)
  set updatedAt($0.Timestamp v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasUpdatedAt() => $_has(8);
  @$pb.TagNumber(9)
  void clearUpdatedAt() => clearField(9);
  @$pb.TagNumber(9)
  $0.Timestamp ensureUpdatedAt() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.int get y => $_getIZ(9);
  @$pb.TagNumber(10)
  set y($core.int v) { $_setSignedInt32(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasY() => $_has(9);
  @$pb.TagNumber(10)
  void clearY() => clearField(10);

  @$pb.TagNumber(11)
  $core.String get checksum => $_getSZ(10);
  @$pb.TagNumber(11)
  set checksum($core.String v) { $_setString(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasChecksum() => $_has(10);
  @$pb.TagNumber(11)
  void clearChecksum() => clearField(11);
}

class PlatformWebsiteResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformWebsiteResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PlatformWebsite>(1, 'platformwebsites', $pb.PbFieldType.PM, subBuilder: PlatformWebsite.create)
    ..hasRequiredFields = false
  ;

  PlatformWebsiteResult._() : super();
  factory PlatformWebsiteResult() => create();
  factory PlatformWebsiteResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformWebsiteResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformWebsiteResult clone() => PlatformWebsiteResult()..mergeFromMessage(this);
  PlatformWebsiteResult copyWith(void Function(PlatformWebsiteResult) updates) => super.copyWith((message) => updates(message as PlatformWebsiteResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformWebsiteResult create() => PlatformWebsiteResult._();
  PlatformWebsiteResult createEmptyInstance() => create();
  static $pb.PbList<PlatformWebsiteResult> createRepeated() => $pb.PbList<PlatformWebsiteResult>();
  @$core.pragma('dart2js:noInline')
  static PlatformWebsiteResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformWebsiteResult>(create);
  static PlatformWebsiteResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PlatformWebsite> get platformwebsites => $_getList(0);
}

class PlatformWebsite extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlatformWebsite', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<WebsiteCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: WebsiteCategoryEnum.WEBSITE_CATEGORY_NULL, valueOf: WebsiteCategoryEnum.valueOf, enumValues: WebsiteCategoryEnum.values)
    ..aOB(3, 'trusted')
    ..aOS(4, 'url')
    ..aOS(5, 'checksum')
    ..hasRequiredFields = false
  ;

  PlatformWebsite._() : super();
  factory PlatformWebsite() => create();
  factory PlatformWebsite.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlatformWebsite.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlatformWebsite clone() => PlatformWebsite()..mergeFromMessage(this);
  PlatformWebsite copyWith(void Function(PlatformWebsite) updates) => super.copyWith((message) => updates(message as PlatformWebsite));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlatformWebsite create() => PlatformWebsite._();
  PlatformWebsite createEmptyInstance() => create();
  static $pb.PbList<PlatformWebsite> createRepeated() => $pb.PbList<PlatformWebsite>();
  @$core.pragma('dart2js:noInline')
  static PlatformWebsite getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlatformWebsite>(create);
  static PlatformWebsite _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  WebsiteCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(WebsiteCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get trusted => $_getBF(2);
  @$pb.TagNumber(3)
  set trusted($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasTrusted() => $_has(2);
  @$pb.TagNumber(3)
  void clearTrusted() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get url => $_getSZ(3);
  @$pb.TagNumber(4)
  set url($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasUrl() => $_has(3);
  @$pb.TagNumber(4)
  void clearUrl() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get checksum => $_getSZ(4);
  @$pb.TagNumber(5)
  set checksum($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasChecksum() => $_has(4);
  @$pb.TagNumber(5)
  void clearChecksum() => clearField(5);
}

class PlayerPerspectiveResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlayerPerspectiveResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PlayerPerspective>(1, 'playerperspectives', $pb.PbFieldType.PM, subBuilder: PlayerPerspective.create)
    ..hasRequiredFields = false
  ;

  PlayerPerspectiveResult._() : super();
  factory PlayerPerspectiveResult() => create();
  factory PlayerPerspectiveResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlayerPerspectiveResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlayerPerspectiveResult clone() => PlayerPerspectiveResult()..mergeFromMessage(this);
  PlayerPerspectiveResult copyWith(void Function(PlayerPerspectiveResult) updates) => super.copyWith((message) => updates(message as PlayerPerspectiveResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlayerPerspectiveResult create() => PlayerPerspectiveResult._();
  PlayerPerspectiveResult createEmptyInstance() => create();
  static $pb.PbList<PlayerPerspectiveResult> createRepeated() => $pb.PbList<PlayerPerspectiveResult>();
  @$core.pragma('dart2js:noInline')
  static PlayerPerspectiveResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlayerPerspectiveResult>(create);
  static PlayerPerspectiveResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PlayerPerspective> get playerperspectives => $_getList(0);
}

class PlayerPerspective extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PlayerPerspective', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(3, 'name')
    ..aOS(4, 'slug')
    ..aOM<$0.Timestamp>(5, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(6, 'url')
    ..aOS(7, 'checksum')
    ..hasRequiredFields = false
  ;

  PlayerPerspective._() : super();
  factory PlayerPerspective() => create();
  factory PlayerPerspective.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlayerPerspective.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PlayerPerspective clone() => PlayerPerspective()..mergeFromMessage(this);
  PlayerPerspective copyWith(void Function(PlayerPerspective) updates) => super.copyWith((message) => updates(message as PlayerPerspective));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PlayerPerspective create() => PlayerPerspective._();
  PlayerPerspective createEmptyInstance() => create();
  static $pb.PbList<PlayerPerspective> createRepeated() => $pb.PbList<PlayerPerspective>();
  @$core.pragma('dart2js:noInline')
  static PlayerPerspective getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlayerPerspective>(create);
  static PlayerPerspective _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get name => $_getSZ(2);
  @$pb.TagNumber(3)
  set name($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasName() => $_has(2);
  @$pb.TagNumber(3)
  void clearName() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get slug => $_getSZ(3);
  @$pb.TagNumber(4)
  set slug($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasSlug() => $_has(3);
  @$pb.TagNumber(4)
  void clearSlug() => clearField(4);

  @$pb.TagNumber(5)
  $0.Timestamp get updatedAt => $_getN(4);
  @$pb.TagNumber(5)
  set updatedAt($0.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasUpdatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearUpdatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $0.Timestamp ensureUpdatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get checksum => $_getSZ(6);
  @$pb.TagNumber(7)
  set checksum($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasChecksum() => $_has(6);
  @$pb.TagNumber(7)
  void clearChecksum() => clearField(7);
}

class ProductFamilyResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ProductFamilyResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<ProductFamily>(1, 'productfamilies', $pb.PbFieldType.PM, subBuilder: ProductFamily.create)
    ..hasRequiredFields = false
  ;

  ProductFamilyResult._() : super();
  factory ProductFamilyResult() => create();
  factory ProductFamilyResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProductFamilyResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ProductFamilyResult clone() => ProductFamilyResult()..mergeFromMessage(this);
  ProductFamilyResult copyWith(void Function(ProductFamilyResult) updates) => super.copyWith((message) => updates(message as ProductFamilyResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProductFamilyResult create() => ProductFamilyResult._();
  ProductFamilyResult createEmptyInstance() => create();
  static $pb.PbList<ProductFamilyResult> createRepeated() => $pb.PbList<ProductFamilyResult>();
  @$core.pragma('dart2js:noInline')
  static ProductFamilyResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProductFamilyResult>(create);
  static ProductFamilyResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<ProductFamily> get productfamilies => $_getList(0);
}

class ProductFamily extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ProductFamily', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOS(2, 'name')
    ..aOS(3, 'slug')
    ..aOS(4, 'checksum')
    ..hasRequiredFields = false
  ;

  ProductFamily._() : super();
  factory ProductFamily() => create();
  factory ProductFamily.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProductFamily.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ProductFamily clone() => ProductFamily()..mergeFromMessage(this);
  ProductFamily copyWith(void Function(ProductFamily) updates) => super.copyWith((message) => updates(message as ProductFamily));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProductFamily create() => ProductFamily._();
  ProductFamily createEmptyInstance() => create();
  static $pb.PbList<ProductFamily> createRepeated() => $pb.PbList<ProductFamily>();
  @$core.pragma('dart2js:noInline')
  static ProductFamily getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProductFamily>(create);
  static ProductFamily _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get slug => $_getSZ(2);
  @$pb.TagNumber(3)
  set slug($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasSlug() => $_has(2);
  @$pb.TagNumber(3)
  void clearSlug() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get checksum => $_getSZ(3);
  @$pb.TagNumber(4)
  set checksum($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasChecksum() => $_has(3);
  @$pb.TagNumber(4)
  void clearChecksum() => clearField(4);
}

class PulseResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PulseResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Pulse>(1, 'pulses', $pb.PbFieldType.PM, subBuilder: Pulse.create)
    ..hasRequiredFields = false
  ;

  PulseResult._() : super();
  factory PulseResult() => create();
  factory PulseResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PulseResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PulseResult clone() => PulseResult()..mergeFromMessage(this);
  PulseResult copyWith(void Function(PulseResult) updates) => super.copyWith((message) => updates(message as PulseResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PulseResult create() => PulseResult._();
  PulseResult createEmptyInstance() => create();
  static $pb.PbList<PulseResult> createRepeated() => $pb.PbList<PulseResult>();
  @$core.pragma('dart2js:noInline')
  static PulseResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PulseResult>(create);
  static PulseResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Pulse> get pulses => $_getList(0);
}

class Pulse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Pulse', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOS(2, 'author')
    ..a<$core.int>(3, 'category', $pb.PbFieldType.O3)
    ..aOM<$0.Timestamp>(4, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOB(5, 'ignored')
    ..aOS(6, 'image')
    ..aOM<$0.Timestamp>(7, 'publishedAt', subBuilder: $0.Timestamp.create)
    ..aOM<PulseImage>(8, 'pulseImage', subBuilder: PulseImage.create)
    ..aOM<PulseSource>(9, 'pulseSource', subBuilder: PulseSource.create)
    ..aOS(10, 'summary')
    ..p<$core.int>(11, 'tags', $pb.PbFieldType.P3)
    ..aOS(12, 'title')
    ..aOS(13, 'uid')
    ..aOM<$0.Timestamp>(14, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..pPS(15, 'videos')
    ..aOM<PulseUrl>(16, 'website', subBuilder: PulseUrl.create)
    ..aOS(17, 'checksum')
    ..hasRequiredFields = false
  ;

  Pulse._() : super();
  factory Pulse() => create();
  factory Pulse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Pulse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Pulse clone() => Pulse()..mergeFromMessage(this);
  Pulse copyWith(void Function(Pulse) updates) => super.copyWith((message) => updates(message as Pulse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Pulse create() => Pulse._();
  Pulse createEmptyInstance() => create();
  static $pb.PbList<Pulse> createRepeated() => $pb.PbList<Pulse>();
  @$core.pragma('dart2js:noInline')
  static Pulse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Pulse>(create);
  static Pulse _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get author => $_getSZ(1);
  @$pb.TagNumber(2)
  set author($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAuthor() => $_has(1);
  @$pb.TagNumber(2)
  void clearAuthor() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get category => $_getIZ(2);
  @$pb.TagNumber(3)
  set category($core.int v) { $_setSignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasCategory() => $_has(2);
  @$pb.TagNumber(3)
  void clearCategory() => clearField(3);

  @$pb.TagNumber(4)
  $0.Timestamp get createdAt => $_getN(3);
  @$pb.TagNumber(4)
  set createdAt($0.Timestamp v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCreatedAt() => $_has(3);
  @$pb.TagNumber(4)
  void clearCreatedAt() => clearField(4);
  @$pb.TagNumber(4)
  $0.Timestamp ensureCreatedAt() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.bool get ignored => $_getBF(4);
  @$pb.TagNumber(5)
  set ignored($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasIgnored() => $_has(4);
  @$pb.TagNumber(5)
  void clearIgnored() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get image => $_getSZ(5);
  @$pb.TagNumber(6)
  set image($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasImage() => $_has(5);
  @$pb.TagNumber(6)
  void clearImage() => clearField(6);

  @$pb.TagNumber(7)
  $0.Timestamp get publishedAt => $_getN(6);
  @$pb.TagNumber(7)
  set publishedAt($0.Timestamp v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasPublishedAt() => $_has(6);
  @$pb.TagNumber(7)
  void clearPublishedAt() => clearField(7);
  @$pb.TagNumber(7)
  $0.Timestamp ensurePublishedAt() => $_ensure(6);

  @$pb.TagNumber(8)
  PulseImage get pulseImage => $_getN(7);
  @$pb.TagNumber(8)
  set pulseImage(PulseImage v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasPulseImage() => $_has(7);
  @$pb.TagNumber(8)
  void clearPulseImage() => clearField(8);
  @$pb.TagNumber(8)
  PulseImage ensurePulseImage() => $_ensure(7);

  @$pb.TagNumber(9)
  PulseSource get pulseSource => $_getN(8);
  @$pb.TagNumber(9)
  set pulseSource(PulseSource v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasPulseSource() => $_has(8);
  @$pb.TagNumber(9)
  void clearPulseSource() => clearField(9);
  @$pb.TagNumber(9)
  PulseSource ensurePulseSource() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.String get summary => $_getSZ(9);
  @$pb.TagNumber(10)
  set summary($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasSummary() => $_has(9);
  @$pb.TagNumber(10)
  void clearSummary() => clearField(10);

  @$pb.TagNumber(11)
  $core.List<$core.int> get tags => $_getList(10);

  @$pb.TagNumber(12)
  $core.String get title => $_getSZ(11);
  @$pb.TagNumber(12)
  set title($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasTitle() => $_has(11);
  @$pb.TagNumber(12)
  void clearTitle() => clearField(12);

  @$pb.TagNumber(13)
  $core.String get uid => $_getSZ(12);
  @$pb.TagNumber(13)
  set uid($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasUid() => $_has(12);
  @$pb.TagNumber(13)
  void clearUid() => clearField(13);

  @$pb.TagNumber(14)
  $0.Timestamp get updatedAt => $_getN(13);
  @$pb.TagNumber(14)
  set updatedAt($0.Timestamp v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasUpdatedAt() => $_has(13);
  @$pb.TagNumber(14)
  void clearUpdatedAt() => clearField(14);
  @$pb.TagNumber(14)
  $0.Timestamp ensureUpdatedAt() => $_ensure(13);

  @$pb.TagNumber(15)
  $core.List<$core.String> get videos => $_getList(14);

  @$pb.TagNumber(16)
  PulseUrl get website => $_getN(15);
  @$pb.TagNumber(16)
  set website(PulseUrl v) { setField(16, v); }
  @$pb.TagNumber(16)
  $core.bool hasWebsite() => $_has(15);
  @$pb.TagNumber(16)
  void clearWebsite() => clearField(16);
  @$pb.TagNumber(16)
  PulseUrl ensureWebsite() => $_ensure(15);

  @$pb.TagNumber(17)
  $core.String get checksum => $_getSZ(16);
  @$pb.TagNumber(17)
  set checksum($core.String v) { $_setString(16, v); }
  @$pb.TagNumber(17)
  $core.bool hasChecksum() => $_has(16);
  @$pb.TagNumber(17)
  void clearChecksum() => clearField(17);
}

class PulseGroupResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PulseGroupResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PulseGroup>(1, 'pulsegroups', $pb.PbFieldType.PM, subBuilder: PulseGroup.create)
    ..hasRequiredFields = false
  ;

  PulseGroupResult._() : super();
  factory PulseGroupResult() => create();
  factory PulseGroupResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PulseGroupResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PulseGroupResult clone() => PulseGroupResult()..mergeFromMessage(this);
  PulseGroupResult copyWith(void Function(PulseGroupResult) updates) => super.copyWith((message) => updates(message as PulseGroupResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PulseGroupResult create() => PulseGroupResult._();
  PulseGroupResult createEmptyInstance() => create();
  static $pb.PbList<PulseGroupResult> createRepeated() => $pb.PbList<PulseGroupResult>();
  @$core.pragma('dart2js:noInline')
  static PulseGroupResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PulseGroupResult>(create);
  static PulseGroupResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PulseGroup> get pulsegroups => $_getList(0);
}

class PulseGroup extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PulseGroup', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOM<Game>(3, 'game', subBuilder: Game.create)
    ..aOS(4, 'name')
    ..aOM<$0.Timestamp>(5, 'publishedAt', subBuilder: $0.Timestamp.create)
    ..pc<Pulse>(6, 'pulses', $pb.PbFieldType.PM, subBuilder: Pulse.create)
    ..p<$core.int>(7, 'tags', $pb.PbFieldType.P3)
    ..aOM<$0.Timestamp>(8, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(9, 'checksum')
    ..hasRequiredFields = false
  ;

  PulseGroup._() : super();
  factory PulseGroup() => create();
  factory PulseGroup.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PulseGroup.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PulseGroup clone() => PulseGroup()..mergeFromMessage(this);
  PulseGroup copyWith(void Function(PulseGroup) updates) => super.copyWith((message) => updates(message as PulseGroup));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PulseGroup create() => PulseGroup._();
  PulseGroup createEmptyInstance() => create();
  static $pb.PbList<PulseGroup> createRepeated() => $pb.PbList<PulseGroup>();
  @$core.pragma('dart2js:noInline')
  static PulseGroup getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PulseGroup>(create);
  static PulseGroup _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  Game get game => $_getN(2);
  @$pb.TagNumber(3)
  set game(Game v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasGame() => $_has(2);
  @$pb.TagNumber(3)
  void clearGame() => clearField(3);
  @$pb.TagNumber(3)
  Game ensureGame() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.String get name => $_getSZ(3);
  @$pb.TagNumber(4)
  set name($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasName() => $_has(3);
  @$pb.TagNumber(4)
  void clearName() => clearField(4);

  @$pb.TagNumber(5)
  $0.Timestamp get publishedAt => $_getN(4);
  @$pb.TagNumber(5)
  set publishedAt($0.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasPublishedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearPublishedAt() => clearField(5);
  @$pb.TagNumber(5)
  $0.Timestamp ensurePublishedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.List<Pulse> get pulses => $_getList(5);

  @$pb.TagNumber(7)
  $core.List<$core.int> get tags => $_getList(6);

  @$pb.TagNumber(8)
  $0.Timestamp get updatedAt => $_getN(7);
  @$pb.TagNumber(8)
  set updatedAt($0.Timestamp v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasUpdatedAt() => $_has(7);
  @$pb.TagNumber(8)
  void clearUpdatedAt() => clearField(8);
  @$pb.TagNumber(8)
  $0.Timestamp ensureUpdatedAt() => $_ensure(7);

  @$pb.TagNumber(9)
  $core.String get checksum => $_getSZ(8);
  @$pb.TagNumber(9)
  set checksum($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasChecksum() => $_has(8);
  @$pb.TagNumber(9)
  void clearChecksum() => clearField(9);
}

class PulseImageResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PulseImageResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PulseImage>(1, 'pulseimages', $pb.PbFieldType.PM, subBuilder: PulseImage.create)
    ..hasRequiredFields = false
  ;

  PulseImageResult._() : super();
  factory PulseImageResult() => create();
  factory PulseImageResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PulseImageResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PulseImageResult clone() => PulseImageResult()..mergeFromMessage(this);
  PulseImageResult copyWith(void Function(PulseImageResult) updates) => super.copyWith((message) => updates(message as PulseImageResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PulseImageResult create() => PulseImageResult._();
  PulseImageResult createEmptyInstance() => create();
  static $pb.PbList<PulseImageResult> createRepeated() => $pb.PbList<PulseImageResult>();
  @$core.pragma('dart2js:noInline')
  static PulseImageResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PulseImageResult>(create);
  static PulseImageResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PulseImage> get pulseimages => $_getList(0);
}

class PulseImage extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PulseImage', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..a<$core.int>(4, 'height', $pb.PbFieldType.O3)
    ..aOS(5, 'imageId')
    ..aOS(6, 'url')
    ..a<$core.int>(7, 'width', $pb.PbFieldType.O3)
    ..aOS(8, 'checksum')
    ..hasRequiredFields = false
  ;

  PulseImage._() : super();
  factory PulseImage() => create();
  factory PulseImage.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PulseImage.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PulseImage clone() => PulseImage()..mergeFromMessage(this);
  PulseImage copyWith(void Function(PulseImage) updates) => super.copyWith((message) => updates(message as PulseImage));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PulseImage create() => PulseImage._();
  PulseImage createEmptyInstance() => create();
  static $pb.PbList<PulseImage> createRepeated() => $pb.PbList<PulseImage>();
  @$core.pragma('dart2js:noInline')
  static PulseImage getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PulseImage>(create);
  static PulseImage _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get height => $_getIZ(3);
  @$pb.TagNumber(4)
  set height($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHeight() => $_has(3);
  @$pb.TagNumber(4)
  void clearHeight() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get imageId => $_getSZ(4);
  @$pb.TagNumber(5)
  set imageId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasImageId() => $_has(4);
  @$pb.TagNumber(5)
  void clearImageId() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get width => $_getIZ(6);
  @$pb.TagNumber(7)
  set width($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasWidth() => $_has(6);
  @$pb.TagNumber(7)
  void clearWidth() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get checksum => $_getSZ(7);
  @$pb.TagNumber(8)
  set checksum($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasChecksum() => $_has(7);
  @$pb.TagNumber(8)
  void clearChecksum() => clearField(8);
}

class PulseSourceResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PulseSourceResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PulseSource>(1, 'pulsesources', $pb.PbFieldType.PM, subBuilder: PulseSource.create)
    ..hasRequiredFields = false
  ;

  PulseSourceResult._() : super();
  factory PulseSourceResult() => create();
  factory PulseSourceResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PulseSourceResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PulseSourceResult clone() => PulseSourceResult()..mergeFromMessage(this);
  PulseSourceResult copyWith(void Function(PulseSourceResult) updates) => super.copyWith((message) => updates(message as PulseSourceResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PulseSourceResult create() => PulseSourceResult._();
  PulseSourceResult createEmptyInstance() => create();
  static $pb.PbList<PulseSourceResult> createRepeated() => $pb.PbList<PulseSourceResult>();
  @$core.pragma('dart2js:noInline')
  static PulseSourceResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PulseSourceResult>(create);
  static PulseSourceResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PulseSource> get pulsesources => $_getList(0);
}

class PulseSource extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PulseSource', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<Game>(2, 'game', subBuilder: Game.create)
    ..aOS(3, 'name')
    ..aOM<Page>(4, 'page', subBuilder: Page.create)
    ..aOS(5, 'checksum')
    ..hasRequiredFields = false
  ;

  PulseSource._() : super();
  factory PulseSource() => create();
  factory PulseSource.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PulseSource.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PulseSource clone() => PulseSource()..mergeFromMessage(this);
  PulseSource copyWith(void Function(PulseSource) updates) => super.copyWith((message) => updates(message as PulseSource));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PulseSource create() => PulseSource._();
  PulseSource createEmptyInstance() => create();
  static $pb.PbList<PulseSource> createRepeated() => $pb.PbList<PulseSource>();
  @$core.pragma('dart2js:noInline')
  static PulseSource getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PulseSource>(create);
  static PulseSource _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  Game get game => $_getN(1);
  @$pb.TagNumber(2)
  set game(Game v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasGame() => $_has(1);
  @$pb.TagNumber(2)
  void clearGame() => clearField(2);
  @$pb.TagNumber(2)
  Game ensureGame() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get name => $_getSZ(2);
  @$pb.TagNumber(3)
  set name($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasName() => $_has(2);
  @$pb.TagNumber(3)
  void clearName() => clearField(3);

  @$pb.TagNumber(4)
  Page get page => $_getN(3);
  @$pb.TagNumber(4)
  set page(Page v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasPage() => $_has(3);
  @$pb.TagNumber(4)
  void clearPage() => clearField(4);
  @$pb.TagNumber(4)
  Page ensurePage() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.String get checksum => $_getSZ(4);
  @$pb.TagNumber(5)
  set checksum($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasChecksum() => $_has(4);
  @$pb.TagNumber(5)
  void clearChecksum() => clearField(5);
}

class PulseUrlResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PulseUrlResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<PulseUrl>(1, 'pulseurls', $pb.PbFieldType.PM, subBuilder: PulseUrl.create)
    ..hasRequiredFields = false
  ;

  PulseUrlResult._() : super();
  factory PulseUrlResult() => create();
  factory PulseUrlResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PulseUrlResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PulseUrlResult clone() => PulseUrlResult()..mergeFromMessage(this);
  PulseUrlResult copyWith(void Function(PulseUrlResult) updates) => super.copyWith((message) => updates(message as PulseUrlResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PulseUrlResult create() => PulseUrlResult._();
  PulseUrlResult createEmptyInstance() => create();
  static $pb.PbList<PulseUrlResult> createRepeated() => $pb.PbList<PulseUrlResult>();
  @$core.pragma('dart2js:noInline')
  static PulseUrlResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PulseUrlResult>(create);
  static PulseUrlResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<PulseUrl> get pulseurls => $_getList(0);
}

class PulseUrl extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PulseUrl', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'trusted')
    ..aOS(3, 'url')
    ..aOS(4, 'checksum')
    ..hasRequiredFields = false
  ;

  PulseUrl._() : super();
  factory PulseUrl() => create();
  factory PulseUrl.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PulseUrl.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PulseUrl clone() => PulseUrl()..mergeFromMessage(this);
  PulseUrl copyWith(void Function(PulseUrl) updates) => super.copyWith((message) => updates(message as PulseUrl));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PulseUrl create() => PulseUrl._();
  PulseUrl createEmptyInstance() => create();
  static $pb.PbList<PulseUrl> createRepeated() => $pb.PbList<PulseUrl>();
  @$core.pragma('dart2js:noInline')
  static PulseUrl getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PulseUrl>(create);
  static PulseUrl _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get trusted => $_getBF(1);
  @$pb.TagNumber(2)
  set trusted($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasTrusted() => $_has(1);
  @$pb.TagNumber(2)
  void clearTrusted() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get url => $_getSZ(2);
  @$pb.TagNumber(3)
  set url($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasUrl() => $_has(2);
  @$pb.TagNumber(3)
  void clearUrl() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get checksum => $_getSZ(3);
  @$pb.TagNumber(4)
  set checksum($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasChecksum() => $_has(3);
  @$pb.TagNumber(4)
  void clearChecksum() => clearField(4);
}

class RateResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('RateResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Rate>(1, 'rates', $pb.PbFieldType.PM, subBuilder: Rate.create)
    ..hasRequiredFields = false
  ;

  RateResult._() : super();
  factory RateResult() => create();
  factory RateResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory RateResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  RateResult clone() => RateResult()..mergeFromMessage(this);
  RateResult copyWith(void Function(RateResult) updates) => super.copyWith((message) => updates(message as RateResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static RateResult create() => RateResult._();
  RateResult createEmptyInstance() => create();
  static $pb.PbList<RateResult> createRepeated() => $pb.PbList<RateResult>();
  @$core.pragma('dart2js:noInline')
  static RateResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<RateResult>(create);
  static RateResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Rate> get rates => $_getList(0);
}

class Rate extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Rate', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<Game>(2, 'game', subBuilder: Game.create)
    ..aOB(3, 'private')
    ..a<$core.double>(4, 'rating', $pb.PbFieldType.OD)
    ..aOM<User>(5, 'user', subBuilder: User.create)
    ..aOS(6, 'checksum')
    ..hasRequiredFields = false
  ;

  Rate._() : super();
  factory Rate() => create();
  factory Rate.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Rate.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Rate clone() => Rate()..mergeFromMessage(this);
  Rate copyWith(void Function(Rate) updates) => super.copyWith((message) => updates(message as Rate));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Rate create() => Rate._();
  Rate createEmptyInstance() => create();
  static $pb.PbList<Rate> createRepeated() => $pb.PbList<Rate>();
  @$core.pragma('dart2js:noInline')
  static Rate getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Rate>(create);
  static Rate _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  Game get game => $_getN(1);
  @$pb.TagNumber(2)
  set game(Game v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasGame() => $_has(1);
  @$pb.TagNumber(2)
  void clearGame() => clearField(2);
  @$pb.TagNumber(2)
  Game ensureGame() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.bool get private => $_getBF(2);
  @$pb.TagNumber(3)
  set private($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasPrivate() => $_has(2);
  @$pb.TagNumber(3)
  void clearPrivate() => clearField(3);

  @$pb.TagNumber(4)
  $core.double get rating => $_getN(3);
  @$pb.TagNumber(4)
  set rating($core.double v) { $_setDouble(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasRating() => $_has(3);
  @$pb.TagNumber(4)
  void clearRating() => clearField(4);

  @$pb.TagNumber(5)
  User get user => $_getN(4);
  @$pb.TagNumber(5)
  set user(User v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasUser() => $_has(4);
  @$pb.TagNumber(5)
  void clearUser() => clearField(5);
  @$pb.TagNumber(5)
  User ensureUser() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get checksum => $_getSZ(5);
  @$pb.TagNumber(6)
  set checksum($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasChecksum() => $_has(5);
  @$pb.TagNumber(6)
  void clearChecksum() => clearField(6);
}

class ReleaseDateResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ReleaseDateResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<ReleaseDate>(1, 'releasedates', $pb.PbFieldType.PM, subBuilder: ReleaseDate.create)
    ..hasRequiredFields = false
  ;

  ReleaseDateResult._() : super();
  factory ReleaseDateResult() => create();
  factory ReleaseDateResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReleaseDateResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ReleaseDateResult clone() => ReleaseDateResult()..mergeFromMessage(this);
  ReleaseDateResult copyWith(void Function(ReleaseDateResult) updates) => super.copyWith((message) => updates(message as ReleaseDateResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ReleaseDateResult create() => ReleaseDateResult._();
  ReleaseDateResult createEmptyInstance() => create();
  static $pb.PbList<ReleaseDateResult> createRepeated() => $pb.PbList<ReleaseDateResult>();
  @$core.pragma('dart2js:noInline')
  static ReleaseDateResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReleaseDateResult>(create);
  static ReleaseDateResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<ReleaseDate> get releasedates => $_getList(0);
}

class ReleaseDate extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ReleaseDate', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<DateFormatChangeDateCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: DateFormatChangeDateCategoryEnum.YYYYMMMMDD, valueOf: DateFormatChangeDateCategoryEnum.valueOf, enumValues: DateFormatChangeDateCategoryEnum.values)
    ..aOM<$0.Timestamp>(3, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOM<$0.Timestamp>(4, 'date', subBuilder: $0.Timestamp.create)
    ..aOM<Game>(5, 'game', subBuilder: Game.create)
    ..aOS(6, 'human')
    ..a<$core.int>(7, 'm', $pb.PbFieldType.O3)
    ..aOM<Platform>(8, 'platform', subBuilder: Platform.create)
    ..e<RegionLanguageEnum>(9, 'region', $pb.PbFieldType.OE, defaultOrMaker: RegionLanguageEnum.REGION_LANGUAGE_NULL, valueOf: RegionLanguageEnum.valueOf, enumValues: RegionLanguageEnum.values)
    ..aOM<$0.Timestamp>(10, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..a<$core.int>(11, 'y', $pb.PbFieldType.O3)
    ..aOS(12, 'checksum')
    ..hasRequiredFields = false
  ;

  ReleaseDate._() : super();
  factory ReleaseDate() => create();
  factory ReleaseDate.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReleaseDate.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ReleaseDate clone() => ReleaseDate()..mergeFromMessage(this);
  ReleaseDate copyWith(void Function(ReleaseDate) updates) => super.copyWith((message) => updates(message as ReleaseDate));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ReleaseDate create() => ReleaseDate._();
  ReleaseDate createEmptyInstance() => create();
  static $pb.PbList<ReleaseDate> createRepeated() => $pb.PbList<ReleaseDate>();
  @$core.pragma('dart2js:noInline')
  static ReleaseDate getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReleaseDate>(create);
  static ReleaseDate _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  DateFormatChangeDateCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(DateFormatChangeDateCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $0.Timestamp get createdAt => $_getN(2);
  @$pb.TagNumber(3)
  set createdAt($0.Timestamp v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCreatedAt() => $_has(2);
  @$pb.TagNumber(3)
  void clearCreatedAt() => clearField(3);
  @$pb.TagNumber(3)
  $0.Timestamp ensureCreatedAt() => $_ensure(2);

  @$pb.TagNumber(4)
  $0.Timestamp get date => $_getN(3);
  @$pb.TagNumber(4)
  set date($0.Timestamp v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasDate() => $_has(3);
  @$pb.TagNumber(4)
  void clearDate() => clearField(4);
  @$pb.TagNumber(4)
  $0.Timestamp ensureDate() => $_ensure(3);

  @$pb.TagNumber(5)
  Game get game => $_getN(4);
  @$pb.TagNumber(5)
  set game(Game v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasGame() => $_has(4);
  @$pb.TagNumber(5)
  void clearGame() => clearField(5);
  @$pb.TagNumber(5)
  Game ensureGame() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get human => $_getSZ(5);
  @$pb.TagNumber(6)
  set human($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasHuman() => $_has(5);
  @$pb.TagNumber(6)
  void clearHuman() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get m => $_getIZ(6);
  @$pb.TagNumber(7)
  set m($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasM() => $_has(6);
  @$pb.TagNumber(7)
  void clearM() => clearField(7);

  @$pb.TagNumber(8)
  Platform get platform => $_getN(7);
  @$pb.TagNumber(8)
  set platform(Platform v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasPlatform() => $_has(7);
  @$pb.TagNumber(8)
  void clearPlatform() => clearField(8);
  @$pb.TagNumber(8)
  Platform ensurePlatform() => $_ensure(7);

  @$pb.TagNumber(9)
  RegionLanguageEnum get region => $_getN(8);
  @$pb.TagNumber(9)
  set region(RegionLanguageEnum v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasRegion() => $_has(8);
  @$pb.TagNumber(9)
  void clearRegion() => clearField(9);

  @$pb.TagNumber(10)
  $0.Timestamp get updatedAt => $_getN(9);
  @$pb.TagNumber(10)
  set updatedAt($0.Timestamp v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasUpdatedAt() => $_has(9);
  @$pb.TagNumber(10)
  void clearUpdatedAt() => clearField(10);
  @$pb.TagNumber(10)
  $0.Timestamp ensureUpdatedAt() => $_ensure(9);

  @$pb.TagNumber(11)
  $core.int get y => $_getIZ(10);
  @$pb.TagNumber(11)
  set y($core.int v) { $_setSignedInt32(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasY() => $_has(10);
  @$pb.TagNumber(11)
  void clearY() => clearField(11);

  @$pb.TagNumber(12)
  $core.String get checksum => $_getSZ(11);
  @$pb.TagNumber(12)
  set checksum($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasChecksum() => $_has(11);
  @$pb.TagNumber(12)
  void clearChecksum() => clearField(12);
}

class ReviewResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ReviewResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Review>(1, 'reviews', $pb.PbFieldType.PM, subBuilder: Review.create)
    ..hasRequiredFields = false
  ;

  ReviewResult._() : super();
  factory ReviewResult() => create();
  factory ReviewResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReviewResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ReviewResult clone() => ReviewResult()..mergeFromMessage(this);
  ReviewResult copyWith(void Function(ReviewResult) updates) => super.copyWith((message) => updates(message as ReviewResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ReviewResult create() => ReviewResult._();
  ReviewResult createEmptyInstance() => create();
  static $pb.PbList<ReviewResult> createRepeated() => $pb.PbList<ReviewResult>();
  @$core.pragma('dart2js:noInline')
  static ReviewResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReviewResult>(create);
  static ReviewResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Review> get reviews => $_getList(0);
}

class Review extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Review', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<ReviewCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: ReviewCategoryEnum.REVIEW_CATEGORY_NULL, valueOf: ReviewCategoryEnum.valueOf, enumValues: ReviewCategoryEnum.values)
    ..aOS(3, 'conclusion')
    ..aOS(4, 'content')
    ..aOM<$0.Timestamp>(5, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOM<Game>(6, 'game', subBuilder: Game.create)
    ..aOS(7, 'introduction')
    ..a<$core.int>(8, 'likes', $pb.PbFieldType.O3)
    ..aOS(9, 'negativePoints')
    ..aOM<Platform>(10, 'platform', subBuilder: Platform.create)
    ..aOS(11, 'positivePoints')
    ..aOS(12, 'slug')
    ..aOS(13, 'title')
    ..aOM<$0.Timestamp>(14, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(15, 'url')
    ..aOM<User>(16, 'user', subBuilder: User.create)
    ..aOM<Rate>(17, 'userRating', subBuilder: Rate.create)
    ..aOM<ReviewVideo>(18, 'video', subBuilder: ReviewVideo.create)
    ..a<$core.int>(19, 'views', $pb.PbFieldType.O3)
    ..aOS(20, 'checksum')
    ..hasRequiredFields = false
  ;

  Review._() : super();
  factory Review() => create();
  factory Review.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Review.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Review clone() => Review()..mergeFromMessage(this);
  Review copyWith(void Function(Review) updates) => super.copyWith((message) => updates(message as Review));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Review create() => Review._();
  Review createEmptyInstance() => create();
  static $pb.PbList<Review> createRepeated() => $pb.PbList<Review>();
  @$core.pragma('dart2js:noInline')
  static Review getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Review>(create);
  static Review _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  ReviewCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(ReviewCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get conclusion => $_getSZ(2);
  @$pb.TagNumber(3)
  set conclusion($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasConclusion() => $_has(2);
  @$pb.TagNumber(3)
  void clearConclusion() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get content => $_getSZ(3);
  @$pb.TagNumber(4)
  set content($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasContent() => $_has(3);
  @$pb.TagNumber(4)
  void clearContent() => clearField(4);

  @$pb.TagNumber(5)
  $0.Timestamp get createdAt => $_getN(4);
  @$pb.TagNumber(5)
  set createdAt($0.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasCreatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearCreatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $0.Timestamp ensureCreatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  Game get game => $_getN(5);
  @$pb.TagNumber(6)
  set game(Game v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasGame() => $_has(5);
  @$pb.TagNumber(6)
  void clearGame() => clearField(6);
  @$pb.TagNumber(6)
  Game ensureGame() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.String get introduction => $_getSZ(6);
  @$pb.TagNumber(7)
  set introduction($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasIntroduction() => $_has(6);
  @$pb.TagNumber(7)
  void clearIntroduction() => clearField(7);

  @$pb.TagNumber(8)
  $core.int get likes => $_getIZ(7);
  @$pb.TagNumber(8)
  set likes($core.int v) { $_setSignedInt32(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasLikes() => $_has(7);
  @$pb.TagNumber(8)
  void clearLikes() => clearField(8);

  @$pb.TagNumber(9)
  $core.String get negativePoints => $_getSZ(8);
  @$pb.TagNumber(9)
  set negativePoints($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasNegativePoints() => $_has(8);
  @$pb.TagNumber(9)
  void clearNegativePoints() => clearField(9);

  @$pb.TagNumber(10)
  Platform get platform => $_getN(9);
  @$pb.TagNumber(10)
  set platform(Platform v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasPlatform() => $_has(9);
  @$pb.TagNumber(10)
  void clearPlatform() => clearField(10);
  @$pb.TagNumber(10)
  Platform ensurePlatform() => $_ensure(9);

  @$pb.TagNumber(11)
  $core.String get positivePoints => $_getSZ(10);
  @$pb.TagNumber(11)
  set positivePoints($core.String v) { $_setString(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasPositivePoints() => $_has(10);
  @$pb.TagNumber(11)
  void clearPositivePoints() => clearField(11);

  @$pb.TagNumber(12)
  $core.String get slug => $_getSZ(11);
  @$pb.TagNumber(12)
  set slug($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasSlug() => $_has(11);
  @$pb.TagNumber(12)
  void clearSlug() => clearField(12);

  @$pb.TagNumber(13)
  $core.String get title => $_getSZ(12);
  @$pb.TagNumber(13)
  set title($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasTitle() => $_has(12);
  @$pb.TagNumber(13)
  void clearTitle() => clearField(13);

  @$pb.TagNumber(14)
  $0.Timestamp get updatedAt => $_getN(13);
  @$pb.TagNumber(14)
  set updatedAt($0.Timestamp v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasUpdatedAt() => $_has(13);
  @$pb.TagNumber(14)
  void clearUpdatedAt() => clearField(14);
  @$pb.TagNumber(14)
  $0.Timestamp ensureUpdatedAt() => $_ensure(13);

  @$pb.TagNumber(15)
  $core.String get url => $_getSZ(14);
  @$pb.TagNumber(15)
  set url($core.String v) { $_setString(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasUrl() => $_has(14);
  @$pb.TagNumber(15)
  void clearUrl() => clearField(15);

  @$pb.TagNumber(16)
  User get user => $_getN(15);
  @$pb.TagNumber(16)
  set user(User v) { setField(16, v); }
  @$pb.TagNumber(16)
  $core.bool hasUser() => $_has(15);
  @$pb.TagNumber(16)
  void clearUser() => clearField(16);
  @$pb.TagNumber(16)
  User ensureUser() => $_ensure(15);

  @$pb.TagNumber(17)
  Rate get userRating => $_getN(16);
  @$pb.TagNumber(17)
  set userRating(Rate v) { setField(17, v); }
  @$pb.TagNumber(17)
  $core.bool hasUserRating() => $_has(16);
  @$pb.TagNumber(17)
  void clearUserRating() => clearField(17);
  @$pb.TagNumber(17)
  Rate ensureUserRating() => $_ensure(16);

  @$pb.TagNumber(18)
  ReviewVideo get video => $_getN(17);
  @$pb.TagNumber(18)
  set video(ReviewVideo v) { setField(18, v); }
  @$pb.TagNumber(18)
  $core.bool hasVideo() => $_has(17);
  @$pb.TagNumber(18)
  void clearVideo() => clearField(18);
  @$pb.TagNumber(18)
  ReviewVideo ensureVideo() => $_ensure(17);

  @$pb.TagNumber(19)
  $core.int get views => $_getIZ(18);
  @$pb.TagNumber(19)
  set views($core.int v) { $_setSignedInt32(18, v); }
  @$pb.TagNumber(19)
  $core.bool hasViews() => $_has(18);
  @$pb.TagNumber(19)
  void clearViews() => clearField(19);

  @$pb.TagNumber(20)
  $core.String get checksum => $_getSZ(19);
  @$pb.TagNumber(20)
  set checksum($core.String v) { $_setString(19, v); }
  @$pb.TagNumber(20)
  $core.bool hasChecksum() => $_has(19);
  @$pb.TagNumber(20)
  void clearChecksum() => clearField(20);
}

class ReviewVideoResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ReviewVideoResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<ReviewVideo>(1, 'reviewvideos', $pb.PbFieldType.PM, subBuilder: ReviewVideo.create)
    ..hasRequiredFields = false
  ;

  ReviewVideoResult._() : super();
  factory ReviewVideoResult() => create();
  factory ReviewVideoResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReviewVideoResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ReviewVideoResult clone() => ReviewVideoResult()..mergeFromMessage(this);
  ReviewVideoResult copyWith(void Function(ReviewVideoResult) updates) => super.copyWith((message) => updates(message as ReviewVideoResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ReviewVideoResult create() => ReviewVideoResult._();
  ReviewVideoResult createEmptyInstance() => create();
  static $pb.PbList<ReviewVideoResult> createRepeated() => $pb.PbList<ReviewVideoResult>();
  @$core.pragma('dart2js:noInline')
  static ReviewVideoResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReviewVideoResult>(create);
  static ReviewVideoResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<ReviewVideo> get reviewvideos => $_getList(0);
}

class ReviewVideo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ReviewVideo', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'trusted')
    ..aOS(3, 'url')
    ..aOS(4, 'checksum')
    ..hasRequiredFields = false
  ;

  ReviewVideo._() : super();
  factory ReviewVideo() => create();
  factory ReviewVideo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReviewVideo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ReviewVideo clone() => ReviewVideo()..mergeFromMessage(this);
  ReviewVideo copyWith(void Function(ReviewVideo) updates) => super.copyWith((message) => updates(message as ReviewVideo));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ReviewVideo create() => ReviewVideo._();
  ReviewVideo createEmptyInstance() => create();
  static $pb.PbList<ReviewVideo> createRepeated() => $pb.PbList<ReviewVideo>();
  @$core.pragma('dart2js:noInline')
  static ReviewVideo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReviewVideo>(create);
  static ReviewVideo _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get trusted => $_getBF(1);
  @$pb.TagNumber(2)
  set trusted($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasTrusted() => $_has(1);
  @$pb.TagNumber(2)
  void clearTrusted() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get url => $_getSZ(2);
  @$pb.TagNumber(3)
  set url($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasUrl() => $_has(2);
  @$pb.TagNumber(3)
  void clearUrl() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get checksum => $_getSZ(3);
  @$pb.TagNumber(4)
  set checksum($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasChecksum() => $_has(3);
  @$pb.TagNumber(4)
  void clearChecksum() => clearField(4);
}

class ScreenshotResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ScreenshotResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Screenshot>(1, 'screenshots', $pb.PbFieldType.PM, subBuilder: Screenshot.create)
    ..hasRequiredFields = false
  ;

  ScreenshotResult._() : super();
  factory ScreenshotResult() => create();
  factory ScreenshotResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ScreenshotResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ScreenshotResult clone() => ScreenshotResult()..mergeFromMessage(this);
  ScreenshotResult copyWith(void Function(ScreenshotResult) updates) => super.copyWith((message) => updates(message as ScreenshotResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ScreenshotResult create() => ScreenshotResult._();
  ScreenshotResult createEmptyInstance() => create();
  static $pb.PbList<ScreenshotResult> createRepeated() => $pb.PbList<ScreenshotResult>();
  @$core.pragma('dart2js:noInline')
  static ScreenshotResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ScreenshotResult>(create);
  static ScreenshotResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Screenshot> get screenshots => $_getList(0);
}

class Screenshot extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Screenshot', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'alphaChannel')
    ..aOB(3, 'animated')
    ..aOM<Game>(4, 'game', subBuilder: Game.create)
    ..a<$core.int>(5, 'height', $pb.PbFieldType.O3)
    ..aOS(6, 'imageId')
    ..aOS(7, 'url')
    ..a<$core.int>(8, 'width', $pb.PbFieldType.O3)
    ..aOS(9, 'checksum')
    ..hasRequiredFields = false
  ;

  Screenshot._() : super();
  factory Screenshot() => create();
  factory Screenshot.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Screenshot.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Screenshot clone() => Screenshot()..mergeFromMessage(this);
  Screenshot copyWith(void Function(Screenshot) updates) => super.copyWith((message) => updates(message as Screenshot));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Screenshot create() => Screenshot._();
  Screenshot createEmptyInstance() => create();
  static $pb.PbList<Screenshot> createRepeated() => $pb.PbList<Screenshot>();
  @$core.pragma('dart2js:noInline')
  static Screenshot getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Screenshot>(create);
  static Screenshot _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get alphaChannel => $_getBF(1);
  @$pb.TagNumber(2)
  set alphaChannel($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlphaChannel() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlphaChannel() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get animated => $_getBF(2);
  @$pb.TagNumber(3)
  set animated($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAnimated() => $_has(2);
  @$pb.TagNumber(3)
  void clearAnimated() => clearField(3);

  @$pb.TagNumber(4)
  Game get game => $_getN(3);
  @$pb.TagNumber(4)
  set game(Game v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGame() => $_has(3);
  @$pb.TagNumber(4)
  void clearGame() => clearField(4);
  @$pb.TagNumber(4)
  Game ensureGame() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.int get height => $_getIZ(4);
  @$pb.TagNumber(5)
  set height($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasHeight() => $_has(4);
  @$pb.TagNumber(5)
  void clearHeight() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get imageId => $_getSZ(5);
  @$pb.TagNumber(6)
  set imageId($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasImageId() => $_has(5);
  @$pb.TagNumber(6)
  void clearImageId() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get url => $_getSZ(6);
  @$pb.TagNumber(7)
  set url($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasUrl() => $_has(6);
  @$pb.TagNumber(7)
  void clearUrl() => clearField(7);

  @$pb.TagNumber(8)
  $core.int get width => $_getIZ(7);
  @$pb.TagNumber(8)
  set width($core.int v) { $_setSignedInt32(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasWidth() => $_has(7);
  @$pb.TagNumber(8)
  void clearWidth() => clearField(8);

  @$pb.TagNumber(9)
  $core.String get checksum => $_getSZ(8);
  @$pb.TagNumber(9)
  set checksum($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasChecksum() => $_has(8);
  @$pb.TagNumber(9)
  void clearChecksum() => clearField(9);
}

class SearchResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('SearchResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Search>(1, 'searches', $pb.PbFieldType.PM, subBuilder: Search.create)
    ..hasRequiredFields = false
  ;

  SearchResult._() : super();
  factory SearchResult() => create();
  factory SearchResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SearchResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  SearchResult clone() => SearchResult()..mergeFromMessage(this);
  SearchResult copyWith(void Function(SearchResult) updates) => super.copyWith((message) => updates(message as SearchResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SearchResult create() => SearchResult._();
  SearchResult createEmptyInstance() => create();
  static $pb.PbList<SearchResult> createRepeated() => $pb.PbList<SearchResult>();
  @$core.pragma('dart2js:noInline')
  static SearchResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SearchResult>(create);
  static SearchResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Search> get searches => $_getList(0);
}

class Search extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Search', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOS(2, 'alternativeName')
    ..aOM<Character>(3, 'character', subBuilder: Character.create)
    ..aOM<Collection>(4, 'collection', subBuilder: Collection.create)
    ..aOM<Company>(5, 'company', subBuilder: Company.create)
    ..aOS(6, 'description')
    ..aOM<Game>(7, 'game', subBuilder: Game.create)
    ..aOS(8, 'name')
    ..aOM<Person>(9, 'person', subBuilder: Person.create)
    ..aOM<Platform>(10, 'platform', subBuilder: Platform.create)
    ..a<$core.double>(11, 'popularity', $pb.PbFieldType.OD)
    ..aOM<$0.Timestamp>(12, 'publishedAt', subBuilder: $0.Timestamp.create)
    ..aOM<TestDummy>(13, 'testDummy', subBuilder: TestDummy.create)
    ..aOM<Theme>(14, 'theme', subBuilder: Theme.create)
    ..aOS(15, 'checksum')
    ..hasRequiredFields = false
  ;

  Search._() : super();
  factory Search() => create();
  factory Search.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Search.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Search clone() => Search()..mergeFromMessage(this);
  Search copyWith(void Function(Search) updates) => super.copyWith((message) => updates(message as Search));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Search create() => Search._();
  Search createEmptyInstance() => create();
  static $pb.PbList<Search> createRepeated() => $pb.PbList<Search>();
  @$core.pragma('dart2js:noInline')
  static Search getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Search>(create);
  static Search _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get alternativeName => $_getSZ(1);
  @$pb.TagNumber(2)
  set alternativeName($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlternativeName() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlternativeName() => clearField(2);

  @$pb.TagNumber(3)
  Character get character => $_getN(2);
  @$pb.TagNumber(3)
  set character(Character v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCharacter() => $_has(2);
  @$pb.TagNumber(3)
  void clearCharacter() => clearField(3);
  @$pb.TagNumber(3)
  Character ensureCharacter() => $_ensure(2);

  @$pb.TagNumber(4)
  Collection get collection => $_getN(3);
  @$pb.TagNumber(4)
  set collection(Collection v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCollection() => $_has(3);
  @$pb.TagNumber(4)
  void clearCollection() => clearField(4);
  @$pb.TagNumber(4)
  Collection ensureCollection() => $_ensure(3);

  @$pb.TagNumber(5)
  Company get company => $_getN(4);
  @$pb.TagNumber(5)
  set company(Company v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasCompany() => $_has(4);
  @$pb.TagNumber(5)
  void clearCompany() => clearField(5);
  @$pb.TagNumber(5)
  Company ensureCompany() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get description => $_getSZ(5);
  @$pb.TagNumber(6)
  set description($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasDescription() => $_has(5);
  @$pb.TagNumber(6)
  void clearDescription() => clearField(6);

  @$pb.TagNumber(7)
  Game get game => $_getN(6);
  @$pb.TagNumber(7)
  set game(Game v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasGame() => $_has(6);
  @$pb.TagNumber(7)
  void clearGame() => clearField(7);
  @$pb.TagNumber(7)
  Game ensureGame() => $_ensure(6);

  @$pb.TagNumber(8)
  $core.String get name => $_getSZ(7);
  @$pb.TagNumber(8)
  set name($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasName() => $_has(7);
  @$pb.TagNumber(8)
  void clearName() => clearField(8);

  @$pb.TagNumber(9)
  Person get person => $_getN(8);
  @$pb.TagNumber(9)
  set person(Person v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasPerson() => $_has(8);
  @$pb.TagNumber(9)
  void clearPerson() => clearField(9);
  @$pb.TagNumber(9)
  Person ensurePerson() => $_ensure(8);

  @$pb.TagNumber(10)
  Platform get platform => $_getN(9);
  @$pb.TagNumber(10)
  set platform(Platform v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasPlatform() => $_has(9);
  @$pb.TagNumber(10)
  void clearPlatform() => clearField(10);
  @$pb.TagNumber(10)
  Platform ensurePlatform() => $_ensure(9);

  @$pb.TagNumber(11)
  $core.double get popularity => $_getN(10);
  @$pb.TagNumber(11)
  set popularity($core.double v) { $_setDouble(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasPopularity() => $_has(10);
  @$pb.TagNumber(11)
  void clearPopularity() => clearField(11);

  @$pb.TagNumber(12)
  $0.Timestamp get publishedAt => $_getN(11);
  @$pb.TagNumber(12)
  set publishedAt($0.Timestamp v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasPublishedAt() => $_has(11);
  @$pb.TagNumber(12)
  void clearPublishedAt() => clearField(12);
  @$pb.TagNumber(12)
  $0.Timestamp ensurePublishedAt() => $_ensure(11);

  @$pb.TagNumber(13)
  TestDummy get testDummy => $_getN(12);
  @$pb.TagNumber(13)
  set testDummy(TestDummy v) { setField(13, v); }
  @$pb.TagNumber(13)
  $core.bool hasTestDummy() => $_has(12);
  @$pb.TagNumber(13)
  void clearTestDummy() => clearField(13);
  @$pb.TagNumber(13)
  TestDummy ensureTestDummy() => $_ensure(12);

  @$pb.TagNumber(14)
  Theme get theme => $_getN(13);
  @$pb.TagNumber(14)
  set theme(Theme v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasTheme() => $_has(13);
  @$pb.TagNumber(14)
  void clearTheme() => clearField(14);
  @$pb.TagNumber(14)
  Theme ensureTheme() => $_ensure(13);

  @$pb.TagNumber(15)
  $core.String get checksum => $_getSZ(14);
  @$pb.TagNumber(15)
  set checksum($core.String v) { $_setString(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasChecksum() => $_has(14);
  @$pb.TagNumber(15)
  void clearChecksum() => clearField(15);
}

class TestDummyResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('TestDummyResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<TestDummy>(1, 'testdummies', $pb.PbFieldType.PM, subBuilder: TestDummy.create)
    ..hasRequiredFields = false
  ;

  TestDummyResult._() : super();
  factory TestDummyResult() => create();
  factory TestDummyResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TestDummyResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  TestDummyResult clone() => TestDummyResult()..mergeFromMessage(this);
  TestDummyResult copyWith(void Function(TestDummyResult) updates) => super.copyWith((message) => updates(message as TestDummyResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TestDummyResult create() => TestDummyResult._();
  TestDummyResult createEmptyInstance() => create();
  static $pb.PbList<TestDummyResult> createRepeated() => $pb.PbList<TestDummyResult>();
  @$core.pragma('dart2js:noInline')
  static TestDummyResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TestDummyResult>(create);
  static TestDummyResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<TestDummy> get testdummies => $_getList(0);
}

class TestDummy extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('TestDummy', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOB(2, 'boolValue')
    ..aOM<$0.Timestamp>(3, 'createdAt', subBuilder: $0.Timestamp.create)
    ..e<TestDummyEnumTestEnum>(4, 'enumTest', $pb.PbFieldType.OE, defaultOrMaker: TestDummyEnumTestEnum.TESTDUMMY_ENUM_TEST_NULL, valueOf: TestDummyEnumTestEnum.valueOf, enumValues: TestDummyEnumTestEnum.values)
    ..a<$core.double>(5, 'floatValue', $pb.PbFieldType.OD)
    ..aOM<Game>(6, 'game', subBuilder: Game.create)
    ..p<$core.int>(7, 'integerArray', $pb.PbFieldType.P3)
    ..a<$core.int>(8, 'integerValue', $pb.PbFieldType.O3)
    ..aOS(9, 'name')
    ..a<$core.int>(10, 'newIntegerValue', $pb.PbFieldType.O3)
    ..aOB(11, 'private')
    ..aOS(12, 'slug')
    ..pPS(13, 'stringArray')
    ..pc<TestDummy>(14, 'testDummies', $pb.PbFieldType.PM, subBuilder: TestDummy.create)
    ..aOM<TestDummy>(15, 'testDummy', subBuilder: TestDummy.create)
    ..aOM<$0.Timestamp>(16, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(17, 'url')
    ..aOM<User>(18, 'user', subBuilder: User.create)
    ..aOS(19, 'checksum')
    ..hasRequiredFields = false
  ;

  TestDummy._() : super();
  factory TestDummy() => create();
  factory TestDummy.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TestDummy.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  TestDummy clone() => TestDummy()..mergeFromMessage(this);
  TestDummy copyWith(void Function(TestDummy) updates) => super.copyWith((message) => updates(message as TestDummy));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TestDummy create() => TestDummy._();
  TestDummy createEmptyInstance() => create();
  static $pb.PbList<TestDummy> createRepeated() => $pb.PbList<TestDummy>();
  @$core.pragma('dart2js:noInline')
  static TestDummy getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TestDummy>(create);
  static TestDummy _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get boolValue => $_getBF(1);
  @$pb.TagNumber(2)
  set boolValue($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBoolValue() => $_has(1);
  @$pb.TagNumber(2)
  void clearBoolValue() => clearField(2);

  @$pb.TagNumber(3)
  $0.Timestamp get createdAt => $_getN(2);
  @$pb.TagNumber(3)
  set createdAt($0.Timestamp v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCreatedAt() => $_has(2);
  @$pb.TagNumber(3)
  void clearCreatedAt() => clearField(3);
  @$pb.TagNumber(3)
  $0.Timestamp ensureCreatedAt() => $_ensure(2);

  @$pb.TagNumber(4)
  TestDummyEnumTestEnum get enumTest => $_getN(3);
  @$pb.TagNumber(4)
  set enumTest(TestDummyEnumTestEnum v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasEnumTest() => $_has(3);
  @$pb.TagNumber(4)
  void clearEnumTest() => clearField(4);

  @$pb.TagNumber(5)
  $core.double get floatValue => $_getN(4);
  @$pb.TagNumber(5)
  set floatValue($core.double v) { $_setDouble(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasFloatValue() => $_has(4);
  @$pb.TagNumber(5)
  void clearFloatValue() => clearField(5);

  @$pb.TagNumber(6)
  Game get game => $_getN(5);
  @$pb.TagNumber(6)
  set game(Game v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasGame() => $_has(5);
  @$pb.TagNumber(6)
  void clearGame() => clearField(6);
  @$pb.TagNumber(6)
  Game ensureGame() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.List<$core.int> get integerArray => $_getList(6);

  @$pb.TagNumber(8)
  $core.int get integerValue => $_getIZ(7);
  @$pb.TagNumber(8)
  set integerValue($core.int v) { $_setSignedInt32(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasIntegerValue() => $_has(7);
  @$pb.TagNumber(8)
  void clearIntegerValue() => clearField(8);

  @$pb.TagNumber(9)
  $core.String get name => $_getSZ(8);
  @$pb.TagNumber(9)
  set name($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasName() => $_has(8);
  @$pb.TagNumber(9)
  void clearName() => clearField(9);

  @$pb.TagNumber(10)
  $core.int get newIntegerValue => $_getIZ(9);
  @$pb.TagNumber(10)
  set newIntegerValue($core.int v) { $_setSignedInt32(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasNewIntegerValue() => $_has(9);
  @$pb.TagNumber(10)
  void clearNewIntegerValue() => clearField(10);

  @$pb.TagNumber(11)
  $core.bool get private => $_getBF(10);
  @$pb.TagNumber(11)
  set private($core.bool v) { $_setBool(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasPrivate() => $_has(10);
  @$pb.TagNumber(11)
  void clearPrivate() => clearField(11);

  @$pb.TagNumber(12)
  $core.String get slug => $_getSZ(11);
  @$pb.TagNumber(12)
  set slug($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasSlug() => $_has(11);
  @$pb.TagNumber(12)
  void clearSlug() => clearField(12);

  @$pb.TagNumber(13)
  $core.List<$core.String> get stringArray => $_getList(12);

  @$pb.TagNumber(14)
  $core.List<TestDummy> get testDummies => $_getList(13);

  @$pb.TagNumber(15)
  TestDummy get testDummy => $_getN(14);
  @$pb.TagNumber(15)
  set testDummy(TestDummy v) { setField(15, v); }
  @$pb.TagNumber(15)
  $core.bool hasTestDummy() => $_has(14);
  @$pb.TagNumber(15)
  void clearTestDummy() => clearField(15);
  @$pb.TagNumber(15)
  TestDummy ensureTestDummy() => $_ensure(14);

  @$pb.TagNumber(16)
  $0.Timestamp get updatedAt => $_getN(15);
  @$pb.TagNumber(16)
  set updatedAt($0.Timestamp v) { setField(16, v); }
  @$pb.TagNumber(16)
  $core.bool hasUpdatedAt() => $_has(15);
  @$pb.TagNumber(16)
  void clearUpdatedAt() => clearField(16);
  @$pb.TagNumber(16)
  $0.Timestamp ensureUpdatedAt() => $_ensure(15);

  @$pb.TagNumber(17)
  $core.String get url => $_getSZ(16);
  @$pb.TagNumber(17)
  set url($core.String v) { $_setString(16, v); }
  @$pb.TagNumber(17)
  $core.bool hasUrl() => $_has(16);
  @$pb.TagNumber(17)
  void clearUrl() => clearField(17);

  @$pb.TagNumber(18)
  User get user => $_getN(17);
  @$pb.TagNumber(18)
  set user(User v) { setField(18, v); }
  @$pb.TagNumber(18)
  $core.bool hasUser() => $_has(17);
  @$pb.TagNumber(18)
  void clearUser() => clearField(18);
  @$pb.TagNumber(18)
  User ensureUser() => $_ensure(17);

  @$pb.TagNumber(19)
  $core.String get checksum => $_getSZ(18);
  @$pb.TagNumber(19)
  set checksum($core.String v) { $_setString(18, v); }
  @$pb.TagNumber(19)
  $core.bool hasChecksum() => $_has(18);
  @$pb.TagNumber(19)
  void clearChecksum() => clearField(19);
}

class ThemeResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ThemeResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Theme>(1, 'themes', $pb.PbFieldType.PM, subBuilder: Theme.create)
    ..hasRequiredFields = false
  ;

  ThemeResult._() : super();
  factory ThemeResult() => create();
  factory ThemeResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ThemeResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ThemeResult clone() => ThemeResult()..mergeFromMessage(this);
  ThemeResult copyWith(void Function(ThemeResult) updates) => super.copyWith((message) => updates(message as ThemeResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ThemeResult create() => ThemeResult._();
  ThemeResult createEmptyInstance() => create();
  static $pb.PbList<ThemeResult> createRepeated() => $pb.PbList<ThemeResult>();
  @$core.pragma('dart2js:noInline')
  static ThemeResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ThemeResult>(create);
  static ThemeResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Theme> get themes => $_getList(0);
}

class Theme extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Theme', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(3, 'name')
    ..aOS(4, 'slug')
    ..aOM<$0.Timestamp>(5, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(6, 'url')
    ..aOS(7, 'checksum')
    ..hasRequiredFields = false
  ;

  Theme._() : super();
  factory Theme() => create();
  factory Theme.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Theme.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Theme clone() => Theme()..mergeFromMessage(this);
  Theme copyWith(void Function(Theme) updates) => super.copyWith((message) => updates(message as Theme));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Theme create() => Theme._();
  Theme createEmptyInstance() => create();
  static $pb.PbList<Theme> createRepeated() => $pb.PbList<Theme>();
  @$core.pragma('dart2js:noInline')
  static Theme getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Theme>(create);
  static Theme _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get name => $_getSZ(2);
  @$pb.TagNumber(3)
  set name($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasName() => $_has(2);
  @$pb.TagNumber(3)
  void clearName() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get slug => $_getSZ(3);
  @$pb.TagNumber(4)
  set slug($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasSlug() => $_has(3);
  @$pb.TagNumber(4)
  void clearSlug() => clearField(4);

  @$pb.TagNumber(5)
  $0.Timestamp get updatedAt => $_getN(4);
  @$pb.TagNumber(5)
  set updatedAt($0.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasUpdatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearUpdatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $0.Timestamp ensureUpdatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get checksum => $_getSZ(6);
  @$pb.TagNumber(7)
  set checksum($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasChecksum() => $_has(6);
  @$pb.TagNumber(7)
  void clearChecksum() => clearField(7);
}

class TimeToBeatResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('TimeToBeatResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<TimeToBeat>(1, 'timetobeats', $pb.PbFieldType.PM, subBuilder: TimeToBeat.create)
    ..hasRequiredFields = false
  ;

  TimeToBeatResult._() : super();
  factory TimeToBeatResult() => create();
  factory TimeToBeatResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TimeToBeatResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  TimeToBeatResult clone() => TimeToBeatResult()..mergeFromMessage(this);
  TimeToBeatResult copyWith(void Function(TimeToBeatResult) updates) => super.copyWith((message) => updates(message as TimeToBeatResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TimeToBeatResult create() => TimeToBeatResult._();
  TimeToBeatResult createEmptyInstance() => create();
  static $pb.PbList<TimeToBeatResult> createRepeated() => $pb.PbList<TimeToBeatResult>();
  @$core.pragma('dart2js:noInline')
  static TimeToBeatResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TimeToBeatResult>(create);
  static TimeToBeatResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<TimeToBeat> get timetobeats => $_getList(0);
}

class TimeToBeat extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('TimeToBeat', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..a<$core.int>(2, 'completely', $pb.PbFieldType.O3)
    ..aOM<Game>(3, 'game', subBuilder: Game.create)
    ..a<$core.int>(4, 'hastly', $pb.PbFieldType.O3)
    ..a<$core.int>(5, 'normally', $pb.PbFieldType.O3)
    ..aOS(6, 'checksum')
    ..hasRequiredFields = false
  ;

  TimeToBeat._() : super();
  factory TimeToBeat() => create();
  factory TimeToBeat.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TimeToBeat.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  TimeToBeat clone() => TimeToBeat()..mergeFromMessage(this);
  TimeToBeat copyWith(void Function(TimeToBeat) updates) => super.copyWith((message) => updates(message as TimeToBeat));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TimeToBeat create() => TimeToBeat._();
  TimeToBeat createEmptyInstance() => create();
  static $pb.PbList<TimeToBeat> createRepeated() => $pb.PbList<TimeToBeat>();
  @$core.pragma('dart2js:noInline')
  static TimeToBeat getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TimeToBeat>(create);
  static TimeToBeat _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get completely => $_getIZ(1);
  @$pb.TagNumber(2)
  set completely($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasCompletely() => $_has(1);
  @$pb.TagNumber(2)
  void clearCompletely() => clearField(2);

  @$pb.TagNumber(3)
  Game get game => $_getN(2);
  @$pb.TagNumber(3)
  set game(Game v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasGame() => $_has(2);
  @$pb.TagNumber(3)
  void clearGame() => clearField(3);
  @$pb.TagNumber(3)
  Game ensureGame() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.int get hastly => $_getIZ(3);
  @$pb.TagNumber(4)
  set hastly($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHastly() => $_has(3);
  @$pb.TagNumber(4)
  void clearHastly() => clearField(4);

  @$pb.TagNumber(5)
  $core.int get normally => $_getIZ(4);
  @$pb.TagNumber(5)
  set normally($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasNormally() => $_has(4);
  @$pb.TagNumber(5)
  void clearNormally() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get checksum => $_getSZ(5);
  @$pb.TagNumber(6)
  set checksum($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasChecksum() => $_has(5);
  @$pb.TagNumber(6)
  void clearChecksum() => clearField(6);
}

class TitleResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('TitleResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Title>(1, 'titles', $pb.PbFieldType.PM, subBuilder: Title.create)
    ..hasRequiredFields = false
  ;

  TitleResult._() : super();
  factory TitleResult() => create();
  factory TitleResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TitleResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  TitleResult clone() => TitleResult()..mergeFromMessage(this);
  TitleResult copyWith(void Function(TitleResult) updates) => super.copyWith((message) => updates(message as TitleResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TitleResult create() => TitleResult._();
  TitleResult createEmptyInstance() => create();
  static $pb.PbList<TitleResult> createRepeated() => $pb.PbList<TitleResult>();
  @$core.pragma('dart2js:noInline')
  static TitleResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TitleResult>(create);
  static TitleResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Title> get titles => $_getList(0);
}

class Title extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Title', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Timestamp>(2, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(3, 'description')
    ..pc<Game>(4, 'games', $pb.PbFieldType.PM, subBuilder: Game.create)
    ..aOS(5, 'name')
    ..aOS(6, 'slug')
    ..aOM<$0.Timestamp>(7, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(8, 'url')
    ..aOS(9, 'checksum')
    ..hasRequiredFields = false
  ;

  Title._() : super();
  factory Title() => create();
  factory Title.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Title.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Title clone() => Title()..mergeFromMessage(this);
  Title copyWith(void Function(Title) updates) => super.copyWith((message) => updates(message as Title));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Title create() => Title._();
  Title createEmptyInstance() => create();
  static $pb.PbList<Title> createRepeated() => $pb.PbList<Title>();
  @$core.pragma('dart2js:noInline')
  static Title getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Title>(create);
  static Title _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Timestamp get createdAt => $_getN(1);
  @$pb.TagNumber(2)
  set createdAt($0.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCreatedAt() => $_has(1);
  @$pb.TagNumber(2)
  void clearCreatedAt() => clearField(2);
  @$pb.TagNumber(2)
  $0.Timestamp ensureCreatedAt() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get description => $_getSZ(2);
  @$pb.TagNumber(3)
  set description($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasDescription() => $_has(2);
  @$pb.TagNumber(3)
  void clearDescription() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<Game> get games => $_getList(3);

  @$pb.TagNumber(5)
  $core.String get name => $_getSZ(4);
  @$pb.TagNumber(5)
  set name($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasName() => $_has(4);
  @$pb.TagNumber(5)
  void clearName() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get slug => $_getSZ(5);
  @$pb.TagNumber(6)
  set slug($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasSlug() => $_has(5);
  @$pb.TagNumber(6)
  void clearSlug() => clearField(6);

  @$pb.TagNumber(7)
  $0.Timestamp get updatedAt => $_getN(6);
  @$pb.TagNumber(7)
  set updatedAt($0.Timestamp v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasUpdatedAt() => $_has(6);
  @$pb.TagNumber(7)
  void clearUpdatedAt() => clearField(7);
  @$pb.TagNumber(7)
  $0.Timestamp ensureUpdatedAt() => $_ensure(6);

  @$pb.TagNumber(8)
  $core.String get url => $_getSZ(7);
  @$pb.TagNumber(8)
  set url($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasUrl() => $_has(7);
  @$pb.TagNumber(8)
  void clearUrl() => clearField(8);

  @$pb.TagNumber(9)
  $core.String get checksum => $_getSZ(8);
  @$pb.TagNumber(9)
  set checksum($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasChecksum() => $_has(8);
  @$pb.TagNumber(9)
  void clearChecksum() => clearField(9);
}

class UserResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('UserResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<User>(1, 'users', $pb.PbFieldType.PM, subBuilder: User.create)
    ..hasRequiredFields = false
  ;

  UserResult._() : super();
  factory UserResult() => create();
  factory UserResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UserResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  UserResult clone() => UserResult()..mergeFromMessage(this);
  UserResult copyWith(void Function(UserResult) updates) => super.copyWith((message) => updates(message as UserResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static UserResult create() => UserResult._();
  UserResult createEmptyInstance() => create();
  static $pb.PbList<UserResult> createRepeated() => $pb.PbList<UserResult>();
  @$core.pragma('dart2js:noInline')
  static UserResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UserResult>(create);
  static UserResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<User> get users => $_getList(0);
}

class User extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('User', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOS(2, 'battlenet')
    ..e<ColorColorEnum>(3, 'color', $pb.PbFieldType.OE, defaultOrMaker: ColorColorEnum.GREEN, valueOf: ColorColorEnum.valueOf, enumValues: ColorColorEnum.values)
    ..aOM<$0.Timestamp>(4, 'createdAt', subBuilder: $0.Timestamp.create)
    ..aOS(5, 'discord')
    ..aOS(6, 'facebook')
    ..aOS(7, 'googlePlus')
    ..aOS(8, 'instagram')
    ..aOS(9, 'linkedin')
    ..aOS(10, 'origin')
    ..aOS(11, 'pinterest')
    ..aOS(12, 'presentation')
    ..aOS(13, 'reddit')
    ..e<UserRoleEnum>(14, 'role', $pb.PbFieldType.OE, defaultOrMaker: UserRoleEnum.USER_ROLE_NULL, valueOf: UserRoleEnum.valueOf, enumValues: UserRoleEnum.values)
    ..aOS(15, 'slug')
    ..aOS(16, 'soundcloud')
    ..aOS(17, 'steam')
    ..aOS(18, 'twitch')
    ..aOS(19, 'twitter')
    ..aOM<$0.Timestamp>(20, 'updatedAt', subBuilder: $0.Timestamp.create)
    ..aOS(21, 'uplay')
    ..aOS(22, 'url')
    ..aOS(23, 'username')
    ..aOS(24, 'youtube')
    ..aOS(25, 'checksum')
    ..hasRequiredFields = false
  ;

  User._() : super();
  factory User() => create();
  factory User.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory User.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  User clone() => User()..mergeFromMessage(this);
  User copyWith(void Function(User) updates) => super.copyWith((message) => updates(message as User));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static User create() => User._();
  User createEmptyInstance() => create();
  static $pb.PbList<User> createRepeated() => $pb.PbList<User>();
  @$core.pragma('dart2js:noInline')
  static User getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<User>(create);
  static User _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get battlenet => $_getSZ(1);
  @$pb.TagNumber(2)
  set battlenet($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBattlenet() => $_has(1);
  @$pb.TagNumber(2)
  void clearBattlenet() => clearField(2);

  @$pb.TagNumber(3)
  ColorColorEnum get color => $_getN(2);
  @$pb.TagNumber(3)
  set color(ColorColorEnum v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasColor() => $_has(2);
  @$pb.TagNumber(3)
  void clearColor() => clearField(3);

  @$pb.TagNumber(4)
  $0.Timestamp get createdAt => $_getN(3);
  @$pb.TagNumber(4)
  set createdAt($0.Timestamp v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCreatedAt() => $_has(3);
  @$pb.TagNumber(4)
  void clearCreatedAt() => clearField(4);
  @$pb.TagNumber(4)
  $0.Timestamp ensureCreatedAt() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.String get discord => $_getSZ(4);
  @$pb.TagNumber(5)
  set discord($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasDiscord() => $_has(4);
  @$pb.TagNumber(5)
  void clearDiscord() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get facebook => $_getSZ(5);
  @$pb.TagNumber(6)
  set facebook($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasFacebook() => $_has(5);
  @$pb.TagNumber(6)
  void clearFacebook() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get googlePlus => $_getSZ(6);
  @$pb.TagNumber(7)
  set googlePlus($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasGooglePlus() => $_has(6);
  @$pb.TagNumber(7)
  void clearGooglePlus() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get instagram => $_getSZ(7);
  @$pb.TagNumber(8)
  set instagram($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasInstagram() => $_has(7);
  @$pb.TagNumber(8)
  void clearInstagram() => clearField(8);

  @$pb.TagNumber(9)
  $core.String get linkedin => $_getSZ(8);
  @$pb.TagNumber(9)
  set linkedin($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasLinkedin() => $_has(8);
  @$pb.TagNumber(9)
  void clearLinkedin() => clearField(9);

  @$pb.TagNumber(10)
  $core.String get origin => $_getSZ(9);
  @$pb.TagNumber(10)
  set origin($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasOrigin() => $_has(9);
  @$pb.TagNumber(10)
  void clearOrigin() => clearField(10);

  @$pb.TagNumber(11)
  $core.String get pinterest => $_getSZ(10);
  @$pb.TagNumber(11)
  set pinterest($core.String v) { $_setString(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasPinterest() => $_has(10);
  @$pb.TagNumber(11)
  void clearPinterest() => clearField(11);

  @$pb.TagNumber(12)
  $core.String get presentation => $_getSZ(11);
  @$pb.TagNumber(12)
  set presentation($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasPresentation() => $_has(11);
  @$pb.TagNumber(12)
  void clearPresentation() => clearField(12);

  @$pb.TagNumber(13)
  $core.String get reddit => $_getSZ(12);
  @$pb.TagNumber(13)
  set reddit($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasReddit() => $_has(12);
  @$pb.TagNumber(13)
  void clearReddit() => clearField(13);

  @$pb.TagNumber(14)
  UserRoleEnum get role => $_getN(13);
  @$pb.TagNumber(14)
  set role(UserRoleEnum v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasRole() => $_has(13);
  @$pb.TagNumber(14)
  void clearRole() => clearField(14);

  @$pb.TagNumber(15)
  $core.String get slug => $_getSZ(14);
  @$pb.TagNumber(15)
  set slug($core.String v) { $_setString(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasSlug() => $_has(14);
  @$pb.TagNumber(15)
  void clearSlug() => clearField(15);

  @$pb.TagNumber(16)
  $core.String get soundcloud => $_getSZ(15);
  @$pb.TagNumber(16)
  set soundcloud($core.String v) { $_setString(15, v); }
  @$pb.TagNumber(16)
  $core.bool hasSoundcloud() => $_has(15);
  @$pb.TagNumber(16)
  void clearSoundcloud() => clearField(16);

  @$pb.TagNumber(17)
  $core.String get steam => $_getSZ(16);
  @$pb.TagNumber(17)
  set steam($core.String v) { $_setString(16, v); }
  @$pb.TagNumber(17)
  $core.bool hasSteam() => $_has(16);
  @$pb.TagNumber(17)
  void clearSteam() => clearField(17);

  @$pb.TagNumber(18)
  $core.String get twitch => $_getSZ(17);
  @$pb.TagNumber(18)
  set twitch($core.String v) { $_setString(17, v); }
  @$pb.TagNumber(18)
  $core.bool hasTwitch() => $_has(17);
  @$pb.TagNumber(18)
  void clearTwitch() => clearField(18);

  @$pb.TagNumber(19)
  $core.String get twitter => $_getSZ(18);
  @$pb.TagNumber(19)
  set twitter($core.String v) { $_setString(18, v); }
  @$pb.TagNumber(19)
  $core.bool hasTwitter() => $_has(18);
  @$pb.TagNumber(19)
  void clearTwitter() => clearField(19);

  @$pb.TagNumber(20)
  $0.Timestamp get updatedAt => $_getN(19);
  @$pb.TagNumber(20)
  set updatedAt($0.Timestamp v) { setField(20, v); }
  @$pb.TagNumber(20)
  $core.bool hasUpdatedAt() => $_has(19);
  @$pb.TagNumber(20)
  void clearUpdatedAt() => clearField(20);
  @$pb.TagNumber(20)
  $0.Timestamp ensureUpdatedAt() => $_ensure(19);

  @$pb.TagNumber(21)
  $core.String get uplay => $_getSZ(20);
  @$pb.TagNumber(21)
  set uplay($core.String v) { $_setString(20, v); }
  @$pb.TagNumber(21)
  $core.bool hasUplay() => $_has(20);
  @$pb.TagNumber(21)
  void clearUplay() => clearField(21);

  @$pb.TagNumber(22)
  $core.String get url => $_getSZ(21);
  @$pb.TagNumber(22)
  set url($core.String v) { $_setString(21, v); }
  @$pb.TagNumber(22)
  $core.bool hasUrl() => $_has(21);
  @$pb.TagNumber(22)
  void clearUrl() => clearField(22);

  @$pb.TagNumber(23)
  $core.String get username => $_getSZ(22);
  @$pb.TagNumber(23)
  set username($core.String v) { $_setString(22, v); }
  @$pb.TagNumber(23)
  $core.bool hasUsername() => $_has(22);
  @$pb.TagNumber(23)
  void clearUsername() => clearField(23);

  @$pb.TagNumber(24)
  $core.String get youtube => $_getSZ(23);
  @$pb.TagNumber(24)
  set youtube($core.String v) { $_setString(23, v); }
  @$pb.TagNumber(24)
  $core.bool hasYoutube() => $_has(23);
  @$pb.TagNumber(24)
  void clearYoutube() => clearField(24);

  @$pb.TagNumber(25)
  $core.String get checksum => $_getSZ(24);
  @$pb.TagNumber(25)
  set checksum($core.String v) { $_setString(24, v); }
  @$pb.TagNumber(25)
  $core.bool hasChecksum() => $_has(24);
  @$pb.TagNumber(25)
  void clearChecksum() => clearField(25);
}

class WebsiteResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('WebsiteResult', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..pc<Website>(1, 'websites', $pb.PbFieldType.PM, subBuilder: Website.create)
    ..hasRequiredFields = false
  ;

  WebsiteResult._() : super();
  factory WebsiteResult() => create();
  factory WebsiteResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory WebsiteResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  WebsiteResult clone() => WebsiteResult()..mergeFromMessage(this);
  WebsiteResult copyWith(void Function(WebsiteResult) updates) => super.copyWith((message) => updates(message as WebsiteResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static WebsiteResult create() => WebsiteResult._();
  WebsiteResult createEmptyInstance() => create();
  static $pb.PbList<WebsiteResult> createRepeated() => $pb.PbList<WebsiteResult>();
  @$core.pragma('dart2js:noInline')
  static WebsiteResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<WebsiteResult>(create);
  static WebsiteResult _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Website> get websites => $_getList(0);
}

class Website extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Website', package: const $pb.PackageName('proto'), createEmptyInstance: create)
    ..a<$fixnum.Int64>(1, 'id', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..e<WebsiteCategoryEnum>(2, 'category', $pb.PbFieldType.OE, defaultOrMaker: WebsiteCategoryEnum.WEBSITE_CATEGORY_NULL, valueOf: WebsiteCategoryEnum.valueOf, enumValues: WebsiteCategoryEnum.values)
    ..aOM<Game>(3, 'game', subBuilder: Game.create)
    ..aOB(4, 'trusted')
    ..aOS(5, 'url')
    ..aOS(6, 'checksum')
    ..hasRequiredFields = false
  ;

  Website._() : super();
  factory Website() => create();
  factory Website.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Website.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Website clone() => Website()..mergeFromMessage(this);
  Website copyWith(void Function(Website) updates) => super.copyWith((message) => updates(message as Website));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Website create() => Website._();
  Website createEmptyInstance() => create();
  static $pb.PbList<Website> createRepeated() => $pb.PbList<Website>();
  @$core.pragma('dart2js:noInline')
  static Website getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Website>(create);
  static Website _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get id => $_getI64(0);
  @$pb.TagNumber(1)
  set id($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  WebsiteCategoryEnum get category => $_getN(1);
  @$pb.TagNumber(2)
  set category(WebsiteCategoryEnum v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCategory() => $_has(1);
  @$pb.TagNumber(2)
  void clearCategory() => clearField(2);

  @$pb.TagNumber(3)
  Game get game => $_getN(2);
  @$pb.TagNumber(3)
  set game(Game v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasGame() => $_has(2);
  @$pb.TagNumber(3)
  void clearGame() => clearField(3);
  @$pb.TagNumber(3)
  Game ensureGame() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.bool get trusted => $_getBF(3);
  @$pb.TagNumber(4)
  set trusted($core.bool v) { $_setBool(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasTrusted() => $_has(3);
  @$pb.TagNumber(4)
  void clearTrusted() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get url => $_getSZ(4);
  @$pb.TagNumber(5)
  set url($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasUrl() => $_has(4);
  @$pb.TagNumber(5)
  void clearUrl() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get checksum => $_getSZ(5);
  @$pb.TagNumber(6)
  set checksum($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasChecksum() => $_has(5);
  @$pb.TagNumber(6)
  void clearChecksum() => clearField(6);
}

