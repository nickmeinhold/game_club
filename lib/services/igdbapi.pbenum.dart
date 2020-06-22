///
//  Generated code. Do not modify.
//  source: igdbapi.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

// ignore_for_file: UNDEFINED_SHOWN_NAME,UNUSED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class AchievementCategoryEnum extends $pb.ProtobufEnum {
  static const AchievementCategoryEnum ACHIEVEMENT_CATEGORY_NULL = AchievementCategoryEnum._(0, 'ACHIEVEMENT_CATEGORY_NULL');
  static const AchievementCategoryEnum PLAYSTATION = AchievementCategoryEnum._(1, 'PLAYSTATION');
  static const AchievementCategoryEnum XBOX = AchievementCategoryEnum._(2, 'XBOX');
  static const AchievementCategoryEnum STEAM = AchievementCategoryEnum._(3, 'STEAM');

  static const $core.List<AchievementCategoryEnum> values = <AchievementCategoryEnum> [
    ACHIEVEMENT_CATEGORY_NULL,
    PLAYSTATION,
    XBOX,
    STEAM,
  ];

  static final $core.Map<$core.int, AchievementCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AchievementCategoryEnum valueOf($core.int value) => _byValue[value];

  const AchievementCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class RegionLanguageEnum extends $pb.ProtobufEnum {
  static const RegionLanguageEnum REGION_LANGUAGE_NULL = RegionLanguageEnum._(0, 'REGION_LANGUAGE_NULL');
  static const RegionLanguageEnum EUROPE = RegionLanguageEnum._(1, 'EUROPE');
  static const RegionLanguageEnum NORTH_AMERICA = RegionLanguageEnum._(2, 'NORTH_AMERICA');
  static const RegionLanguageEnum AUSTRALIA = RegionLanguageEnum._(3, 'AUSTRALIA');
  static const RegionLanguageEnum NEW_ZELAND = RegionLanguageEnum._(4, 'NEW_ZELAND');
  static const RegionLanguageEnum JAPAN = RegionLanguageEnum._(5, 'JAPAN');
  static const RegionLanguageEnum CHINA = RegionLanguageEnum._(6, 'CHINA');
  static const RegionLanguageEnum ASIA = RegionLanguageEnum._(7, 'ASIA');
  static const RegionLanguageEnum WORLDWIDE = RegionLanguageEnum._(8, 'WORLDWIDE');
  static const RegionLanguageEnum HONG_KONG = RegionLanguageEnum._(9, 'HONG_KONG');
  static const RegionLanguageEnum SOUTH_KOREA = RegionLanguageEnum._(10, 'SOUTH_KOREA');

  static const $core.List<RegionLanguageEnum> values = <RegionLanguageEnum> [
    REGION_LANGUAGE_NULL,
    EUROPE,
    NORTH_AMERICA,
    AUSTRALIA,
    NEW_ZELAND,
    JAPAN,
    CHINA,
    ASIA,
    WORLDWIDE,
    HONG_KONG,
    SOUTH_KOREA,
  ];

  static final $core.Map<$core.int, RegionLanguageEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static RegionLanguageEnum valueOf($core.int value) => _byValue[value];

  const RegionLanguageEnum._($core.int v, $core.String n) : super(v, n);
}

class AchievementRankEnum extends $pb.ProtobufEnum {
  static const AchievementRankEnum ACHIEVEMENT_RANK_NULL = AchievementRankEnum._(0, 'ACHIEVEMENT_RANK_NULL');
  static const AchievementRankEnum BRONZE = AchievementRankEnum._(1, 'BRONZE');
  static const AchievementRankEnum SILVER = AchievementRankEnum._(2, 'SILVER');
  static const AchievementRankEnum GOLD = AchievementRankEnum._(3, 'GOLD');
  static const AchievementRankEnum PLATINUM = AchievementRankEnum._(4, 'PLATINUM');

  static const $core.List<AchievementRankEnum> values = <AchievementRankEnum> [
    ACHIEVEMENT_RANK_NULL,
    BRONZE,
    SILVER,
    GOLD,
    PLATINUM,
  ];

  static final $core.Map<$core.int, AchievementRankEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AchievementRankEnum valueOf($core.int value) => _byValue[value];

  const AchievementRankEnum._($core.int v, $core.String n) : super(v, n);
}

class AgeRatingCategoryEnum extends $pb.ProtobufEnum {
  static const AgeRatingCategoryEnum AGERATING_CATEGORY_NULL = AgeRatingCategoryEnum._(0, 'AGERATING_CATEGORY_NULL');
  static const AgeRatingCategoryEnum ESRB = AgeRatingCategoryEnum._(1, 'ESRB');
  static const AgeRatingCategoryEnum PEGI = AgeRatingCategoryEnum._(2, 'PEGI');

  static const $core.List<AgeRatingCategoryEnum> values = <AgeRatingCategoryEnum> [
    AGERATING_CATEGORY_NULL,
    ESRB,
    PEGI,
  ];

  static final $core.Map<$core.int, AgeRatingCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AgeRatingCategoryEnum valueOf($core.int value) => _byValue[value];

  const AgeRatingCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class AgeRatingRatingEnum extends $pb.ProtobufEnum {
  static const AgeRatingRatingEnum AGERATING_RATING_NULL = AgeRatingRatingEnum._(0, 'AGERATING_RATING_NULL');
  static const AgeRatingRatingEnum THREE = AgeRatingRatingEnum._(1, 'THREE');
  static const AgeRatingRatingEnum SEVEN = AgeRatingRatingEnum._(2, 'SEVEN');
  static const AgeRatingRatingEnum TWELVE = AgeRatingRatingEnum._(3, 'TWELVE');
  static const AgeRatingRatingEnum SIXTEEN = AgeRatingRatingEnum._(4, 'SIXTEEN');
  static const AgeRatingRatingEnum EIGHTEEN = AgeRatingRatingEnum._(5, 'EIGHTEEN');
  static const AgeRatingRatingEnum RP = AgeRatingRatingEnum._(6, 'RP');
  static const AgeRatingRatingEnum EC = AgeRatingRatingEnum._(7, 'EC');
  static const AgeRatingRatingEnum E = AgeRatingRatingEnum._(8, 'E');
  static const AgeRatingRatingEnum E10 = AgeRatingRatingEnum._(9, 'E10');
  static const AgeRatingRatingEnum T = AgeRatingRatingEnum._(10, 'T');
  static const AgeRatingRatingEnum M = AgeRatingRatingEnum._(11, 'M');
  static const AgeRatingRatingEnum AO = AgeRatingRatingEnum._(12, 'AO');

  static const $core.List<AgeRatingRatingEnum> values = <AgeRatingRatingEnum> [
    AGERATING_RATING_NULL,
    THREE,
    SEVEN,
    TWELVE,
    SIXTEEN,
    EIGHTEEN,
    RP,
    EC,
    E,
    E10,
    T,
    M,
    AO,
  ];

  static final $core.Map<$core.int, AgeRatingRatingEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AgeRatingRatingEnum valueOf($core.int value) => _byValue[value];

  const AgeRatingRatingEnum._($core.int v, $core.String n) : super(v, n);
}

class GenderGenderEnum extends $pb.ProtobufEnum {
  static const GenderGenderEnum GENDER_GENDER_NULL = GenderGenderEnum._(0, 'GENDER_GENDER_NULL');
  static const GenderGenderEnum MALE = GenderGenderEnum._(1, 'MALE');
  static const GenderGenderEnum FEMALE = GenderGenderEnum._(2, 'FEMALE');
  static const GenderGenderEnum OTHER = GenderGenderEnum._(3, 'OTHER');

  static const $core.List<GenderGenderEnum> values = <GenderGenderEnum> [
    GENDER_GENDER_NULL,
    MALE,
    FEMALE,
    OTHER,
  ];

  static final $core.Map<$core.int, GenderGenderEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static GenderGenderEnum valueOf($core.int value) => _byValue[value];

  const GenderGenderEnum._($core.int v, $core.String n) : super(v, n);
}

class CharacterSpeciesEnum extends $pb.ProtobufEnum {
  static const CharacterSpeciesEnum CHARACTER_SPECIES_NULL = CharacterSpeciesEnum._(0, 'CHARACTER_SPECIES_NULL');
  static const CharacterSpeciesEnum HUMAN = CharacterSpeciesEnum._(1, 'HUMAN');
  static const CharacterSpeciesEnum ALIEN = CharacterSpeciesEnum._(2, 'ALIEN');
  static const CharacterSpeciesEnum ANIMAL = CharacterSpeciesEnum._(3, 'ANIMAL');
  static const CharacterSpeciesEnum ANDROID = CharacterSpeciesEnum._(4, 'ANDROID');
  static const CharacterSpeciesEnum UNKNOWN = CharacterSpeciesEnum._(5, 'UNKNOWN');

  static const $core.List<CharacterSpeciesEnum> values = <CharacterSpeciesEnum> [
    CHARACTER_SPECIES_NULL,
    HUMAN,
    ALIEN,
    ANIMAL,
    ANDROID,
    UNKNOWN,
  ];

  static final $core.Map<$core.int, CharacterSpeciesEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static CharacterSpeciesEnum valueOf($core.int value) => _byValue[value];

  const CharacterSpeciesEnum._($core.int v, $core.String n) : super(v, n);
}

class DateFormatChangeDateCategoryEnum extends $pb.ProtobufEnum {
  static const DateFormatChangeDateCategoryEnum YYYYMMMMDD = DateFormatChangeDateCategoryEnum._(0, 'YYYYMMMMDD');
  static const DateFormatChangeDateCategoryEnum YYYYMMMM = DateFormatChangeDateCategoryEnum._(1, 'YYYYMMMM');
  static const DateFormatChangeDateCategoryEnum YYYY = DateFormatChangeDateCategoryEnum._(2, 'YYYY');
  static const DateFormatChangeDateCategoryEnum YYYYQ1 = DateFormatChangeDateCategoryEnum._(3, 'YYYYQ1');
  static const DateFormatChangeDateCategoryEnum YYYYQ2 = DateFormatChangeDateCategoryEnum._(4, 'YYYYQ2');
  static const DateFormatChangeDateCategoryEnum YYYYQ3 = DateFormatChangeDateCategoryEnum._(5, 'YYYYQ3');
  static const DateFormatChangeDateCategoryEnum YYYYQ4 = DateFormatChangeDateCategoryEnum._(6, 'YYYYQ4');
  static const DateFormatChangeDateCategoryEnum TBD = DateFormatChangeDateCategoryEnum._(7, 'TBD');

  static const $core.List<DateFormatChangeDateCategoryEnum> values = <DateFormatChangeDateCategoryEnum> [
    YYYYMMMMDD,
    YYYYMMMM,
    YYYY,
    YYYYQ1,
    YYYYQ2,
    YYYYQ3,
    YYYYQ4,
    TBD,
  ];

  static final $core.Map<$core.int, DateFormatChangeDateCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static DateFormatChangeDateCategoryEnum valueOf($core.int value) => _byValue[value];

  const DateFormatChangeDateCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class WebsiteCategoryEnum extends $pb.ProtobufEnum {
  static const WebsiteCategoryEnum WEBSITE_CATEGORY_NULL = WebsiteCategoryEnum._(0, 'WEBSITE_CATEGORY_NULL');
  static const WebsiteCategoryEnum WEBSITE_OFFICIAL = WebsiteCategoryEnum._(1, 'WEBSITE_OFFICIAL');
  static const WebsiteCategoryEnum WEBSITE_WIKIA = WebsiteCategoryEnum._(2, 'WEBSITE_WIKIA');
  static const WebsiteCategoryEnum WEBSITE_WIKIPEDIA = WebsiteCategoryEnum._(3, 'WEBSITE_WIKIPEDIA');
  static const WebsiteCategoryEnum WEBSITE_FACEBOOK = WebsiteCategoryEnum._(4, 'WEBSITE_FACEBOOK');
  static const WebsiteCategoryEnum WEBSITE_TWITTER = WebsiteCategoryEnum._(5, 'WEBSITE_TWITTER');
  static const WebsiteCategoryEnum WEBSITE_TWITCH = WebsiteCategoryEnum._(6, 'WEBSITE_TWITCH');
  static const WebsiteCategoryEnum WEBSITE_INSTAGRAM = WebsiteCategoryEnum._(8, 'WEBSITE_INSTAGRAM');
  static const WebsiteCategoryEnum WEBSITE_YOUTUBE = WebsiteCategoryEnum._(9, 'WEBSITE_YOUTUBE');
  static const WebsiteCategoryEnum WEBSITE_IPHONE = WebsiteCategoryEnum._(10, 'WEBSITE_IPHONE');
  static const WebsiteCategoryEnum WEBSITE_IPAD = WebsiteCategoryEnum._(11, 'WEBSITE_IPAD');
  static const WebsiteCategoryEnum WEBSITE_ANDROID = WebsiteCategoryEnum._(12, 'WEBSITE_ANDROID');
  static const WebsiteCategoryEnum WEBSITE_STEAM = WebsiteCategoryEnum._(13, 'WEBSITE_STEAM');
  static const WebsiteCategoryEnum WEBSITE_REDDIT = WebsiteCategoryEnum._(14, 'WEBSITE_REDDIT');
  static const WebsiteCategoryEnum WEBSITE_ITCH = WebsiteCategoryEnum._(15, 'WEBSITE_ITCH');
  static const WebsiteCategoryEnum WEBSITE_EPICGAMES = WebsiteCategoryEnum._(16, 'WEBSITE_EPICGAMES');
  static const WebsiteCategoryEnum WEBSITE_GOG = WebsiteCategoryEnum._(17, 'WEBSITE_GOG');
  static const WebsiteCategoryEnum WEBSITE_DISCORD = WebsiteCategoryEnum._(18, 'WEBSITE_DISCORD');

  static const $core.List<WebsiteCategoryEnum> values = <WebsiteCategoryEnum> [
    WEBSITE_CATEGORY_NULL,
    WEBSITE_OFFICIAL,
    WEBSITE_WIKIA,
    WEBSITE_WIKIPEDIA,
    WEBSITE_FACEBOOK,
    WEBSITE_TWITTER,
    WEBSITE_TWITCH,
    WEBSITE_INSTAGRAM,
    WEBSITE_YOUTUBE,
    WEBSITE_IPHONE,
    WEBSITE_IPAD,
    WEBSITE_ANDROID,
    WEBSITE_STEAM,
    WEBSITE_REDDIT,
    WEBSITE_ITCH,
    WEBSITE_EPICGAMES,
    WEBSITE_GOG,
    WEBSITE_DISCORD,
  ];

  static final $core.Map<$core.int, WebsiteCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static WebsiteCategoryEnum valueOf($core.int value) => _byValue[value];

  const WebsiteCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class CreditCategoryEnum extends $pb.ProtobufEnum {
  static const CreditCategoryEnum CREDIT_CATEGORY_NULL = CreditCategoryEnum._(0, 'CREDIT_CATEGORY_NULL');
  static const CreditCategoryEnum VOICE_ACTOR = CreditCategoryEnum._(1, 'VOICE_ACTOR');
  static const CreditCategoryEnum LANGUAGE = CreditCategoryEnum._(2, 'LANGUAGE');
  static const CreditCategoryEnum COMPANY_CREDIT = CreditCategoryEnum._(3, 'COMPANY_CREDIT');
  static const CreditCategoryEnum EMPLOYEE = CreditCategoryEnum._(4, 'EMPLOYEE');
  static const CreditCategoryEnum MISC = CreditCategoryEnum._(5, 'MISC');
  static const CreditCategoryEnum SUPPORT_COMPANY = CreditCategoryEnum._(6, 'SUPPORT_COMPANY');

  static const $core.List<CreditCategoryEnum> values = <CreditCategoryEnum> [
    CREDIT_CATEGORY_NULL,
    VOICE_ACTOR,
    LANGUAGE,
    COMPANY_CREDIT,
    EMPLOYEE,
    MISC,
    SUPPORT_COMPANY,
  ];

  static final $core.Map<$core.int, CreditCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static CreditCategoryEnum valueOf($core.int value) => _byValue[value];

  const CreditCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class ExternalGameCategoryEnum extends $pb.ProtobufEnum {
  static const ExternalGameCategoryEnum EXTERNALGAME_CATEGORY_NULL = ExternalGameCategoryEnum._(0, 'EXTERNALGAME_CATEGORY_NULL');
  static const ExternalGameCategoryEnum EXTERNALGAME_STEAM = ExternalGameCategoryEnum._(1, 'EXTERNALGAME_STEAM');
  static const ExternalGameCategoryEnum EXTERNALGAME_GOG = ExternalGameCategoryEnum._(5, 'EXTERNALGAME_GOG');
  static const ExternalGameCategoryEnum EXTERNALGAME_YOUTUBE = ExternalGameCategoryEnum._(10, 'EXTERNALGAME_YOUTUBE');
  static const ExternalGameCategoryEnum EXTERNALGAME_MICROSOFT = ExternalGameCategoryEnum._(11, 'EXTERNALGAME_MICROSOFT');
  static const ExternalGameCategoryEnum EXTERNALGAME_APPLE = ExternalGameCategoryEnum._(13, 'EXTERNALGAME_APPLE');
  static const ExternalGameCategoryEnum EXTERNALGAME_TWITCH = ExternalGameCategoryEnum._(14, 'EXTERNALGAME_TWITCH');
  static const ExternalGameCategoryEnum EXTERNALGAME_ANDROID = ExternalGameCategoryEnum._(15, 'EXTERNALGAME_ANDROID');

  static const $core.List<ExternalGameCategoryEnum> values = <ExternalGameCategoryEnum> [
    EXTERNALGAME_CATEGORY_NULL,
    EXTERNALGAME_STEAM,
    EXTERNALGAME_GOG,
    EXTERNALGAME_YOUTUBE,
    EXTERNALGAME_MICROSOFT,
    EXTERNALGAME_APPLE,
    EXTERNALGAME_TWITCH,
    EXTERNALGAME_ANDROID,
  ];

  static final $core.Map<$core.int, ExternalGameCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static ExternalGameCategoryEnum valueOf($core.int value) => _byValue[value];

  const ExternalGameCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class ExternalGameMediaEnum extends $pb.ProtobufEnum {
  static const ExternalGameMediaEnum EXTERNALGAME_MEDIA_NULL = ExternalGameMediaEnum._(0, 'EXTERNALGAME_MEDIA_NULL');
  static const ExternalGameMediaEnum EXTERNALGAME_DIGITAL = ExternalGameMediaEnum._(1, 'EXTERNALGAME_DIGITAL');
  static const ExternalGameMediaEnum EXTERNALGAME_PHYSICAL = ExternalGameMediaEnum._(2, 'EXTERNALGAME_PHYSICAL');

  static const $core.List<ExternalGameMediaEnum> values = <ExternalGameMediaEnum> [
    EXTERNALGAME_MEDIA_NULL,
    EXTERNALGAME_DIGITAL,
    EXTERNALGAME_PHYSICAL,
  ];

  static final $core.Map<$core.int, ExternalGameMediaEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static ExternalGameMediaEnum valueOf($core.int value) => _byValue[value];

  const ExternalGameMediaEnum._($core.int v, $core.String n) : super(v, n);
}

class FeedCategoryEnum extends $pb.ProtobufEnum {
  static const FeedCategoryEnum FEED_CATEGORY_NULL = FeedCategoryEnum._(0, 'FEED_CATEGORY_NULL');
  static const FeedCategoryEnum PULSE_ARTICLE = FeedCategoryEnum._(1, 'PULSE_ARTICLE');
  static const FeedCategoryEnum COMING_SOON = FeedCategoryEnum._(2, 'COMING_SOON');
  static const FeedCategoryEnum NEW_TRAILER = FeedCategoryEnum._(3, 'NEW_TRAILER');
  static const FeedCategoryEnum USER_CONTRIBUTED_ITEM = FeedCategoryEnum._(5, 'USER_CONTRIBUTED_ITEM');
  static const FeedCategoryEnum USER_CONTRIBUTIONS_ITEM = FeedCategoryEnum._(6, 'USER_CONTRIBUTIONS_ITEM');
  static const FeedCategoryEnum PAGE_CONTRIBUTED_ITEM = FeedCategoryEnum._(7, 'PAGE_CONTRIBUTED_ITEM');

  static const $core.List<FeedCategoryEnum> values = <FeedCategoryEnum> [
    FEED_CATEGORY_NULL,
    PULSE_ARTICLE,
    COMING_SOON,
    NEW_TRAILER,
    USER_CONTRIBUTED_ITEM,
    USER_CONTRIBUTIONS_ITEM,
    PAGE_CONTRIBUTED_ITEM,
  ];

  static final $core.Map<$core.int, FeedCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static FeedCategoryEnum valueOf($core.int value) => _byValue[value];

  const FeedCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class GameCategoryEnum extends $pb.ProtobufEnum {
  static const GameCategoryEnum MAIN_GAME = GameCategoryEnum._(0, 'MAIN_GAME');
  static const GameCategoryEnum DLC_ADDON = GameCategoryEnum._(1, 'DLC_ADDON');
  static const GameCategoryEnum EXPANSION = GameCategoryEnum._(2, 'EXPANSION');
  static const GameCategoryEnum BUNDLE = GameCategoryEnum._(3, 'BUNDLE');
  static const GameCategoryEnum STANDALONE_EXPANSION = GameCategoryEnum._(4, 'STANDALONE_EXPANSION');
  static const GameCategoryEnum MOD = GameCategoryEnum._(5, 'MOD');
  static const GameCategoryEnum EPISODE = GameCategoryEnum._(6, 'EPISODE');

  static const $core.List<GameCategoryEnum> values = <GameCategoryEnum> [
    MAIN_GAME,
    DLC_ADDON,
    EXPANSION,
    BUNDLE,
    STANDALONE_EXPANSION,
    MOD,
    EPISODE,
  ];

  static final $core.Map<$core.int, GameCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static GameCategoryEnum valueOf($core.int value) => _byValue[value];

  const GameCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class GameStatusEnum extends $pb.ProtobufEnum {
  static const GameStatusEnum RELEASED = GameStatusEnum._(0, 'RELEASED');
  static const GameStatusEnum ALPHA = GameStatusEnum._(2, 'ALPHA');
  static const GameStatusEnum BETA = GameStatusEnum._(3, 'BETA');
  static const GameStatusEnum EARLY_ACCESS = GameStatusEnum._(4, 'EARLY_ACCESS');
  static const GameStatusEnum OFFLINE = GameStatusEnum._(5, 'OFFLINE');
  static const GameStatusEnum CANCELLED = GameStatusEnum._(6, 'CANCELLED');
  static const GameStatusEnum RUMORED = GameStatusEnum._(7, 'RUMORED');

  static const $core.List<GameStatusEnum> values = <GameStatusEnum> [
    RELEASED,
    ALPHA,
    BETA,
    EARLY_ACCESS,
    OFFLINE,
    CANCELLED,
    RUMORED,
  ];

  static final $core.Map<$core.int, GameStatusEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static GameStatusEnum valueOf($core.int value) => _byValue[value];

  const GameStatusEnum._($core.int v, $core.String n) : super(v, n);
}

class GameVersionFeatureCategoryEnum extends $pb.ProtobufEnum {
  static const GameVersionFeatureCategoryEnum BOOLEAN = GameVersionFeatureCategoryEnum._(0, 'BOOLEAN');
  static const GameVersionFeatureCategoryEnum DESCRIPTION = GameVersionFeatureCategoryEnum._(1, 'DESCRIPTION');

  static const $core.List<GameVersionFeatureCategoryEnum> values = <GameVersionFeatureCategoryEnum> [
    BOOLEAN,
    DESCRIPTION,
  ];

  static final $core.Map<$core.int, GameVersionFeatureCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static GameVersionFeatureCategoryEnum valueOf($core.int value) => _byValue[value];

  const GameVersionFeatureCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class GameVersionFeatureValueIncludedFeatureEnum extends $pb.ProtobufEnum {
  static const GameVersionFeatureValueIncludedFeatureEnum NOT_INCLUDED = GameVersionFeatureValueIncludedFeatureEnum._(0, 'NOT_INCLUDED');
  static const GameVersionFeatureValueIncludedFeatureEnum INCLUDED = GameVersionFeatureValueIncludedFeatureEnum._(1, 'INCLUDED');
  static const GameVersionFeatureValueIncludedFeatureEnum PRE_ORDER_ONLY = GameVersionFeatureValueIncludedFeatureEnum._(2, 'PRE_ORDER_ONLY');

  static const $core.List<GameVersionFeatureValueIncludedFeatureEnum> values = <GameVersionFeatureValueIncludedFeatureEnum> [
    NOT_INCLUDED,
    INCLUDED,
    PRE_ORDER_ONLY,
  ];

  static final $core.Map<$core.int, GameVersionFeatureValueIncludedFeatureEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static GameVersionFeatureValueIncludedFeatureEnum valueOf($core.int value) => _byValue[value];

  const GameVersionFeatureValueIncludedFeatureEnum._($core.int v, $core.String n) : super(v, n);
}

class PageCategoryEnum extends $pb.ProtobufEnum {
  static const PageCategoryEnum PAGE_CATEGORY_NULL = PageCategoryEnum._(0, 'PAGE_CATEGORY_NULL');
  static const PageCategoryEnum PERSONALITY = PageCategoryEnum._(1, 'PERSONALITY');
  static const PageCategoryEnum MEDIA_ORGANIZATION = PageCategoryEnum._(2, 'MEDIA_ORGANIZATION');
  static const PageCategoryEnum CONTENT_CREATOR = PageCategoryEnum._(3, 'CONTENT_CREATOR');
  static const PageCategoryEnum CLAN_TEAM = PageCategoryEnum._(4, 'CLAN_TEAM');

  static const $core.List<PageCategoryEnum> values = <PageCategoryEnum> [
    PAGE_CATEGORY_NULL,
    PERSONALITY,
    MEDIA_ORGANIZATION,
    CONTENT_CREATOR,
    CLAN_TEAM,
  ];

  static final $core.Map<$core.int, PageCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static PageCategoryEnum valueOf($core.int value) => _byValue[value];

  const PageCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class ColorColorEnum extends $pb.ProtobufEnum {
  static const ColorColorEnum GREEN = ColorColorEnum._(0, 'GREEN');
  static const ColorColorEnum BLUE = ColorColorEnum._(1, 'BLUE');
  static const ColorColorEnum RED = ColorColorEnum._(2, 'RED');
  static const ColorColorEnum ORANGE = ColorColorEnum._(3, 'ORANGE');
  static const ColorColorEnum PINK = ColorColorEnum._(4, 'PINK');
  static const ColorColorEnum YELLOW = ColorColorEnum._(5, 'YELLOW');

  static const $core.List<ColorColorEnum> values = <ColorColorEnum> [
    GREEN,
    BLUE,
    RED,
    ORANGE,
    PINK,
    YELLOW,
  ];

  static final $core.Map<$core.int, ColorColorEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static ColorColorEnum valueOf($core.int value) => _byValue[value];

  const ColorColorEnum._($core.int v, $core.String n) : super(v, n);
}

class PageSubCategoryEnum extends $pb.ProtobufEnum {
  static const PageSubCategoryEnum PAGE_SUB_CATEGORY_NULL = PageSubCategoryEnum._(0, 'PAGE_SUB_CATEGORY_NULL');
  static const PageSubCategoryEnum USER = PageSubCategoryEnum._(1, 'USER');
  static const PageSubCategoryEnum GAME = PageSubCategoryEnum._(2, 'GAME');
  static const PageSubCategoryEnum COMPANY = PageSubCategoryEnum._(3, 'COMPANY');
  static const PageSubCategoryEnum CONSUMER = PageSubCategoryEnum._(4, 'CONSUMER');
  static const PageSubCategoryEnum INDUSTRY = PageSubCategoryEnum._(5, 'INDUSTRY');
  static const PageSubCategoryEnum E_SPORTS = PageSubCategoryEnum._(6, 'E_SPORTS');

  static const $core.List<PageSubCategoryEnum> values = <PageSubCategoryEnum> [
    PAGE_SUB_CATEGORY_NULL,
    USER,
    GAME,
    COMPANY,
    CONSUMER,
    INDUSTRY,
    E_SPORTS,
  ];

  static final $core.Map<$core.int, PageSubCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static PageSubCategoryEnum valueOf($core.int value) => _byValue[value];

  const PageSubCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class PlatformCategoryEnum extends $pb.ProtobufEnum {
  static const PlatformCategoryEnum PLATFORM_CATEGORY_NULL = PlatformCategoryEnum._(0, 'PLATFORM_CATEGORY_NULL');
  static const PlatformCategoryEnum CONSOLE = PlatformCategoryEnum._(1, 'CONSOLE');
  static const PlatformCategoryEnum ARCADE = PlatformCategoryEnum._(2, 'ARCADE');
  static const PlatformCategoryEnum PLATFORM = PlatformCategoryEnum._(3, 'PLATFORM');
  static const PlatformCategoryEnum OPERATING_SYSTEM = PlatformCategoryEnum._(4, 'OPERATING_SYSTEM');
  static const PlatformCategoryEnum PORTABLE_CONSOLE = PlatformCategoryEnum._(5, 'PORTABLE_CONSOLE');
  static const PlatformCategoryEnum COMPUTER = PlatformCategoryEnum._(6, 'COMPUTER');

  static const $core.List<PlatformCategoryEnum> values = <PlatformCategoryEnum> [
    PLATFORM_CATEGORY_NULL,
    CONSOLE,
    ARCADE,
    PLATFORM,
    OPERATING_SYSTEM,
    PORTABLE_CONSOLE,
    COMPUTER,
  ];

  static final $core.Map<$core.int, PlatformCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static PlatformCategoryEnum valueOf($core.int value) => _byValue[value];

  const PlatformCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class ReviewCategoryEnum extends $pb.ProtobufEnum {
  static const ReviewCategoryEnum REVIEW_CATEGORY_NULL = ReviewCategoryEnum._(0, 'REVIEW_CATEGORY_NULL');
  static const ReviewCategoryEnum TEXT = ReviewCategoryEnum._(1, 'TEXT');
  static const ReviewCategoryEnum VIDEO = ReviewCategoryEnum._(2, 'VIDEO');

  static const $core.List<ReviewCategoryEnum> values = <ReviewCategoryEnum> [
    REVIEW_CATEGORY_NULL,
    TEXT,
    VIDEO,
  ];

  static final $core.Map<$core.int, ReviewCategoryEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static ReviewCategoryEnum valueOf($core.int value) => _byValue[value];

  const ReviewCategoryEnum._($core.int v, $core.String n) : super(v, n);
}

class TestDummyEnumTestEnum extends $pb.ProtobufEnum {
  static const TestDummyEnumTestEnum TESTDUMMY_ENUM_TEST_NULL = TestDummyEnumTestEnum._(0, 'TESTDUMMY_ENUM_TEST_NULL');
  static const TestDummyEnumTestEnum ENUM1 = TestDummyEnumTestEnum._(1, 'ENUM1');
  static const TestDummyEnumTestEnum ENUM2 = TestDummyEnumTestEnum._(2, 'ENUM2');

  static const $core.List<TestDummyEnumTestEnum> values = <TestDummyEnumTestEnum> [
    TESTDUMMY_ENUM_TEST_NULL,
    ENUM1,
    ENUM2,
  ];

  static final $core.Map<$core.int, TestDummyEnumTestEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static TestDummyEnumTestEnum valueOf($core.int value) => _byValue[value];

  const TestDummyEnumTestEnum._($core.int v, $core.String n) : super(v, n);
}

class UserRoleEnum extends $pb.ProtobufEnum {
  static const UserRoleEnum USER_ROLE_NULL = UserRoleEnum._(0, 'USER_ROLE_NULL');
  static const UserRoleEnum USER_USER = UserRoleEnum._(1, 'USER_USER');
  static const UserRoleEnum USER_ADVANCED_USER = UserRoleEnum._(2, 'USER_ADVANCED_USER');
  static const UserRoleEnum USER_SUPER_ADVANCED_USER = UserRoleEnum._(3, 'USER_SUPER_ADVANCED_USER');
  static const UserRoleEnum USER_KEEPER = UserRoleEnum._(4, 'USER_KEEPER');
  static const UserRoleEnum USER_ADMIN = UserRoleEnum._(9, 'USER_ADMIN');
  static const UserRoleEnum USER_SUPER_ADMIN = UserRoleEnum._(10, 'USER_SUPER_ADMIN');

  static const $core.List<UserRoleEnum> values = <UserRoleEnum> [
    USER_ROLE_NULL,
    USER_USER,
    USER_ADVANCED_USER,
    USER_SUPER_ADVANCED_USER,
    USER_KEEPER,
    USER_ADMIN,
    USER_SUPER_ADMIN,
  ];

  static final $core.Map<$core.int, UserRoleEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static UserRoleEnum valueOf($core.int value) => _byValue[value];

  const UserRoleEnum._($core.int v, $core.String n) : super(v, n);
}

