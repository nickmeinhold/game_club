/* eslint-disable */
import { Timestamp } from './google/protobuf/timestamp';
// tslint:disable-next-line: no-implicit-dependencies
import * as Long from 'long';
// tslint:disable-next-line: no-implicit-dependencies
import { Writer, Reader } from 'protobufjs/minimal';


export interface Count {
  count: number;
}

export interface MultiQueryResult {
  name: string;
  results: Uint8Array[];
  count: number;
}

export interface MultiQueryResultArray {
  result: MultiQueryResult[];
}

export interface AchievementResult {
  achievements: Achievement[];
}

export interface Achievement {
  id: number;
  achievementIcon: AchievementIcon | undefined;
  category: AchievementCategoryEnum;
  createdAt: Date | undefined;
  description: string;
  externalId: string;
  game: Game | undefined;
  language: RegionLanguageEnum;
  lockedAchievementIcon: AchievementIcon | undefined;
  name: string;
  owners: number;
  ownersPercentage: number;
  rank: AchievementRankEnum;
  slug: string;
  tags: number[];
  updatedAt: Date | undefined;
  checksum: string;
}

export interface AchievementIconResult {
  achievementicons: AchievementIcon[];
}

export interface AchievementIcon {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface AgeRatingResult {
  ageratings: AgeRating[];
}

export interface AgeRating {
  id: number;
  category: AgeRatingCategoryEnum;
  contentDescriptions: AgeRatingContentDescription[];
  rating: AgeRatingRatingEnum;
  ratingCoverUrl: string;
  synopsis: string;
  checksum: string;
}

export interface AgeRatingContentDescriptionResult {
  ageratingcontentdescriptions: AgeRatingContentDescription[];
}

export interface AgeRatingContentDescription {
  id: number;
  category: AgeRatingRatingEnum;
  description: string;
  checksum: string;
}

export interface AlternativeNameResult {
  alternativenames: AlternativeName[];
}

export interface AlternativeName {
  id: number;
  comment: string;
  game: Game | undefined;
  name: string;
  checksum: string;
}

export interface ArtworkResult {
  artworks: Artwork[];
}

export interface Artwork {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  game: Game | undefined;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface CharacterResult {
  characters: Character[];
}

export interface Character {
  id: number;
  akas: string[];
  countryName: string;
  createdAt: Date | undefined;
  description: string;
  games: Game[];
  gender: GenderGenderEnum;
  mugShot: CharacterMugShot | undefined;
  name: string;
  people: Person[];
  slug: string;
  species: CharacterSpeciesEnum;
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface CharacterMugShotResult {
  charactermugshots: CharacterMugShot[];
}

export interface CharacterMugShot {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface CollectionResult {
  collections: Collection[];
}

export interface Collection {
  id: number;
  createdAt: Date | undefined;
  games: Game[];
  name: string;
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface CompanyResult {
  companies: Company[];
}

export interface Company {
  id: number;
  changeDate: Date | undefined;
  changeDateCategory: DateFormatChangeDateCategoryEnum;
  changedCompanyId: Company | undefined;
  country: number;
  createdAt: Date | undefined;
  description: string;
  developed: Game[];
  logo: CompanyLogo | undefined;
  name: string;
  parent: Company | undefined;
  published: Game[];
  slug: string;
  startDate: Date | undefined;
  startDateCategory: DateFormatChangeDateCategoryEnum;
  updatedAt: Date | undefined;
  url: string;
  websites: CompanyWebsite[];
  checksum: string;
}

export interface CompanyLogoResult {
  companylogos: CompanyLogo[];
}

export interface CompanyLogo {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface CompanyWebsiteResult {
  companywebsites: CompanyWebsite[];
}

export interface CompanyWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
  checksum: string;
}

export interface CoverResult {
  covers: Cover[];
}

export interface Cover {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  game: Game | undefined;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface CreditResult {
  credits: Credit[];
}

export interface Credit {
  id: number;
  category: CreditCategoryEnum;
  character: Character | undefined;
  characterCreditedName: string;
  comment: string;
  company: Company | undefined;
  country: number;
  createdAt: Date | undefined;
  creditedName: string;
  game: Game | undefined;
  person: Person | undefined;
  personTitle: Title | undefined;
  position: number;
  updatedAt: Date | undefined;
  checksum: string;
}

export interface ExternalGameResult {
  externalgames: ExternalGame[];
}

export interface ExternalGame {
  id: number;
  category: ExternalGameCategoryEnum;
  createdAt: Date | undefined;
  game: Game | undefined;
  name: string;
  uid: string;
  updatedAt: Date | undefined;
  url: string;
  year: number;
  media: ExternalGameMediaEnum;
  platform: Platform | undefined;
  countries: number[];
  checksum: string;
}

export interface FeedResult {
  feeds: Feed[];
}

export interface Feed {
  id: number;
  category: FeedCategoryEnum;
  content: string;
  createdAt: Date | undefined;
  feedLikesCount: number;
  feedVideo: GameVideo | undefined;
  games: Game[];
  meta: string;
  publishedAt: Date | undefined;
  pulse: Pulse | undefined;
  slug: string;
  title: string;
  uid: string;
  updatedAt: Date | undefined;
  url: string;
  user: number;
  checksum: string;
}

export interface FeedFollowResult {
  feedfollows: FeedFollow[];
}

export interface FeedFollow {
  id: number;
  createdAt: Date | undefined;
  feed: FeedCategoryEnum;
  publishedAt: Date | undefined;
  updatedAt: Date | undefined;
  user: User | undefined;
  checksum: string;
}

export interface FollowResult {
  follows: Follow[];
}

export interface Follow {
  id: number;
  game: Game | undefined;
  user: User | undefined;
  checksum: string;
}

export interface FranchiseResult {
  franchises: Franchise[];
}

export interface Franchise {
  id: number;
  createdAt: Date | undefined;
  games: Game[];
  name: string;
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface GameResult {
  games: Game[];
}

export interface Game {
  id: number;
  ageRatings: AgeRating[];
  aggregatedRating: number;
  aggregatedRatingCount: number;
  alternativeNames: AlternativeName[];
  artworks: Artwork[];
  bundles: Game[];
  category: GameCategoryEnum;
  collection: Collection | undefined;
  cover: Cover | undefined;
  createdAt: Date | undefined;
  dlcs: Game[];
  expansions: Game[];
  externalGames: ExternalGame[];
  firstReleaseDate: Date | undefined;
  follows: number;
  franchise: Franchise | undefined;
  franchises: Franchise[];
  gameEngines: GameEngine[];
  gameModes: GameMode[];
  genres: Genre[];
  hypes: number;
  involvedCompanies: InvolvedCompany[];
  keywords: Keyword[];
  multiplayerModes: MultiplayerMode[];
  name: string;
  parentGame: Game | undefined;
  platforms: Platform[];
  playerPerspectives: PlayerPerspective[];
  popularity: number;
  pulseCount: number;
  rating: number;
  ratingCount: number;
  releaseDates: ReleaseDate[];
  screenshots: Screenshot[];
  similarGames: Game[];
  slug: string;
  standaloneExpansions: Game[];
  status: GameStatusEnum;
  storyline: string;
  summary: string;
  tags: number[];
  themes: Theme[];
  timeToBeat: TimeToBeat | undefined;
  totalRating: number;
  totalRatingCount: number;
  updatedAt: Date | undefined;
  url: string;
  versionParent: Game | undefined;
  versionTitle: string;
  videos: GameVideo[];
  websites: Website[];
  checksum: string;
}

export interface GameEngineResult {
  gameengines: GameEngine[];
}

export interface GameEngine {
  id: number;
  companies: Company[];
  createdAt: Date | undefined;
  description: string;
  logo: GameEngineLogo | undefined;
  name: string;
  platforms: Platform[];
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface GameEngineLogoResult {
  gameenginelogos: GameEngineLogo[];
}

export interface GameEngineLogo {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface GameModeResult {
  gamemodes: GameMode[];
}

export interface GameMode {
  id: number;
  createdAt: Date | undefined;
  name: string;
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface GameVersionResult {
  gameversions: GameVersion[];
}

export interface GameVersion {
  id: number;
  createdAt: Date | undefined;
  features: GameVersionFeature[];
  game: Game | undefined;
  games: Game[];
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface GameVersionFeatureResult {
  gameversionfeatures: GameVersionFeature[];
}

export interface GameVersionFeature {
  id: number;
  category: GameVersionFeatureCategoryEnum;
  description: string;
  position: number;
  title: string;
  values: GameVersionFeatureValue[];
  checksum: string;
}

export interface GameVersionFeatureValueResult {
  gameversionfeaturevalues: GameVersionFeatureValue[];
}

export interface GameVersionFeatureValue {
  id: number;
  game: Game | undefined;
  gameFeature: GameVersionFeature | undefined;
  includedFeature: GameVersionFeatureValueIncludedFeatureEnum;
  note: string;
  checksum: string;
}

export interface GameVideoResult {
  gamevideos: GameVideo[];
}

export interface GameVideo {
  id: number;
  game: Game | undefined;
  name: string;
  videoId: string;
  checksum: string;
}

export interface GenreResult {
  genres: Genre[];
}

export interface Genre {
  id: number;
  createdAt: Date | undefined;
  name: string;
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface InvolvedCompanyResult {
  involvedcompanies: InvolvedCompany[];
}

export interface InvolvedCompany {
  id: number;
  company: Company | undefined;
  createdAt: Date | undefined;
  developer: boolean;
  game: Game | undefined;
  porting: boolean;
  publisher: boolean;
  supporting: boolean;
  updatedAt: Date | undefined;
  checksum: string;
}

export interface KeywordResult {
  keywords: Keyword[];
}

export interface Keyword {
  id: number;
  createdAt: Date | undefined;
  name: string;
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface ListResult {
  lists: List[];
}

export interface List {
  id: number;
  createdAt: Date | undefined;
  description: string;
  entriesCount: number;
  listEntries: ListEntry[];
  listTags: number[];
  listedGames: Game[];
  name: string;
  numbering: boolean;
  private: boolean;
  similarLists: List[];
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  user: User | undefined;
  checksum: string;
}

export interface ListEntryResult {
  listentries: ListEntry[];
}

export interface ListEntry {
  id: number;
  description: string;
  game: Game | undefined;
  list: List | undefined;
  platform: Platform | undefined;
  position: number;
  private: boolean;
  user: User | undefined;
  checksum: string;
}

export interface MultiplayerModeResult {
  multiplayermodes: MultiplayerMode[];
}

export interface MultiplayerMode {
  id: number;
  campaigncoop: boolean;
  dropin: boolean;
  game: Game | undefined;
  lancoop: boolean;
  offlinecoop: boolean;
  offlinecoopmax: number;
  offlinemax: number;
  onlinecoop: boolean;
  onlinecoopmax: number;
  onlinemax: number;
  platform: Platform | undefined;
  splitscreen: boolean;
  splitscreenonline: boolean;
  checksum: string;
}

export interface PageResult {
  pages: Page[];
}

export interface Page {
  id: number;
  background: PageBackground | undefined;
  battlenet: string;
  category: PageCategoryEnum;
  color: ColorColorEnum;
  company: Company | undefined;
  country: number;
  createdAt: Date | undefined;
  description: string;
  feed: Feed | undefined;
  game: Game | undefined;
  name: string;
  origin: string;
  pageFollowsCount: number;
  pageLogo: PageLogo | undefined;
  slug: string;
  subCategory: PageSubCategoryEnum;
  updatedAt: Date | undefined;
  uplay: string;
  url: string;
  user: User | undefined;
  websites: PageWebsite[];
  checksum: string;
}

export interface PageBackgroundResult {
  pagebackgrounds: PageBackground[];
}

export interface PageBackground {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface PageLogoResult {
  pagelogos: PageLogo[];
}

export interface PageLogo {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface PageWebsiteResult {
  pagewebsites: PageWebsite[];
}

export interface PageWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
  checksum: string;
}

export interface PersonResult {
  people: Person[];
}

export interface Person {
  id: number;
  bio: string;
  characters: Character[];
  country: number;
  createdAt: Date | undefined;
  creditedGames: Game[];
  description: string;
  dob: Date | undefined;
  gender: GenderGenderEnum;
  lovesCount: number;
  mugShot: PersonMugShot | undefined;
  name: string;
  nicknames: string[];
  parent: Person | undefined;
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  voiceActed: Game[];
  websites: PersonWebsite[];
  checksum: string;
}

export interface PersonMugShotResult {
  personmugshots: PersonMugShot[];
}

export interface PersonMugShot {
  id: number;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface PersonWebsiteResult {
  personwebsites: PersonWebsite[];
}

export interface PersonWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
  checksum: string;
}

export interface PlatformResult {
  platforms: Platform[];
}

export interface Platform {
  id: number;
  abbreviation: string;
  alternativeName: string;
  category: PlatformCategoryEnum;
  createdAt: Date | undefined;
  generation: number;
  name: string;
  platformLogo: PlatformLogo | undefined;
  productFamily: ProductFamily | undefined;
  slug: string;
  summary: string;
  updatedAt: Date | undefined;
  url: string;
  versions: PlatformVersion[];
  websites: PlatformWebsite[];
  checksum: string;
}

export interface PlatformLogoResult {
  platformlogos: PlatformLogo[];
}

export interface PlatformLogo {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface PlatformVersionResult {
  platformversions: PlatformVersion[];
}

export interface PlatformVersion {
  id: number;
  companies: PlatformVersionCompany[];
  connectivity: string;
  cpu: string;
  graphics: string;
  mainManufacturer: PlatformVersionCompany | undefined;
  media: string;
  memory: string;
  name: string;
  online: string;
  os: string;
  output: string;
  platformLogo: PlatformLogo | undefined;
  platformVersionReleaseDates: PlatformVersionReleaseDate[];
  resolutions: string;
  slug: string;
  sound: string;
  storage: string;
  summary: string;
  url: string;
  checksum: string;
}

export interface PlatformVersionCompanyResult {
  platformversioncompanies: PlatformVersionCompany[];
}

export interface PlatformVersionCompany {
  id: number;
  comment: string;
  company: Company | undefined;
  developer: boolean;
  manufacturer: boolean;
  checksum: string;
}

export interface PlatformVersionReleaseDateResult {
  platformversionreleasedates: PlatformVersionReleaseDate[];
}

export interface PlatformVersionReleaseDate {
  id: number;
  category: DateFormatChangeDateCategoryEnum;
  createdAt: Date | undefined;
  date: Date | undefined;
  human: string;
  m: number;
  platformVersion: PlatformVersion | undefined;
  region: RegionLanguageEnum;
  updatedAt: Date | undefined;
  y: number;
  checksum: string;
}

export interface PlatformWebsiteResult {
  platformwebsites: PlatformWebsite[];
}

export interface PlatformWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
  checksum: string;
}

export interface PlayerPerspectiveResult {
  playerperspectives: PlayerPerspective[];
}

export interface PlayerPerspective {
  id: number;
  createdAt: Date | undefined;
  name: string;
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface ProductFamilyResult {
  productfamilies: ProductFamily[];
}

export interface ProductFamily {
  id: number;
  name: string;
  slug: string;
  checksum: string;
}

export interface PulseResult {
  pulses: Pulse[];
}

export interface Pulse {
  id: number;
  author: string;
  category: number;
  createdAt: Date | undefined;
  ignored: boolean;
  image: string;
  publishedAt: Date | undefined;
  pulseImage: PulseImage | undefined;
  pulseSource: PulseSource | undefined;
  summary: string;
  tags: number[];
  title: string;
  uid: string;
  updatedAt: Date | undefined;
  videos: string[];
  website: PulseUrl | undefined;
  checksum: string;
}

export interface PulseGroupResult {
  pulsegroups: PulseGroup[];
}

export interface PulseGroup {
  id: number;
  createdAt: Date | undefined;
  game: Game | undefined;
  name: string;
  publishedAt: Date | undefined;
  pulses: Pulse[];
  tags: number[];
  updatedAt: Date | undefined;
  checksum: string;
}

export interface PulseImageResult {
  pulseimages: PulseImage[];
}

export interface PulseImage {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface PulseSourceResult {
  pulsesources: PulseSource[];
}

export interface PulseSource {
  id: number;
  game: Game | undefined;
  name: string;
  page: Page | undefined;
  checksum: string;
}

export interface PulseUrlResult {
  pulseurls: PulseUrl[];
}

export interface PulseUrl {
  id: number;
  trusted: boolean;
  url: string;
  checksum: string;
}

export interface RateResult {
  rates: Rate[];
}

export interface Rate {
  id: number;
  game: Game | undefined;
  private: boolean;
  rating: number;
  user: User | undefined;
  checksum: string;
}

export interface ReleaseDateResult {
  releasedates: ReleaseDate[];
}

export interface ReleaseDate {
  id: number;
  category: DateFormatChangeDateCategoryEnum;
  createdAt: Date | undefined;
  date: Date | undefined;
  game: Game | undefined;
  human: string;
  m: number;
  platform: Platform | undefined;
  region: RegionLanguageEnum;
  updatedAt: Date | undefined;
  y: number;
  checksum: string;
}

export interface ReviewResult {
  reviews: Review[];
}

export interface Review {
  id: number;
  category: ReviewCategoryEnum;
  conclusion: string;
  content: string;
  createdAt: Date | undefined;
  game: Game | undefined;
  introduction: string;
  likes: number;
  negativePoints: string;
  platform: Platform | undefined;
  positivePoints: string;
  slug: string;
  title: string;
  updatedAt: Date | undefined;
  url: string;
  user: User | undefined;
  userRating: Rate | undefined;
  video: ReviewVideo | undefined;
  views: number;
  checksum: string;
}

export interface ReviewVideoResult {
  reviewvideos: ReviewVideo[];
}

export interface ReviewVideo {
  id: number;
  trusted: boolean;
  url: string;
  checksum: string;
}

export interface ScreenshotResult {
  screenshots: Screenshot[];
}

export interface Screenshot {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  game: Game | undefined;
  height: number;
  imageId: string;
  url: string;
  width: number;
  checksum: string;
}

export interface SearchResult {
  searches: Search[];
}

export interface Search {
  id: number;
  alternativeName: string;
  character: Character | undefined;
  collection: Collection | undefined;
  company: Company | undefined;
  description: string;
  game: Game | undefined;
  name: string;
  person: Person | undefined;
  platform: Platform | undefined;
  popularity: number;
  publishedAt: Date | undefined;
  testDummy: TestDummy | undefined;
  theme: Theme | undefined;
  checksum: string;
}

export interface TestDummyResult {
  testdummies: TestDummy[];
}

export interface TestDummy {
  id: number;
  boolValue: boolean;
  createdAt: Date | undefined;
  enumTest: TestDummyEnumTestEnum;
  floatValue: number;
  game: Game | undefined;
  integerArray: number[];
  integerValue: number;
  name: string;
  newIntegerValue: number;
  private: boolean;
  slug: string;
  stringArray: string[];
  testDummies: TestDummy[];
  testDummy: TestDummy | undefined;
  updatedAt: Date | undefined;
  url: string;
  user: User | undefined;
  checksum: string;
}

export interface ThemeResult {
  themes: Theme[];
}

export interface Theme {
  id: number;
  createdAt: Date | undefined;
  name: string;
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface TimeToBeatResult {
  timetobeats: TimeToBeat[];
}

export interface TimeToBeat {
  id: number;
  completely: number;
  game: Game | undefined;
  hastly: number;
  normally: number;
  checksum: string;
}

export interface TitleResult {
  titles: Title[];
}

export interface Title {
  id: number;
  createdAt: Date | undefined;
  description: string;
  games: Game[];
  name: string;
  slug: string;
  updatedAt: Date | undefined;
  url: string;
  checksum: string;
}

export interface UserResult {
  users: User[];
}

export interface User {
  id: number;
  battlenet: string;
  color: ColorColorEnum;
  createdAt: Date | undefined;
  discord: string;
  facebook: string;
  googlePlus: string;
  instagram: string;
  linkedin: string;
  origin: string;
  pinterest: string;
  presentation: string;
  reddit: string;
  role: UserRoleEnum;
  slug: string;
  soundcloud: string;
  steam: string;
  twitch: string;
  twitter: string;
  updatedAt: Date | undefined;
  uplay: string;
  url: string;
  username: string;
  youtube: string;
  checksum: string;
}

export interface WebsiteResult {
  websites: Website[];
}

export interface Website {
  id: number;
  category: WebsiteCategoryEnum;
  game: Game | undefined;
  trusted: boolean;
  url: string;
  checksum: string;
}

const baseCount: object = {
  count: 0,
};

const baseMultiQueryResult: object = {
  name: "",
  count: 0,
};

const baseMultiQueryResultArray: object = {
};

const baseAchievementResult: object = {
};

const baseAchievement: object = {
  id: 0,
  category: 0,
  description: "",
  externalId: "",
  language: 0,
  name: "",
  owners: 0,
  ownersPercentage: 0,
  rank: 0,
  slug: "",
  tags: 0,
  checksum: "",
};

const baseAchievementIconResult: object = {
};

const baseAchievementIcon: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const baseAgeRatingResult: object = {
};

const baseAgeRating: object = {
  id: 0,
  category: 0,
  rating: 0,
  ratingCoverUrl: "",
  synopsis: "",
  checksum: "",
};

const baseAgeRatingContentDescriptionResult: object = {
};

const baseAgeRatingContentDescription: object = {
  id: 0,
  category: 0,
  description: "",
  checksum: "",
};

const baseAlternativeNameResult: object = {
};

const baseAlternativeName: object = {
  id: 0,
  comment: "",
  name: "",
  checksum: "",
};

const baseArtworkResult: object = {
};

const baseArtwork: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const baseCharacterResult: object = {
};

const baseCharacter: object = {
  id: 0,
  akas: "",
  countryName: "",
  description: "",
  gender: 0,
  name: "",
  slug: "",
  species: 0,
  url: "",
  checksum: "",
};

const baseCharacterMugShotResult: object = {
};

const baseCharacterMugShot: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const baseCollectionResult: object = {
};

const baseCollection: object = {
  id: 0,
  name: "",
  slug: "",
  url: "",
  checksum: "",
};

const baseCompanyResult: object = {
};

const baseCompany: object = {
  id: 0,
  changeDateCategory: 0,
  country: 0,
  description: "",
  name: "",
  slug: "",
  startDateCategory: 0,
  url: "",
  checksum: "",
};

const baseCompanyLogoResult: object = {
};

const baseCompanyLogo: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const baseCompanyWebsiteResult: object = {
};

const baseCompanyWebsite: object = {
  id: 0,
  category: 0,
  trusted: false,
  url: "",
  checksum: "",
};

const baseCoverResult: object = {
};

const baseCover: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const baseCreditResult: object = {
};

const baseCredit: object = {
  id: 0,
  category: 0,
  characterCreditedName: "",
  comment: "",
  country: 0,
  creditedName: "",
  position: 0,
  checksum: "",
};

const baseExternalGameResult: object = {
};

const baseExternalGame: object = {
  id: 0,
  category: 0,
  name: "",
  uid: "",
  url: "",
  year: 0,
  media: 0,
  countries: 0,
  checksum: "",
};

const baseFeedResult: object = {
};

const baseFeed: object = {
  id: 0,
  category: 0,
  content: "",
  feedLikesCount: 0,
  meta: "",
  slug: "",
  title: "",
  uid: "",
  url: "",
  user: 0,
  checksum: "",
};

const baseFeedFollowResult: object = {
};

const baseFeedFollow: object = {
  id: 0,
  feed: 0,
  checksum: "",
};

const baseFollowResult: object = {
};

const baseFollow: object = {
  id: 0,
  checksum: "",
};

const baseFranchiseResult: object = {
};

const baseFranchise: object = {
  id: 0,
  name: "",
  slug: "",
  url: "",
  checksum: "",
};

const baseGameResult: object = {
};

const baseGame: object = {
  id: 0,
  aggregatedRating: 0,
  aggregatedRatingCount: 0,
  category: 0,
  follows: 0,
  hypes: 0,
  name: "",
  popularity: 0,
  pulseCount: 0,
  rating: 0,
  ratingCount: 0,
  slug: "",
  status: 0,
  storyline: "",
  summary: "",
  tags: 0,
  totalRating: 0,
  totalRatingCount: 0,
  url: "",
  versionTitle: "",
  checksum: "",
};

const baseGameEngineResult: object = {
};

const baseGameEngine: object = {
  id: 0,
  description: "",
  name: "",
  slug: "",
  url: "",
  checksum: "",
};

const baseGameEngineLogoResult: object = {
};

const baseGameEngineLogo: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const baseGameModeResult: object = {
};

const baseGameMode: object = {
  id: 0,
  name: "",
  slug: "",
  url: "",
  checksum: "",
};

const baseGameVersionResult: object = {
};

const baseGameVersion: object = {
  id: 0,
  url: "",
  checksum: "",
};

const baseGameVersionFeatureResult: object = {
};

const baseGameVersionFeature: object = {
  id: 0,
  category: 0,
  description: "",
  position: 0,
  title: "",
  checksum: "",
};

const baseGameVersionFeatureValueResult: object = {
};

const baseGameVersionFeatureValue: object = {
  id: 0,
  includedFeature: 0,
  note: "",
  checksum: "",
};

const baseGameVideoResult: object = {
};

const baseGameVideo: object = {
  id: 0,
  name: "",
  videoId: "",
  checksum: "",
};

const baseGenreResult: object = {
};

const baseGenre: object = {
  id: 0,
  name: "",
  slug: "",
  url: "",
  checksum: "",
};

const baseInvolvedCompanyResult: object = {
};

const baseInvolvedCompany: object = {
  id: 0,
  developer: false,
  porting: false,
  publisher: false,
  supporting: false,
  checksum: "",
};

const baseKeywordResult: object = {
};

const baseKeyword: object = {
  id: 0,
  name: "",
  slug: "",
  url: "",
  checksum: "",
};

const baseListResult: object = {
};

const baseList: object = {
  id: 0,
  description: "",
  entriesCount: 0,
  listTags: 0,
  name: "",
  numbering: false,
  private: false,
  slug: "",
  url: "",
  checksum: "",
};

const baseListEntryResult: object = {
};

const baseListEntry: object = {
  id: 0,
  description: "",
  position: 0,
  private: false,
  checksum: "",
};

const baseMultiplayerModeResult: object = {
};

const baseMultiplayerMode: object = {
  id: 0,
  campaigncoop: false,
  dropin: false,
  lancoop: false,
  offlinecoop: false,
  offlinecoopmax: 0,
  offlinemax: 0,
  onlinecoop: false,
  onlinecoopmax: 0,
  onlinemax: 0,
  splitscreen: false,
  splitscreenonline: false,
  checksum: "",
};

const basePageResult: object = {
};

const basePage: object = {
  id: 0,
  battlenet: "",
  category: 0,
  color: 0,
  country: 0,
  description: "",
  name: "",
  origin: "",
  pageFollowsCount: 0,
  slug: "",
  subCategory: 0,
  uplay: "",
  url: "",
  checksum: "",
};

const basePageBackgroundResult: object = {
};

const basePageBackground: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const basePageLogoResult: object = {
};

const basePageLogo: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const basePageWebsiteResult: object = {
};

const basePageWebsite: object = {
  id: 0,
  category: 0,
  trusted: false,
  url: "",
  checksum: "",
};

const basePersonResult: object = {
};

const basePerson: object = {
  id: 0,
  bio: "",
  country: 0,
  description: "",
  gender: 0,
  lovesCount: 0,
  name: "",
  nicknames: "",
  slug: "",
  url: "",
  checksum: "",
};

const basePersonMugShotResult: object = {
};

const basePersonMugShot: object = {
  id: 0,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const basePersonWebsiteResult: object = {
};

const basePersonWebsite: object = {
  id: 0,
  category: 0,
  trusted: false,
  url: "",
  checksum: "",
};

const basePlatformResult: object = {
};

const basePlatform: object = {
  id: 0,
  abbreviation: "",
  alternativeName: "",
  category: 0,
  generation: 0,
  name: "",
  slug: "",
  summary: "",
  url: "",
  checksum: "",
};

const basePlatformLogoResult: object = {
};

const basePlatformLogo: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const basePlatformVersionResult: object = {
};

const basePlatformVersion: object = {
  id: 0,
  connectivity: "",
  cpu: "",
  graphics: "",
  media: "",
  memory: "",
  name: "",
  online: "",
  os: "",
  output: "",
  resolutions: "",
  slug: "",
  sound: "",
  storage: "",
  summary: "",
  url: "",
  checksum: "",
};

const basePlatformVersionCompanyResult: object = {
};

const basePlatformVersionCompany: object = {
  id: 0,
  comment: "",
  developer: false,
  manufacturer: false,
  checksum: "",
};

const basePlatformVersionReleaseDateResult: object = {
};

const basePlatformVersionReleaseDate: object = {
  id: 0,
  category: 0,
  human: "",
  m: 0,
  region: 0,
  y: 0,
  checksum: "",
};

const basePlatformWebsiteResult: object = {
};

const basePlatformWebsite: object = {
  id: 0,
  category: 0,
  trusted: false,
  url: "",
  checksum: "",
};

const basePlayerPerspectiveResult: object = {
};

const basePlayerPerspective: object = {
  id: 0,
  name: "",
  slug: "",
  url: "",
  checksum: "",
};

const baseProductFamilyResult: object = {
};

const baseProductFamily: object = {
  id: 0,
  name: "",
  slug: "",
  checksum: "",
};

const basePulseResult: object = {
};

const basePulse: object = {
  id: 0,
  author: "",
  category: 0,
  ignored: false,
  image: "",
  summary: "",
  tags: 0,
  title: "",
  uid: "",
  videos: "",
  checksum: "",
};

const basePulseGroupResult: object = {
};

const basePulseGroup: object = {
  id: 0,
  name: "",
  tags: 0,
  checksum: "",
};

const basePulseImageResult: object = {
};

const basePulseImage: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const basePulseSourceResult: object = {
};

const basePulseSource: object = {
  id: 0,
  name: "",
  checksum: "",
};

const basePulseUrlResult: object = {
};

const basePulseUrl: object = {
  id: 0,
  trusted: false,
  url: "",
  checksum: "",
};

const baseRateResult: object = {
};

const baseRate: object = {
  id: 0,
  private: false,
  rating: 0,
  checksum: "",
};

const baseReleaseDateResult: object = {
};

const baseReleaseDate: object = {
  id: 0,
  category: 0,
  human: "",
  m: 0,
  region: 0,
  y: 0,
  checksum: "",
};

const baseReviewResult: object = {
};

const baseReview: object = {
  id: 0,
  category: 0,
  conclusion: "",
  content: "",
  introduction: "",
  likes: 0,
  negativePoints: "",
  positivePoints: "",
  slug: "",
  title: "",
  url: "",
  views: 0,
  checksum: "",
};

const baseReviewVideoResult: object = {
};

const baseReviewVideo: object = {
  id: 0,
  trusted: false,
  url: "",
  checksum: "",
};

const baseScreenshotResult: object = {
};

const baseScreenshot: object = {
  id: 0,
  alphaChannel: false,
  animated: false,
  height: 0,
  imageId: "",
  url: "",
  width: 0,
  checksum: "",
};

const baseSearchResult: object = {
};

const baseSearch: object = {
  id: 0,
  alternativeName: "",
  description: "",
  name: "",
  popularity: 0,
  checksum: "",
};

const baseTestDummyResult: object = {
};

const baseTestDummy: object = {
  id: 0,
  boolValue: false,
  enumTest: 0,
  floatValue: 0,
  integerArray: 0,
  integerValue: 0,
  name: "",
  newIntegerValue: 0,
  private: false,
  slug: "",
  stringArray: "",
  url: "",
  checksum: "",
};

const baseThemeResult: object = {
};

const baseTheme: object = {
  id: 0,
  name: "",
  slug: "",
  url: "",
  checksum: "",
};

const baseTimeToBeatResult: object = {
};

const baseTimeToBeat: object = {
  id: 0,
  completely: 0,
  hastly: 0,
  normally: 0,
  checksum: "",
};

const baseTitleResult: object = {
};

const baseTitle: object = {
  id: 0,
  description: "",
  name: "",
  slug: "",
  url: "",
  checksum: "",
};

const baseUserResult: object = {
};

const baseUser: object = {
  id: 0,
  battlenet: "",
  color: 0,
  discord: "",
  facebook: "",
  googlePlus: "",
  instagram: "",
  linkedin: "",
  origin: "",
  pinterest: "",
  presentation: "",
  reddit: "",
  role: 0,
  slug: "",
  soundcloud: "",
  steam: "",
  twitch: "",
  twitter: "",
  uplay: "",
  url: "",
  username: "",
  youtube: "",
  checksum: "",
};

const baseWebsiteResult: object = {
};

const baseWebsite: object = {
  id: 0,
  category: 0,
  trusted: false,
  url: "",
  checksum: "",
};

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const AchievementCategoryEnum = {
  ACHIEVEMENT_CATEGORY_NULL: 0 as const,
  PLAYSTATION: 1 as const,
  XBOX: 2 as const,
  STEAM: 3 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): AchievementCategoryEnum {
    switch (object) {
      case 0:
      case "ACHIEVEMENT_CATEGORY_NULL":
        return AchievementCategoryEnum.ACHIEVEMENT_CATEGORY_NULL;
      case 1:
      case "PLAYSTATION":
        return AchievementCategoryEnum.PLAYSTATION;
      case 2:
      case "XBOX":
        return AchievementCategoryEnum.XBOX;
      case 3:
      case "STEAM":
        return AchievementCategoryEnum.STEAM;
      case -1:
      case "UNRECOGNIZED":
      default:
        return AchievementCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: AchievementCategoryEnum): string {
    switch (object) {
      case AchievementCategoryEnum.ACHIEVEMENT_CATEGORY_NULL:
        return "ACHIEVEMENT_CATEGORY_NULL";
      case AchievementCategoryEnum.PLAYSTATION:
        return "PLAYSTATION";
      case AchievementCategoryEnum.XBOX:
        return "XBOX";
      case AchievementCategoryEnum.STEAM:
        return "STEAM";
      default:
        return "UNKNOWN";
    }
  },
}

export type AchievementCategoryEnum = 0 | 1 | 2 | 3 | -1;

export const RegionLanguageEnum = {
  REGION_LANGUAGE_NULL: 0 as const,
  EUROPE: 1 as const,
  NORTH_AMERICA: 2 as const,
  AUSTRALIA: 3 as const,
  NEW_ZELAND: 4 as const,
  JAPAN: 5 as const,
  CHINA: 6 as const,
  ASIA: 7 as const,
  WORLDWIDE: 8 as const,
  HONG_KONG: 9 as const,
  SOUTH_KOREA: 10 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): RegionLanguageEnum {
    switch (object) {
      case 0:
      case "REGION_LANGUAGE_NULL":
        return RegionLanguageEnum.REGION_LANGUAGE_NULL;
      case 1:
      case "EUROPE":
        return RegionLanguageEnum.EUROPE;
      case 2:
      case "NORTH_AMERICA":
        return RegionLanguageEnum.NORTH_AMERICA;
      case 3:
      case "AUSTRALIA":
        return RegionLanguageEnum.AUSTRALIA;
      case 4:
      case "NEW_ZELAND":
        return RegionLanguageEnum.NEW_ZELAND;
      case 5:
      case "JAPAN":
        return RegionLanguageEnum.JAPAN;
      case 6:
      case "CHINA":
        return RegionLanguageEnum.CHINA;
      case 7:
      case "ASIA":
        return RegionLanguageEnum.ASIA;
      case 8:
      case "WORLDWIDE":
        return RegionLanguageEnum.WORLDWIDE;
      case 9:
      case "HONG_KONG":
        return RegionLanguageEnum.HONG_KONG;
      case 10:
      case "SOUTH_KOREA":
        return RegionLanguageEnum.SOUTH_KOREA;
      case -1:
      case "UNRECOGNIZED":
      default:
        return RegionLanguageEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: RegionLanguageEnum): string {
    switch (object) {
      case RegionLanguageEnum.REGION_LANGUAGE_NULL:
        return "REGION_LANGUAGE_NULL";
      case RegionLanguageEnum.EUROPE:
        return "EUROPE";
      case RegionLanguageEnum.NORTH_AMERICA:
        return "NORTH_AMERICA";
      case RegionLanguageEnum.AUSTRALIA:
        return "AUSTRALIA";
      case RegionLanguageEnum.NEW_ZELAND:
        return "NEW_ZELAND";
      case RegionLanguageEnum.JAPAN:
        return "JAPAN";
      case RegionLanguageEnum.CHINA:
        return "CHINA";
      case RegionLanguageEnum.ASIA:
        return "ASIA";
      case RegionLanguageEnum.WORLDWIDE:
        return "WORLDWIDE";
      case RegionLanguageEnum.HONG_KONG:
        return "HONG_KONG";
      case RegionLanguageEnum.SOUTH_KOREA:
        return "SOUTH_KOREA";
      default:
        return "UNKNOWN";
    }
  },
}

export type RegionLanguageEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | -1;

export const AchievementRankEnum = {
  ACHIEVEMENT_RANK_NULL: 0 as const,
  BRONZE: 1 as const,
  SILVER: 2 as const,
  GOLD: 3 as const,
  PLATINUM: 4 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): AchievementRankEnum {
    switch (object) {
      case 0:
      case "ACHIEVEMENT_RANK_NULL":
        return AchievementRankEnum.ACHIEVEMENT_RANK_NULL;
      case 1:
      case "BRONZE":
        return AchievementRankEnum.BRONZE;
      case 2:
      case "SILVER":
        return AchievementRankEnum.SILVER;
      case 3:
      case "GOLD":
        return AchievementRankEnum.GOLD;
      case 4:
      case "PLATINUM":
        return AchievementRankEnum.PLATINUM;
      case -1:
      case "UNRECOGNIZED":
      default:
        return AchievementRankEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: AchievementRankEnum): string {
    switch (object) {
      case AchievementRankEnum.ACHIEVEMENT_RANK_NULL:
        return "ACHIEVEMENT_RANK_NULL";
      case AchievementRankEnum.BRONZE:
        return "BRONZE";
      case AchievementRankEnum.SILVER:
        return "SILVER";
      case AchievementRankEnum.GOLD:
        return "GOLD";
      case AchievementRankEnum.PLATINUM:
        return "PLATINUM";
      default:
        return "UNKNOWN";
    }
  },
}

export type AchievementRankEnum = 0 | 1 | 2 | 3 | 4 | -1;

export const AgeRatingCategoryEnum = {
  AGERATING_CATEGORY_NULL: 0 as const,
  ESRB: 1 as const,
  PEGI: 2 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): AgeRatingCategoryEnum {
    switch (object) {
      case 0:
      case "AGERATING_CATEGORY_NULL":
        return AgeRatingCategoryEnum.AGERATING_CATEGORY_NULL;
      case 1:
      case "ESRB":
        return AgeRatingCategoryEnum.ESRB;
      case 2:
      case "PEGI":
        return AgeRatingCategoryEnum.PEGI;
      case -1:
      case "UNRECOGNIZED":
      default:
        return AgeRatingCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: AgeRatingCategoryEnum): string {
    switch (object) {
      case AgeRatingCategoryEnum.AGERATING_CATEGORY_NULL:
        return "AGERATING_CATEGORY_NULL";
      case AgeRatingCategoryEnum.ESRB:
        return "ESRB";
      case AgeRatingCategoryEnum.PEGI:
        return "PEGI";
      default:
        return "UNKNOWN";
    }
  },
}

export type AgeRatingCategoryEnum = 0 | 1 | 2 | -1;

export const AgeRatingRatingEnum = {
  AGERATING_RATING_NULL: 0 as const,
  THREE: 1 as const,
  SEVEN: 2 as const,
  TWELVE: 3 as const,
  SIXTEEN: 4 as const,
  EIGHTEEN: 5 as const,
  RP: 6 as const,
  EC: 7 as const,
  E: 8 as const,
  E10: 9 as const,
  T: 10 as const,
  M: 11 as const,
  AO: 12 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): AgeRatingRatingEnum {
    switch (object) {
      case 0:
      case "AGERATING_RATING_NULL":
        return AgeRatingRatingEnum.AGERATING_RATING_NULL;
      case 1:
      case "THREE":
        return AgeRatingRatingEnum.THREE;
      case 2:
      case "SEVEN":
        return AgeRatingRatingEnum.SEVEN;
      case 3:
      case "TWELVE":
        return AgeRatingRatingEnum.TWELVE;
      case 4:
      case "SIXTEEN":
        return AgeRatingRatingEnum.SIXTEEN;
      case 5:
      case "EIGHTEEN":
        return AgeRatingRatingEnum.EIGHTEEN;
      case 6:
      case "RP":
        return AgeRatingRatingEnum.RP;
      case 7:
      case "EC":
        return AgeRatingRatingEnum.EC;
      case 8:
      case "E":
        return AgeRatingRatingEnum.E;
      case 9:
      case "E10":
        return AgeRatingRatingEnum.E10;
      case 10:
      case "T":
        return AgeRatingRatingEnum.T;
      case 11:
      case "M":
        return AgeRatingRatingEnum.M;
      case 12:
      case "AO":
        return AgeRatingRatingEnum.AO;
      case -1:
      case "UNRECOGNIZED":
      default:
        return AgeRatingRatingEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: AgeRatingRatingEnum): string {
    switch (object) {
      case AgeRatingRatingEnum.AGERATING_RATING_NULL:
        return "AGERATING_RATING_NULL";
      case AgeRatingRatingEnum.THREE:
        return "THREE";
      case AgeRatingRatingEnum.SEVEN:
        return "SEVEN";
      case AgeRatingRatingEnum.TWELVE:
        return "TWELVE";
      case AgeRatingRatingEnum.SIXTEEN:
        return "SIXTEEN";
      case AgeRatingRatingEnum.EIGHTEEN:
        return "EIGHTEEN";
      case AgeRatingRatingEnum.RP:
        return "RP";
      case AgeRatingRatingEnum.EC:
        return "EC";
      case AgeRatingRatingEnum.E:
        return "E";
      case AgeRatingRatingEnum.E10:
        return "E10";
      case AgeRatingRatingEnum.T:
        return "T";
      case AgeRatingRatingEnum.M:
        return "M";
      case AgeRatingRatingEnum.AO:
        return "AO";
      default:
        return "UNKNOWN";
    }
  },
}

export type AgeRatingRatingEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | -1;

export const GenderGenderEnum = {
  GENDER_GENDER_NULL: 0 as const,
  MALE: 1 as const,
  FEMALE: 2 as const,
  OTHER: 3 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): GenderGenderEnum {
    switch (object) {
      case 0:
      case "GENDER_GENDER_NULL":
        return GenderGenderEnum.GENDER_GENDER_NULL;
      case 1:
      case "MALE":
        return GenderGenderEnum.MALE;
      case 2:
      case "FEMALE":
        return GenderGenderEnum.FEMALE;
      case 3:
      case "OTHER":
        return GenderGenderEnum.OTHER;
      case -1:
      case "UNRECOGNIZED":
      default:
        return GenderGenderEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: GenderGenderEnum): string {
    switch (object) {
      case GenderGenderEnum.GENDER_GENDER_NULL:
        return "GENDER_GENDER_NULL";
      case GenderGenderEnum.MALE:
        return "MALE";
      case GenderGenderEnum.FEMALE:
        return "FEMALE";
      case GenderGenderEnum.OTHER:
        return "OTHER";
      default:
        return "UNKNOWN";
    }
  },
}

export type GenderGenderEnum = 0 | 1 | 2 | 3 | -1;

export const CharacterSpeciesEnum = {
  CHARACTER_SPECIES_NULL: 0 as const,
  HUMAN: 1 as const,
  ALIEN: 2 as const,
  ANIMAL: 3 as const,
  ANDROID: 4 as const,
  UNKNOWN: 5 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): CharacterSpeciesEnum {
    switch (object) {
      case 0:
      case "CHARACTER_SPECIES_NULL":
        return CharacterSpeciesEnum.CHARACTER_SPECIES_NULL;
      case 1:
      case "HUMAN":
        return CharacterSpeciesEnum.HUMAN;
      case 2:
      case "ALIEN":
        return CharacterSpeciesEnum.ALIEN;
      case 3:
      case "ANIMAL":
        return CharacterSpeciesEnum.ANIMAL;
      case 4:
      case "ANDROID":
        return CharacterSpeciesEnum.ANDROID;
      case 5:
      case "UNKNOWN":
        return CharacterSpeciesEnum.UNKNOWN;
      case -1:
      case "UNRECOGNIZED":
      default:
        return CharacterSpeciesEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: CharacterSpeciesEnum): string {
    switch (object) {
      case CharacterSpeciesEnum.CHARACTER_SPECIES_NULL:
        return "CHARACTER_SPECIES_NULL";
      case CharacterSpeciesEnum.HUMAN:
        return "HUMAN";
      case CharacterSpeciesEnum.ALIEN:
        return "ALIEN";
      case CharacterSpeciesEnum.ANIMAL:
        return "ANIMAL";
      case CharacterSpeciesEnum.ANDROID:
        return "ANDROID";
      case CharacterSpeciesEnum.UNKNOWN:
        return "UNKNOWN";
      default:
        return "UNKNOWN";
    }
  },
}

export type CharacterSpeciesEnum = 0 | 1 | 2 | 3 | 4 | 5 | -1;

export const DateFormatChangeDateCategoryEnum = {
  YYYYMMMMDD: 0 as const,
  YYYYMMMM: 1 as const,
  YYYY: 2 as const,
  YYYYQ1: 3 as const,
  YYYYQ2: 4 as const,
  YYYYQ3: 5 as const,
  YYYYQ4: 6 as const,
  TBD: 7 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): DateFormatChangeDateCategoryEnum {
    switch (object) {
      case 0:
      case "YYYYMMMMDD":
        return DateFormatChangeDateCategoryEnum.YYYYMMMMDD;
      case 1:
      case "YYYYMMMM":
        return DateFormatChangeDateCategoryEnum.YYYYMMMM;
      case 2:
      case "YYYY":
        return DateFormatChangeDateCategoryEnum.YYYY;
      case 3:
      case "YYYYQ1":
        return DateFormatChangeDateCategoryEnum.YYYYQ1;
      case 4:
      case "YYYYQ2":
        return DateFormatChangeDateCategoryEnum.YYYYQ2;
      case 5:
      case "YYYYQ3":
        return DateFormatChangeDateCategoryEnum.YYYYQ3;
      case 6:
      case "YYYYQ4":
        return DateFormatChangeDateCategoryEnum.YYYYQ4;
      case 7:
      case "TBD":
        return DateFormatChangeDateCategoryEnum.TBD;
      case -1:
      case "UNRECOGNIZED":
      default:
        return DateFormatChangeDateCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: DateFormatChangeDateCategoryEnum): string {
    switch (object) {
      case DateFormatChangeDateCategoryEnum.YYYYMMMMDD:
        return "YYYYMMMMDD";
      case DateFormatChangeDateCategoryEnum.YYYYMMMM:
        return "YYYYMMMM";
      case DateFormatChangeDateCategoryEnum.YYYY:
        return "YYYY";
      case DateFormatChangeDateCategoryEnum.YYYYQ1:
        return "YYYYQ1";
      case DateFormatChangeDateCategoryEnum.YYYYQ2:
        return "YYYYQ2";
      case DateFormatChangeDateCategoryEnum.YYYYQ3:
        return "YYYYQ3";
      case DateFormatChangeDateCategoryEnum.YYYYQ4:
        return "YYYYQ4";
      case DateFormatChangeDateCategoryEnum.TBD:
        return "TBD";
      default:
        return "UNKNOWN";
    }
  },
}

export type DateFormatChangeDateCategoryEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | -1;

export const WebsiteCategoryEnum = {
  WEBSITE_CATEGORY_NULL: 0 as const,
  WEBSITE_OFFICIAL: 1 as const,
  WEBSITE_WIKIA: 2 as const,
  WEBSITE_WIKIPEDIA: 3 as const,
  WEBSITE_FACEBOOK: 4 as const,
  WEBSITE_TWITTER: 5 as const,
  WEBSITE_TWITCH: 6 as const,
  WEBSITE_INSTAGRAM: 8 as const,
  WEBSITE_YOUTUBE: 9 as const,
  WEBSITE_IPHONE: 10 as const,
  WEBSITE_IPAD: 11 as const,
  WEBSITE_ANDROID: 12 as const,
  WEBSITE_STEAM: 13 as const,
  WEBSITE_REDDIT: 14 as const,
  WEBSITE_ITCH: 15 as const,
  WEBSITE_EPICGAMES: 16 as const,
  WEBSITE_GOG: 17 as const,
  WEBSITE_DISCORD: 18 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): WebsiteCategoryEnum {
    switch (object) {
      case 0:
      case "WEBSITE_CATEGORY_NULL":
        return WebsiteCategoryEnum.WEBSITE_CATEGORY_NULL;
      case 1:
      case "WEBSITE_OFFICIAL":
        return WebsiteCategoryEnum.WEBSITE_OFFICIAL;
      case 2:
      case "WEBSITE_WIKIA":
        return WebsiteCategoryEnum.WEBSITE_WIKIA;
      case 3:
      case "WEBSITE_WIKIPEDIA":
        return WebsiteCategoryEnum.WEBSITE_WIKIPEDIA;
      case 4:
      case "WEBSITE_FACEBOOK":
        return WebsiteCategoryEnum.WEBSITE_FACEBOOK;
      case 5:
      case "WEBSITE_TWITTER":
        return WebsiteCategoryEnum.WEBSITE_TWITTER;
      case 6:
      case "WEBSITE_TWITCH":
        return WebsiteCategoryEnum.WEBSITE_TWITCH;
      case 8:
      case "WEBSITE_INSTAGRAM":
        return WebsiteCategoryEnum.WEBSITE_INSTAGRAM;
      case 9:
      case "WEBSITE_YOUTUBE":
        return WebsiteCategoryEnum.WEBSITE_YOUTUBE;
      case 10:
      case "WEBSITE_IPHONE":
        return WebsiteCategoryEnum.WEBSITE_IPHONE;
      case 11:
      case "WEBSITE_IPAD":
        return WebsiteCategoryEnum.WEBSITE_IPAD;
      case 12:
      case "WEBSITE_ANDROID":
        return WebsiteCategoryEnum.WEBSITE_ANDROID;
      case 13:
      case "WEBSITE_STEAM":
        return WebsiteCategoryEnum.WEBSITE_STEAM;
      case 14:
      case "WEBSITE_REDDIT":
        return WebsiteCategoryEnum.WEBSITE_REDDIT;
      case 15:
      case "WEBSITE_ITCH":
        return WebsiteCategoryEnum.WEBSITE_ITCH;
      case 16:
      case "WEBSITE_EPICGAMES":
        return WebsiteCategoryEnum.WEBSITE_EPICGAMES;
      case 17:
      case "WEBSITE_GOG":
        return WebsiteCategoryEnum.WEBSITE_GOG;
      case 18:
      case "WEBSITE_DISCORD":
        return WebsiteCategoryEnum.WEBSITE_DISCORD;
      case -1:
      case "UNRECOGNIZED":
      default:
        return WebsiteCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: WebsiteCategoryEnum): string {
    switch (object) {
      case WebsiteCategoryEnum.WEBSITE_CATEGORY_NULL:
        return "WEBSITE_CATEGORY_NULL";
      case WebsiteCategoryEnum.WEBSITE_OFFICIAL:
        return "WEBSITE_OFFICIAL";
      case WebsiteCategoryEnum.WEBSITE_WIKIA:
        return "WEBSITE_WIKIA";
      case WebsiteCategoryEnum.WEBSITE_WIKIPEDIA:
        return "WEBSITE_WIKIPEDIA";
      case WebsiteCategoryEnum.WEBSITE_FACEBOOK:
        return "WEBSITE_FACEBOOK";
      case WebsiteCategoryEnum.WEBSITE_TWITTER:
        return "WEBSITE_TWITTER";
      case WebsiteCategoryEnum.WEBSITE_TWITCH:
        return "WEBSITE_TWITCH";
      case WebsiteCategoryEnum.WEBSITE_INSTAGRAM:
        return "WEBSITE_INSTAGRAM";
      case WebsiteCategoryEnum.WEBSITE_YOUTUBE:
        return "WEBSITE_YOUTUBE";
      case WebsiteCategoryEnum.WEBSITE_IPHONE:
        return "WEBSITE_IPHONE";
      case WebsiteCategoryEnum.WEBSITE_IPAD:
        return "WEBSITE_IPAD";
      case WebsiteCategoryEnum.WEBSITE_ANDROID:
        return "WEBSITE_ANDROID";
      case WebsiteCategoryEnum.WEBSITE_STEAM:
        return "WEBSITE_STEAM";
      case WebsiteCategoryEnum.WEBSITE_REDDIT:
        return "WEBSITE_REDDIT";
      case WebsiteCategoryEnum.WEBSITE_ITCH:
        return "WEBSITE_ITCH";
      case WebsiteCategoryEnum.WEBSITE_EPICGAMES:
        return "WEBSITE_EPICGAMES";
      case WebsiteCategoryEnum.WEBSITE_GOG:
        return "WEBSITE_GOG";
      case WebsiteCategoryEnum.WEBSITE_DISCORD:
        return "WEBSITE_DISCORD";
      default:
        return "UNKNOWN";
    }
  },
}

export type WebsiteCategoryEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | -1;

export const CreditCategoryEnum = {
  CREDIT_CATEGORY_NULL: 0 as const,
  VOICE_ACTOR: 1 as const,
  LANGUAGE: 2 as const,
  COMPANY_CREDIT: 3 as const,
  EMPLOYEE: 4 as const,
  MISC: 5 as const,
  SUPPORT_COMPANY: 6 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): CreditCategoryEnum {
    switch (object) {
      case 0:
      case "CREDIT_CATEGORY_NULL":
        return CreditCategoryEnum.CREDIT_CATEGORY_NULL;
      case 1:
      case "VOICE_ACTOR":
        return CreditCategoryEnum.VOICE_ACTOR;
      case 2:
      case "LANGUAGE":
        return CreditCategoryEnum.LANGUAGE;
      case 3:
      case "COMPANY_CREDIT":
        return CreditCategoryEnum.COMPANY_CREDIT;
      case 4:
      case "EMPLOYEE":
        return CreditCategoryEnum.EMPLOYEE;
      case 5:
      case "MISC":
        return CreditCategoryEnum.MISC;
      case 6:
      case "SUPPORT_COMPANY":
        return CreditCategoryEnum.SUPPORT_COMPANY;
      case -1:
      case "UNRECOGNIZED":
      default:
        return CreditCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: CreditCategoryEnum): string {
    switch (object) {
      case CreditCategoryEnum.CREDIT_CATEGORY_NULL:
        return "CREDIT_CATEGORY_NULL";
      case CreditCategoryEnum.VOICE_ACTOR:
        return "VOICE_ACTOR";
      case CreditCategoryEnum.LANGUAGE:
        return "LANGUAGE";
      case CreditCategoryEnum.COMPANY_CREDIT:
        return "COMPANY_CREDIT";
      case CreditCategoryEnum.EMPLOYEE:
        return "EMPLOYEE";
      case CreditCategoryEnum.MISC:
        return "MISC";
      case CreditCategoryEnum.SUPPORT_COMPANY:
        return "SUPPORT_COMPANY";
      default:
        return "UNKNOWN";
    }
  },
}

export type CreditCategoryEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | -1;

export const ExternalGameCategoryEnum = {
  EXTERNALGAME_CATEGORY_NULL: 0 as const,
  EXTERNALGAME_STEAM: 1 as const,
  EXTERNALGAME_GOG: 5 as const,
  EXTERNALGAME_YOUTUBE: 10 as const,
  EXTERNALGAME_MICROSOFT: 11 as const,
  EXTERNALGAME_APPLE: 13 as const,
  EXTERNALGAME_TWITCH: 14 as const,
  EXTERNALGAME_ANDROID: 15 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): ExternalGameCategoryEnum {
    switch (object) {
      case 0:
      case "EXTERNALGAME_CATEGORY_NULL":
        return ExternalGameCategoryEnum.EXTERNALGAME_CATEGORY_NULL;
      case 1:
      case "EXTERNALGAME_STEAM":
        return ExternalGameCategoryEnum.EXTERNALGAME_STEAM;
      case 5:
      case "EXTERNALGAME_GOG":
        return ExternalGameCategoryEnum.EXTERNALGAME_GOG;
      case 10:
      case "EXTERNALGAME_YOUTUBE":
        return ExternalGameCategoryEnum.EXTERNALGAME_YOUTUBE;
      case 11:
      case "EXTERNALGAME_MICROSOFT":
        return ExternalGameCategoryEnum.EXTERNALGAME_MICROSOFT;
      case 13:
      case "EXTERNALGAME_APPLE":
        return ExternalGameCategoryEnum.EXTERNALGAME_APPLE;
      case 14:
      case "EXTERNALGAME_TWITCH":
        return ExternalGameCategoryEnum.EXTERNALGAME_TWITCH;
      case 15:
      case "EXTERNALGAME_ANDROID":
        return ExternalGameCategoryEnum.EXTERNALGAME_ANDROID;
      case -1:
      case "UNRECOGNIZED":
      default:
        return ExternalGameCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: ExternalGameCategoryEnum): string {
    switch (object) {
      case ExternalGameCategoryEnum.EXTERNALGAME_CATEGORY_NULL:
        return "EXTERNALGAME_CATEGORY_NULL";
      case ExternalGameCategoryEnum.EXTERNALGAME_STEAM:
        return "EXTERNALGAME_STEAM";
      case ExternalGameCategoryEnum.EXTERNALGAME_GOG:
        return "EXTERNALGAME_GOG";
      case ExternalGameCategoryEnum.EXTERNALGAME_YOUTUBE:
        return "EXTERNALGAME_YOUTUBE";
      case ExternalGameCategoryEnum.EXTERNALGAME_MICROSOFT:
        return "EXTERNALGAME_MICROSOFT";
      case ExternalGameCategoryEnum.EXTERNALGAME_APPLE:
        return "EXTERNALGAME_APPLE";
      case ExternalGameCategoryEnum.EXTERNALGAME_TWITCH:
        return "EXTERNALGAME_TWITCH";
      case ExternalGameCategoryEnum.EXTERNALGAME_ANDROID:
        return "EXTERNALGAME_ANDROID";
      default:
        return "UNKNOWN";
    }
  },
}

export type ExternalGameCategoryEnum = 0 | 1 | 5 | 10 | 11 | 13 | 14 | 15 | -1;

export const ExternalGameMediaEnum = {
  EXTERNALGAME_MEDIA_NULL: 0 as const,
  EXTERNALGAME_DIGITAL: 1 as const,
  EXTERNALGAME_PHYSICAL: 2 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): ExternalGameMediaEnum {
    switch (object) {
      case 0:
      case "EXTERNALGAME_MEDIA_NULL":
        return ExternalGameMediaEnum.EXTERNALGAME_MEDIA_NULL;
      case 1:
      case "EXTERNALGAME_DIGITAL":
        return ExternalGameMediaEnum.EXTERNALGAME_DIGITAL;
      case 2:
      case "EXTERNALGAME_PHYSICAL":
        return ExternalGameMediaEnum.EXTERNALGAME_PHYSICAL;
      case -1:
      case "UNRECOGNIZED":
      default:
        return ExternalGameMediaEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: ExternalGameMediaEnum): string {
    switch (object) {
      case ExternalGameMediaEnum.EXTERNALGAME_MEDIA_NULL:
        return "EXTERNALGAME_MEDIA_NULL";
      case ExternalGameMediaEnum.EXTERNALGAME_DIGITAL:
        return "EXTERNALGAME_DIGITAL";
      case ExternalGameMediaEnum.EXTERNALGAME_PHYSICAL:
        return "EXTERNALGAME_PHYSICAL";
      default:
        return "UNKNOWN";
    }
  },
}

export type ExternalGameMediaEnum = 0 | 1 | 2 | -1;

export const FeedCategoryEnum = {
  FEED_CATEGORY_NULL: 0 as const,
  PULSE_ARTICLE: 1 as const,
  COMING_SOON: 2 as const,
  NEW_TRAILER: 3 as const,
  USER_CONTRIBUTED_ITEM: 5 as const,
  USER_CONTRIBUTIONS_ITEM: 6 as const,
  PAGE_CONTRIBUTED_ITEM: 7 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): FeedCategoryEnum {
    switch (object) {
      case 0:
      case "FEED_CATEGORY_NULL":
        return FeedCategoryEnum.FEED_CATEGORY_NULL;
      case 1:
      case "PULSE_ARTICLE":
        return FeedCategoryEnum.PULSE_ARTICLE;
      case 2:
      case "COMING_SOON":
        return FeedCategoryEnum.COMING_SOON;
      case 3:
      case "NEW_TRAILER":
        return FeedCategoryEnum.NEW_TRAILER;
      case 5:
      case "USER_CONTRIBUTED_ITEM":
        return FeedCategoryEnum.USER_CONTRIBUTED_ITEM;
      case 6:
      case "USER_CONTRIBUTIONS_ITEM":
        return FeedCategoryEnum.USER_CONTRIBUTIONS_ITEM;
      case 7:
      case "PAGE_CONTRIBUTED_ITEM":
        return FeedCategoryEnum.PAGE_CONTRIBUTED_ITEM;
      case -1:
      case "UNRECOGNIZED":
      default:
        return FeedCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: FeedCategoryEnum): string {
    switch (object) {
      case FeedCategoryEnum.FEED_CATEGORY_NULL:
        return "FEED_CATEGORY_NULL";
      case FeedCategoryEnum.PULSE_ARTICLE:
        return "PULSE_ARTICLE";
      case FeedCategoryEnum.COMING_SOON:
        return "COMING_SOON";
      case FeedCategoryEnum.NEW_TRAILER:
        return "NEW_TRAILER";
      case FeedCategoryEnum.USER_CONTRIBUTED_ITEM:
        return "USER_CONTRIBUTED_ITEM";
      case FeedCategoryEnum.USER_CONTRIBUTIONS_ITEM:
        return "USER_CONTRIBUTIONS_ITEM";
      case FeedCategoryEnum.PAGE_CONTRIBUTED_ITEM:
        return "PAGE_CONTRIBUTED_ITEM";
      default:
        return "UNKNOWN";
    }
  },
}

export type FeedCategoryEnum = 0 | 1 | 2 | 3 | 5 | 6 | 7 | -1;

export const GameCategoryEnum = {
  MAIN_GAME: 0 as const,
  DLC_ADDON: 1 as const,
  EXPANSION: 2 as const,
  BUNDLE: 3 as const,
  STANDALONE_EXPANSION: 4 as const,
  MOD: 5 as const,
  EPISODE: 6 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): GameCategoryEnum {
    switch (object) {
      case 0:
      case "MAIN_GAME":
        return GameCategoryEnum.MAIN_GAME;
      case 1:
      case "DLC_ADDON":
        return GameCategoryEnum.DLC_ADDON;
      case 2:
      case "EXPANSION":
        return GameCategoryEnum.EXPANSION;
      case 3:
      case "BUNDLE":
        return GameCategoryEnum.BUNDLE;
      case 4:
      case "STANDALONE_EXPANSION":
        return GameCategoryEnum.STANDALONE_EXPANSION;
      case 5:
      case "MOD":
        return GameCategoryEnum.MOD;
      case 6:
      case "EPISODE":
        return GameCategoryEnum.EPISODE;
      case -1:
      case "UNRECOGNIZED":
      default:
        return GameCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: GameCategoryEnum): string {
    switch (object) {
      case GameCategoryEnum.MAIN_GAME:
        return "MAIN_GAME";
      case GameCategoryEnum.DLC_ADDON:
        return "DLC_ADDON";
      case GameCategoryEnum.EXPANSION:
        return "EXPANSION";
      case GameCategoryEnum.BUNDLE:
        return "BUNDLE";
      case GameCategoryEnum.STANDALONE_EXPANSION:
        return "STANDALONE_EXPANSION";
      case GameCategoryEnum.MOD:
        return "MOD";
      case GameCategoryEnum.EPISODE:
        return "EPISODE";
      default:
        return "UNKNOWN";
    }
  },
}

export type GameCategoryEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | -1;

export const GameStatusEnum = {
  RELEASED: 0 as const,
  ALPHA: 2 as const,
  BETA: 3 as const,
  EARLY_ACCESS: 4 as const,
  OFFLINE: 5 as const,
  CANCELLED: 6 as const,
  RUMORED: 7 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): GameStatusEnum {
    switch (object) {
      case 0:
      case "RELEASED":
        return GameStatusEnum.RELEASED;
      case 2:
      case "ALPHA":
        return GameStatusEnum.ALPHA;
      case 3:
      case "BETA":
        return GameStatusEnum.BETA;
      case 4:
      case "EARLY_ACCESS":
        return GameStatusEnum.EARLY_ACCESS;
      case 5:
      case "OFFLINE":
        return GameStatusEnum.OFFLINE;
      case 6:
      case "CANCELLED":
        return GameStatusEnum.CANCELLED;
      case 7:
      case "RUMORED":
        return GameStatusEnum.RUMORED;
      case -1:
      case "UNRECOGNIZED":
      default:
        return GameStatusEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: GameStatusEnum): string {
    switch (object) {
      case GameStatusEnum.RELEASED:
        return "RELEASED";
      case GameStatusEnum.ALPHA:
        return "ALPHA";
      case GameStatusEnum.BETA:
        return "BETA";
      case GameStatusEnum.EARLY_ACCESS:
        return "EARLY_ACCESS";
      case GameStatusEnum.OFFLINE:
        return "OFFLINE";
      case GameStatusEnum.CANCELLED:
        return "CANCELLED";
      case GameStatusEnum.RUMORED:
        return "RUMORED";
      default:
        return "UNKNOWN";
    }
  },
}

export type GameStatusEnum = 0 | 2 | 3 | 4 | 5 | 6 | 7 | -1;

export const GameVersionFeatureCategoryEnum = {
  BOOLEAN: 0 as const,
  DESCRIPTION: 1 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): GameVersionFeatureCategoryEnum {
    switch (object) {
      case 0:
      case "BOOLEAN":
        return GameVersionFeatureCategoryEnum.BOOLEAN;
      case 1:
      case "DESCRIPTION":
        return GameVersionFeatureCategoryEnum.DESCRIPTION;
      case -1:
      case "UNRECOGNIZED":
      default:
        return GameVersionFeatureCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: GameVersionFeatureCategoryEnum): string {
    switch (object) {
      case GameVersionFeatureCategoryEnum.BOOLEAN:
        return "BOOLEAN";
      case GameVersionFeatureCategoryEnum.DESCRIPTION:
        return "DESCRIPTION";
      default:
        return "UNKNOWN";
    }
  },
}

export type GameVersionFeatureCategoryEnum = 0 | 1 | -1;

export const GameVersionFeatureValueIncludedFeatureEnum = {
  NOT_INCLUDED: 0 as const,
  INCLUDED: 1 as const,
  PRE_ORDER_ONLY: 2 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): GameVersionFeatureValueIncludedFeatureEnum {
    switch (object) {
      case 0:
      case "NOT_INCLUDED":
        return GameVersionFeatureValueIncludedFeatureEnum.NOT_INCLUDED;
      case 1:
      case "INCLUDED":
        return GameVersionFeatureValueIncludedFeatureEnum.INCLUDED;
      case 2:
      case "PRE_ORDER_ONLY":
        return GameVersionFeatureValueIncludedFeatureEnum.PRE_ORDER_ONLY;
      case -1:
      case "UNRECOGNIZED":
      default:
        return GameVersionFeatureValueIncludedFeatureEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: GameVersionFeatureValueIncludedFeatureEnum): string {
    switch (object) {
      case GameVersionFeatureValueIncludedFeatureEnum.NOT_INCLUDED:
        return "NOT_INCLUDED";
      case GameVersionFeatureValueIncludedFeatureEnum.INCLUDED:
        return "INCLUDED";
      case GameVersionFeatureValueIncludedFeatureEnum.PRE_ORDER_ONLY:
        return "PRE_ORDER_ONLY";
      default:
        return "UNKNOWN";
    }
  },
}

export type GameVersionFeatureValueIncludedFeatureEnum = 0 | 1 | 2 | -1;

export const PageCategoryEnum = {
  PAGE_CATEGORY_NULL: 0 as const,
  PERSONALITY: 1 as const,
  MEDIA_ORGANIZATION: 2 as const,
  CONTENT_CREATOR: 3 as const,
  CLAN_TEAM: 4 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): PageCategoryEnum {
    switch (object) {
      case 0:
      case "PAGE_CATEGORY_NULL":
        return PageCategoryEnum.PAGE_CATEGORY_NULL;
      case 1:
      case "PERSONALITY":
        return PageCategoryEnum.PERSONALITY;
      case 2:
      case "MEDIA_ORGANIZATION":
        return PageCategoryEnum.MEDIA_ORGANIZATION;
      case 3:
      case "CONTENT_CREATOR":
        return PageCategoryEnum.CONTENT_CREATOR;
      case 4:
      case "CLAN_TEAM":
        return PageCategoryEnum.CLAN_TEAM;
      case -1:
      case "UNRECOGNIZED":
      default:
        return PageCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: PageCategoryEnum): string {
    switch (object) {
      case PageCategoryEnum.PAGE_CATEGORY_NULL:
        return "PAGE_CATEGORY_NULL";
      case PageCategoryEnum.PERSONALITY:
        return "PERSONALITY";
      case PageCategoryEnum.MEDIA_ORGANIZATION:
        return "MEDIA_ORGANIZATION";
      case PageCategoryEnum.CONTENT_CREATOR:
        return "CONTENT_CREATOR";
      case PageCategoryEnum.CLAN_TEAM:
        return "CLAN_TEAM";
      default:
        return "UNKNOWN";
    }
  },
}

export type PageCategoryEnum = 0 | 1 | 2 | 3 | 4 | -1;

export const ColorColorEnum = {
  GREEN: 0 as const,
  BLUE: 1 as const,
  RED: 2 as const,
  ORANGE: 3 as const,
  PINK: 4 as const,
  YELLOW: 5 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): ColorColorEnum {
    switch (object) {
      case 0:
      case "GREEN":
        return ColorColorEnum.GREEN;
      case 1:
      case "BLUE":
        return ColorColorEnum.BLUE;
      case 2:
      case "RED":
        return ColorColorEnum.RED;
      case 3:
      case "ORANGE":
        return ColorColorEnum.ORANGE;
      case 4:
      case "PINK":
        return ColorColorEnum.PINK;
      case 5:
      case "YELLOW":
        return ColorColorEnum.YELLOW;
      case -1:
      case "UNRECOGNIZED":
      default:
        return ColorColorEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: ColorColorEnum): string {
    switch (object) {
      case ColorColorEnum.GREEN:
        return "GREEN";
      case ColorColorEnum.BLUE:
        return "BLUE";
      case ColorColorEnum.RED:
        return "RED";
      case ColorColorEnum.ORANGE:
        return "ORANGE";
      case ColorColorEnum.PINK:
        return "PINK";
      case ColorColorEnum.YELLOW:
        return "YELLOW";
      default:
        return "UNKNOWN";
    }
  },
}

export type ColorColorEnum = 0 | 1 | 2 | 3 | 4 | 5 | -1;

export const PageSubCategoryEnum = {
  PAGE_SUB_CATEGORY_NULL: 0 as const,
  USER: 1 as const,
  GAME: 2 as const,
  COMPANY: 3 as const,
  CONSUMER: 4 as const,
  INDUSTRY: 5 as const,
  E_SPORTS: 6 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): PageSubCategoryEnum {
    switch (object) {
      case 0:
      case "PAGE_SUB_CATEGORY_NULL":
        return PageSubCategoryEnum.PAGE_SUB_CATEGORY_NULL;
      case 1:
      case "USER":
        return PageSubCategoryEnum.USER;
      case 2:
      case "GAME":
        return PageSubCategoryEnum.GAME;
      case 3:
      case "COMPANY":
        return PageSubCategoryEnum.COMPANY;
      case 4:
      case "CONSUMER":
        return PageSubCategoryEnum.CONSUMER;
      case 5:
      case "INDUSTRY":
        return PageSubCategoryEnum.INDUSTRY;
      case 6:
      case "E_SPORTS":
        return PageSubCategoryEnum.E_SPORTS;
      case -1:
      case "UNRECOGNIZED":
      default:
        return PageSubCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: PageSubCategoryEnum): string {
    switch (object) {
      case PageSubCategoryEnum.PAGE_SUB_CATEGORY_NULL:
        return "PAGE_SUB_CATEGORY_NULL";
      case PageSubCategoryEnum.USER:
        return "USER";
      case PageSubCategoryEnum.GAME:
        return "GAME";
      case PageSubCategoryEnum.COMPANY:
        return "COMPANY";
      case PageSubCategoryEnum.CONSUMER:
        return "CONSUMER";
      case PageSubCategoryEnum.INDUSTRY:
        return "INDUSTRY";
      case PageSubCategoryEnum.E_SPORTS:
        return "E_SPORTS";
      default:
        return "UNKNOWN";
    }
  },
}

export type PageSubCategoryEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | -1;

export const PlatformCategoryEnum = {
  PLATFORM_CATEGORY_NULL: 0 as const,
  CONSOLE: 1 as const,
  ARCADE: 2 as const,
  PLATFORM: 3 as const,
  OPERATING_SYSTEM: 4 as const,
  PORTABLE_CONSOLE: 5 as const,
  COMPUTER: 6 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): PlatformCategoryEnum {
    switch (object) {
      case 0:
      case "PLATFORM_CATEGORY_NULL":
        return PlatformCategoryEnum.PLATFORM_CATEGORY_NULL;
      case 1:
      case "CONSOLE":
        return PlatformCategoryEnum.CONSOLE;
      case 2:
      case "ARCADE":
        return PlatformCategoryEnum.ARCADE;
      case 3:
      case "PLATFORM":
        return PlatformCategoryEnum.PLATFORM;
      case 4:
      case "OPERATING_SYSTEM":
        return PlatformCategoryEnum.OPERATING_SYSTEM;
      case 5:
      case "PORTABLE_CONSOLE":
        return PlatformCategoryEnum.PORTABLE_CONSOLE;
      case 6:
      case "COMPUTER":
        return PlatformCategoryEnum.COMPUTER;
      case -1:
      case "UNRECOGNIZED":
      default:
        return PlatformCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: PlatformCategoryEnum): string {
    switch (object) {
      case PlatformCategoryEnum.PLATFORM_CATEGORY_NULL:
        return "PLATFORM_CATEGORY_NULL";
      case PlatformCategoryEnum.CONSOLE:
        return "CONSOLE";
      case PlatformCategoryEnum.ARCADE:
        return "ARCADE";
      case PlatformCategoryEnum.PLATFORM:
        return "PLATFORM";
      case PlatformCategoryEnum.OPERATING_SYSTEM:
        return "OPERATING_SYSTEM";
      case PlatformCategoryEnum.PORTABLE_CONSOLE:
        return "PORTABLE_CONSOLE";
      case PlatformCategoryEnum.COMPUTER:
        return "COMPUTER";
      default:
        return "UNKNOWN";
    }
  },
}

export type PlatformCategoryEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | -1;

export const ReviewCategoryEnum = {
  REVIEW_CATEGORY_NULL: 0 as const,
  TEXT: 1 as const,
  VIDEO: 2 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): ReviewCategoryEnum {
    switch (object) {
      case 0:
      case "REVIEW_CATEGORY_NULL":
        return ReviewCategoryEnum.REVIEW_CATEGORY_NULL;
      case 1:
      case "TEXT":
        return ReviewCategoryEnum.TEXT;
      case 2:
      case "VIDEO":
        return ReviewCategoryEnum.VIDEO;
      case -1:
      case "UNRECOGNIZED":
      default:
        return ReviewCategoryEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: ReviewCategoryEnum): string {
    switch (object) {
      case ReviewCategoryEnum.REVIEW_CATEGORY_NULL:
        return "REVIEW_CATEGORY_NULL";
      case ReviewCategoryEnum.TEXT:
        return "TEXT";
      case ReviewCategoryEnum.VIDEO:
        return "VIDEO";
      default:
        return "UNKNOWN";
    }
  },
}

export type ReviewCategoryEnum = 0 | 1 | 2 | -1;

export const TestDummyEnumTestEnum = {
  TESTDUMMY_ENUM_TEST_NULL: 0 as const,
  ENUM1: 1 as const,
  ENUM2: 2 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): TestDummyEnumTestEnum {
    switch (object) {
      case 0:
      case "TESTDUMMY_ENUM_TEST_NULL":
        return TestDummyEnumTestEnum.TESTDUMMY_ENUM_TEST_NULL;
      case 1:
      case "ENUM1":
        return TestDummyEnumTestEnum.ENUM1;
      case 2:
      case "ENUM2":
        return TestDummyEnumTestEnum.ENUM2;
      case -1:
      case "UNRECOGNIZED":
      default:
        return TestDummyEnumTestEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: TestDummyEnumTestEnum): string {
    switch (object) {
      case TestDummyEnumTestEnum.TESTDUMMY_ENUM_TEST_NULL:
        return "TESTDUMMY_ENUM_TEST_NULL";
      case TestDummyEnumTestEnum.ENUM1:
        return "ENUM1";
      case TestDummyEnumTestEnum.ENUM2:
        return "ENUM2";
      default:
        return "UNKNOWN";
    }
  },
}

export type TestDummyEnumTestEnum = 0 | 1 | 2 | -1;

export const UserRoleEnum = {
  USER_ROLE_NULL: 0 as const,
  USER_USER: 1 as const,
  USER_ADVANCED_USER: 2 as const,
  USER_SUPER_ADVANCED_USER: 3 as const,
  USER_KEEPER: 4 as const,
  USER_ADMIN: 9 as const,
  USER_SUPER_ADMIN: 10 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): UserRoleEnum {
    switch (object) {
      case 0:
      case "USER_ROLE_NULL":
        return UserRoleEnum.USER_ROLE_NULL;
      case 1:
      case "USER_USER":
        return UserRoleEnum.USER_USER;
      case 2:
      case "USER_ADVANCED_USER":
        return UserRoleEnum.USER_ADVANCED_USER;
      case 3:
      case "USER_SUPER_ADVANCED_USER":
        return UserRoleEnum.USER_SUPER_ADVANCED_USER;
      case 4:
      case "USER_KEEPER":
        return UserRoleEnum.USER_KEEPER;
      case 9:
      case "USER_ADMIN":
        return UserRoleEnum.USER_ADMIN;
      case 10:
      case "USER_SUPER_ADMIN":
        return UserRoleEnum.USER_SUPER_ADMIN;
      case -1:
      case "UNRECOGNIZED":
      default:
        return UserRoleEnum.UNRECOGNIZED;
    }
  },
  toJSON(object: UserRoleEnum): string {
    switch (object) {
      case UserRoleEnum.USER_ROLE_NULL:
        return "USER_ROLE_NULL";
      case UserRoleEnum.USER_USER:
        return "USER_USER";
      case UserRoleEnum.USER_ADVANCED_USER:
        return "USER_ADVANCED_USER";
      case UserRoleEnum.USER_SUPER_ADVANCED_USER:
        return "USER_SUPER_ADVANCED_USER";
      case UserRoleEnum.USER_KEEPER:
        return "USER_KEEPER";
      case UserRoleEnum.USER_ADMIN:
        return "USER_ADMIN";
      case UserRoleEnum.USER_SUPER_ADMIN:
        return "USER_SUPER_ADMIN";
      default:
        return "UNKNOWN";
    }
  },
}

export type UserRoleEnum = 0 | 1 | 2 | 3 | 4 | 9 | 10 | -1;

export const Count = {
  encode(message: Count, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.count);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Count {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCount } as Count;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Count {
    const message = { ...baseCount } as Count;
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Count>): Count {
    const message = { ...baseCount } as Count;
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
  toJSON(message: Count): unknown {
    const obj: any = {};
    obj.count = message.count || 0;
    return obj;
  },
};

export const MultiQueryResult = {
  encode(message: MultiQueryResult, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    for (const v of message.results) {
      writer.uint32(18).bytes(v);
    }
    writer.uint32(24).int64(message.count);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MultiQueryResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMultiQueryResult } as MultiQueryResult;
    message.results = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.results.push(reader.bytes());
          break;
        case 3:
          message.count = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MultiQueryResult {
    const message = { ...baseMultiQueryResult } as MultiQueryResult;
    message.results = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.results !== undefined && object.results !== null) {
      for (const e of object.results) {
        message.results.push(bytesFromBase64(e));
      }
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<MultiQueryResult>): MultiQueryResult {
    const message = { ...baseMultiQueryResult } as MultiQueryResult;
    message.results = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.results !== undefined && object.results !== null) {
      for (const e of object.results) {
        message.results.push(e);
      }
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
  toJSON(message: MultiQueryResult): unknown {
    const obj: any = {};
    obj.name = message.name || "";
    if (message.results) {
      obj.results = message.results.map(e => e !== undefined ? base64FromBytes(e) : undefined);
    } else {
      obj.results = [];
    }
    obj.count = message.count || 0;
    return obj;
  },
};

export const MultiQueryResultArray = {
  encode(message: MultiQueryResultArray, writer: Writer = Writer.create()): Writer {
    for (const v of message.result) {
      MultiQueryResult.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MultiQueryResultArray {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMultiQueryResultArray } as MultiQueryResultArray;
    message.result = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result.push(MultiQueryResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MultiQueryResultArray {
    const message = { ...baseMultiQueryResultArray } as MultiQueryResultArray;
    message.result = [];
    if (object.result !== undefined && object.result !== null) {
      for (const e of object.result) {
        message.result.push(MultiQueryResult.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MultiQueryResultArray>): MultiQueryResultArray {
    const message = { ...baseMultiQueryResultArray } as MultiQueryResultArray;
    message.result = [];
    if (object.result !== undefined && object.result !== null) {
      for (const e of object.result) {
        message.result.push(MultiQueryResult.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: MultiQueryResultArray): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map(e => e ? MultiQueryResult.toJSON(e) : undefined);
    } else {
      obj.result = [];
    }
    return obj;
  },
};

export const AchievementResult = {
  encode(message: AchievementResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.achievements) {
      Achievement.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AchievementResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAchievementResult } as AchievementResult;
    message.achievements = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievements.push(Achievement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AchievementResult {
    const message = { ...baseAchievementResult } as AchievementResult;
    message.achievements = [];
    if (object.achievements !== undefined && object.achievements !== null) {
      for (const e of object.achievements) {
        message.achievements.push(Achievement.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AchievementResult>): AchievementResult {
    const message = { ...baseAchievementResult } as AchievementResult;
    message.achievements = [];
    if (object.achievements !== undefined && object.achievements !== null) {
      for (const e of object.achievements) {
        message.achievements.push(Achievement.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: AchievementResult): unknown {
    const obj: any = {};
    if (message.achievements) {
      obj.achievements = message.achievements.map(e => e ? Achievement.toJSON(e) : undefined);
    } else {
      obj.achievements = [];
    }
    return obj;
  },
};

export const Achievement = {
  encode(message: Achievement, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.achievementIcon !== undefined && message.achievementIcon !== undefined) {
      AchievementIcon.encode(message.achievementIcon, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).int32(message.category);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.description);
    writer.uint32(50).string(message.externalId);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(64).int32(message.language);
    if (message.lockedAchievementIcon !== undefined && message.lockedAchievementIcon !== undefined) {
      AchievementIcon.encode(message.lockedAchievementIcon, writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(82).string(message.name);
    writer.uint32(88).int32(message.owners);
    writer.uint32(97).double(message.ownersPercentage);
    writer.uint32(104).int32(message.rank);
    writer.uint32(114).string(message.slug);
    writer.uint32(122).fork();
    for (const v of message.tags) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(130).fork()).ldelim();
    }
    writer.uint32(138).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Achievement {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAchievement } as Achievement;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.achievementIcon = AchievementIcon.decode(reader, reader.uint32());
          break;
        case 3:
          message.category = reader.int32() as any;
          break;
        case 4:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.externalId = reader.string();
          break;
        case 7:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 8:
          message.language = reader.int32() as any;
          break;
        case 9:
          message.lockedAchievementIcon = AchievementIcon.decode(reader, reader.uint32());
          break;
        case 10:
          message.name = reader.string();
          break;
        case 11:
          message.owners = reader.int32();
          break;
        case 12:
          message.ownersPercentage = reader.double();
          break;
        case 13:
          message.rank = reader.int32() as any;
          break;
        case 14:
          message.slug = reader.string();
          break;
        case 15:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tags.push(reader.int32());
            }
          } else {
            message.tags.push(reader.int32());
          }
          break;
        case 16:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 17:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Achievement {
    const message = { ...baseAchievement } as Achievement;
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.achievementIcon !== undefined && object.achievementIcon !== null) {
      message.achievementIcon = AchievementIcon.fromJSON(object.achievementIcon);
    } else {
      message.achievementIcon = undefined;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = AchievementCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.externalId !== undefined && object.externalId !== null) {
      message.externalId = String(object.externalId);
    } else {
      message.externalId = "";
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.language !== undefined && object.language !== null) {
      message.language = RegionLanguageEnum.fromJSON(object.language);
    } else {
      message.language = 0;
    }
    if (object.lockedAchievementIcon !== undefined && object.lockedAchievementIcon !== null) {
      message.lockedAchievementIcon = AchievementIcon.fromJSON(object.lockedAchievementIcon);
    } else {
      message.lockedAchievementIcon = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.owners !== undefined && object.owners !== null) {
      message.owners = Number(object.owners);
    } else {
      message.owners = 0;
    }
    if (object.ownersPercentage !== undefined && object.ownersPercentage !== null) {
      message.ownersPercentage = Number(object.ownersPercentage);
    } else {
      message.ownersPercentage = 0;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = AchievementRankEnum.fromJSON(object.rank);
    } else {
      message.rank = 0;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(Number(e));
      }
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Achievement>): Achievement {
    const message = { ...baseAchievement } as Achievement;
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.achievementIcon !== undefined && object.achievementIcon !== null) {
      message.achievementIcon = AchievementIcon.fromPartial(object.achievementIcon);
    } else {
      message.achievementIcon = undefined;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.externalId !== undefined && object.externalId !== null) {
      message.externalId = object.externalId;
    } else {
      message.externalId = "";
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.language !== undefined && object.language !== null) {
      message.language = object.language;
    } else {
      message.language = 0;
    }
    if (object.lockedAchievementIcon !== undefined && object.lockedAchievementIcon !== null) {
      message.lockedAchievementIcon = AchievementIcon.fromPartial(object.lockedAchievementIcon);
    } else {
      message.lockedAchievementIcon = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.owners !== undefined && object.owners !== null) {
      message.owners = object.owners;
    } else {
      message.owners = 0;
    }
    if (object.ownersPercentage !== undefined && object.ownersPercentage !== null) {
      message.ownersPercentage = object.ownersPercentage;
    } else {
      message.ownersPercentage = 0;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank;
    } else {
      message.rank = 0;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Achievement): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.achievementIcon = message.achievementIcon ? AchievementIcon.toJSON(message.achievementIcon) : undefined;
    obj.category = AchievementCategoryEnum.toJSON(message.category);
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.description = message.description || "";
    obj.externalId = message.externalId || "";
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.language = RegionLanguageEnum.toJSON(message.language);
    obj.lockedAchievementIcon = message.lockedAchievementIcon ? AchievementIcon.toJSON(message.lockedAchievementIcon) : undefined;
    obj.name = message.name || "";
    obj.owners = message.owners || 0;
    obj.ownersPercentage = message.ownersPercentage || 0;
    obj.rank = AchievementRankEnum.toJSON(message.rank);
    obj.slug = message.slug || "";
    if (message.tags) {
      obj.tags = message.tags.map(e => e || 0);
    } else {
      obj.tags = [];
    }
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const AchievementIconResult = {
  encode(message: AchievementIconResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.achievementicons) {
      AchievementIcon.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AchievementIconResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAchievementIconResult } as AchievementIconResult;
    message.achievementicons = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievementicons.push(AchievementIcon.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AchievementIconResult {
    const message = { ...baseAchievementIconResult } as AchievementIconResult;
    message.achievementicons = [];
    if (object.achievementicons !== undefined && object.achievementicons !== null) {
      for (const e of object.achievementicons) {
        message.achievementicons.push(AchievementIcon.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AchievementIconResult>): AchievementIconResult {
    const message = { ...baseAchievementIconResult } as AchievementIconResult;
    message.achievementicons = [];
    if (object.achievementicons !== undefined && object.achievementicons !== null) {
      for (const e of object.achievementicons) {
        message.achievementicons.push(AchievementIcon.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: AchievementIconResult): unknown {
    const obj: any = {};
    if (message.achievementicons) {
      obj.achievementicons = message.achievementicons.map(e => e ? AchievementIcon.toJSON(e) : undefined);
    } else {
      obj.achievementicons = [];
    }
    return obj;
  },
};

export const AchievementIcon = {
  encode(message: AchievementIcon, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    writer.uint32(32).int32(message.height);
    writer.uint32(42).string(message.imageId);
    writer.uint32(50).string(message.url);
    writer.uint32(56).int32(message.width);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AchievementIcon {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAchievementIcon } as AchievementIcon;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.imageId = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.width = reader.int32();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AchievementIcon {
    const message = { ...baseAchievementIcon } as AchievementIcon;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<AchievementIcon>): AchievementIcon {
    const message = { ...baseAchievementIcon } as AchievementIcon;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: AchievementIcon): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const AgeRatingResult = {
  encode(message: AgeRatingResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.ageratings) {
      AgeRating.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AgeRatingResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgeRatingResult } as AgeRatingResult;
    message.ageratings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ageratings.push(AgeRating.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AgeRatingResult {
    const message = { ...baseAgeRatingResult } as AgeRatingResult;
    message.ageratings = [];
    if (object.ageratings !== undefined && object.ageratings !== null) {
      for (const e of object.ageratings) {
        message.ageratings.push(AgeRating.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AgeRatingResult>): AgeRatingResult {
    const message = { ...baseAgeRatingResult } as AgeRatingResult;
    message.ageratings = [];
    if (object.ageratings !== undefined && object.ageratings !== null) {
      for (const e of object.ageratings) {
        message.ageratings.push(AgeRating.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: AgeRatingResult): unknown {
    const obj: any = {};
    if (message.ageratings) {
      obj.ageratings = message.ageratings.map(e => e ? AgeRating.toJSON(e) : undefined);
    } else {
      obj.ageratings = [];
    }
    return obj;
  },
};

export const AgeRating = {
  encode(message: AgeRating, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    for (const v of message.contentDescriptions) {
      AgeRatingContentDescription.encode(v, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).int32(message.rating);
    writer.uint32(42).string(message.ratingCoverUrl);
    writer.uint32(50).string(message.synopsis);
    writer.uint32(58).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AgeRating {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgeRating } as AgeRating;
    message.contentDescriptions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.contentDescriptions.push(AgeRatingContentDescription.decode(reader, reader.uint32()));
          break;
        case 4:
          message.rating = reader.int32() as any;
          break;
        case 5:
          message.ratingCoverUrl = reader.string();
          break;
        case 6:
          message.synopsis = reader.string();
          break;
        case 7:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AgeRating {
    const message = { ...baseAgeRating } as AgeRating;
    message.contentDescriptions = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = AgeRatingCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.contentDescriptions !== undefined && object.contentDescriptions !== null) {
      for (const e of object.contentDescriptions) {
        message.contentDescriptions.push(AgeRatingContentDescription.fromJSON(e));
      }
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = AgeRatingRatingEnum.fromJSON(object.rating);
    } else {
      message.rating = 0;
    }
    if (object.ratingCoverUrl !== undefined && object.ratingCoverUrl !== null) {
      message.ratingCoverUrl = String(object.ratingCoverUrl);
    } else {
      message.ratingCoverUrl = "";
    }
    if (object.synopsis !== undefined && object.synopsis !== null) {
      message.synopsis = String(object.synopsis);
    } else {
      message.synopsis = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<AgeRating>): AgeRating {
    const message = { ...baseAgeRating } as AgeRating;
    message.contentDescriptions = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.contentDescriptions !== undefined && object.contentDescriptions !== null) {
      for (const e of object.contentDescriptions) {
        message.contentDescriptions.push(AgeRatingContentDescription.fromPartial(e));
      }
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = object.rating;
    } else {
      message.rating = 0;
    }
    if (object.ratingCoverUrl !== undefined && object.ratingCoverUrl !== null) {
      message.ratingCoverUrl = object.ratingCoverUrl;
    } else {
      message.ratingCoverUrl = "";
    }
    if (object.synopsis !== undefined && object.synopsis !== null) {
      message.synopsis = object.synopsis;
    } else {
      message.synopsis = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: AgeRating): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = AgeRatingCategoryEnum.toJSON(message.category);
    if (message.contentDescriptions) {
      obj.contentDescriptions = message.contentDescriptions.map(e => e ? AgeRatingContentDescription.toJSON(e) : undefined);
    } else {
      obj.contentDescriptions = [];
    }
    obj.rating = AgeRatingRatingEnum.toJSON(message.rating);
    obj.ratingCoverUrl = message.ratingCoverUrl || "";
    obj.synopsis = message.synopsis || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const AgeRatingContentDescriptionResult = {
  encode(message: AgeRatingContentDescriptionResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.ageratingcontentdescriptions) {
      AgeRatingContentDescription.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AgeRatingContentDescriptionResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgeRatingContentDescriptionResult } as AgeRatingContentDescriptionResult;
    message.ageratingcontentdescriptions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ageratingcontentdescriptions.push(AgeRatingContentDescription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AgeRatingContentDescriptionResult {
    const message = { ...baseAgeRatingContentDescriptionResult } as AgeRatingContentDescriptionResult;
    message.ageratingcontentdescriptions = [];
    if (object.ageratingcontentdescriptions !== undefined && object.ageratingcontentdescriptions !== null) {
      for (const e of object.ageratingcontentdescriptions) {
        message.ageratingcontentdescriptions.push(AgeRatingContentDescription.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AgeRatingContentDescriptionResult>): AgeRatingContentDescriptionResult {
    const message = { ...baseAgeRatingContentDescriptionResult } as AgeRatingContentDescriptionResult;
    message.ageratingcontentdescriptions = [];
    if (object.ageratingcontentdescriptions !== undefined && object.ageratingcontentdescriptions !== null) {
      for (const e of object.ageratingcontentdescriptions) {
        message.ageratingcontentdescriptions.push(AgeRatingContentDescription.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: AgeRatingContentDescriptionResult): unknown {
    const obj: any = {};
    if (message.ageratingcontentdescriptions) {
      obj.ageratingcontentdescriptions = message.ageratingcontentdescriptions.map(e => e ? AgeRatingContentDescription.toJSON(e) : undefined);
    } else {
      obj.ageratingcontentdescriptions = [];
    }
    return obj;
  },
};

export const AgeRatingContentDescription = {
  encode(message: AgeRatingContentDescription, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    writer.uint32(26).string(message.description);
    writer.uint32(34).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AgeRatingContentDescription {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgeRatingContentDescription } as AgeRatingContentDescription;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AgeRatingContentDescription {
    const message = { ...baseAgeRatingContentDescription } as AgeRatingContentDescription;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = AgeRatingRatingEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<AgeRatingContentDescription>): AgeRatingContentDescription {
    const message = { ...baseAgeRatingContentDescription } as AgeRatingContentDescription;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: AgeRatingContentDescription): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = AgeRatingRatingEnum.toJSON(message.category);
    obj.description = message.description || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const AlternativeNameResult = {
  encode(message: AlternativeNameResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.alternativenames) {
      AlternativeName.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AlternativeNameResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAlternativeNameResult } as AlternativeNameResult;
    message.alternativenames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alternativenames.push(AlternativeName.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AlternativeNameResult {
    const message = { ...baseAlternativeNameResult } as AlternativeNameResult;
    message.alternativenames = [];
    if (object.alternativenames !== undefined && object.alternativenames !== null) {
      for (const e of object.alternativenames) {
        message.alternativenames.push(AlternativeName.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AlternativeNameResult>): AlternativeNameResult {
    const message = { ...baseAlternativeNameResult } as AlternativeNameResult;
    message.alternativenames = [];
    if (object.alternativenames !== undefined && object.alternativenames !== null) {
      for (const e of object.alternativenames) {
        message.alternativenames.push(AlternativeName.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: AlternativeNameResult): unknown {
    const obj: any = {};
    if (message.alternativenames) {
      obj.alternativenames = message.alternativenames.map(e => e ? AlternativeName.toJSON(e) : undefined);
    } else {
      obj.alternativenames = [];
    }
    return obj;
  },
};

export const AlternativeName = {
  encode(message: AlternativeName, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(18).string(message.comment);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.name);
    writer.uint32(42).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AlternativeName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAlternativeName } as AlternativeName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.comment = reader.string();
          break;
        case 3:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AlternativeName {
    const message = { ...baseAlternativeName } as AlternativeName;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = String(object.comment);
    } else {
      message.comment = "";
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<AlternativeName>): AlternativeName {
    const message = { ...baseAlternativeName } as AlternativeName;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = object.comment;
    } else {
      message.comment = "";
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: AlternativeName): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.comment = message.comment || "";
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.name = message.name || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const ArtworkResult = {
  encode(message: ArtworkResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.artworks) {
      Artwork.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ArtworkResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseArtworkResult } as ArtworkResult;
    message.artworks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.artworks.push(Artwork.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArtworkResult {
    const message = { ...baseArtworkResult } as ArtworkResult;
    message.artworks = [];
    if (object.artworks !== undefined && object.artworks !== null) {
      for (const e of object.artworks) {
        message.artworks.push(Artwork.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ArtworkResult>): ArtworkResult {
    const message = { ...baseArtworkResult } as ArtworkResult;
    message.artworks = [];
    if (object.artworks !== undefined && object.artworks !== null) {
      for (const e of object.artworks) {
        message.artworks.push(Artwork.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ArtworkResult): unknown {
    const obj: any = {};
    if (message.artworks) {
      obj.artworks = message.artworks.map(e => e ? Artwork.toJSON(e) : undefined);
    } else {
      obj.artworks = [];
    }
    return obj;
  },
};

export const Artwork = {
  encode(message: Artwork, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).int32(message.height);
    writer.uint32(50).string(message.imageId);
    writer.uint32(58).string(message.url);
    writer.uint32(64).int32(message.width);
    writer.uint32(74).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Artwork {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseArtwork } as Artwork;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 5:
          message.height = reader.int32();
          break;
        case 6:
          message.imageId = reader.string();
          break;
        case 7:
          message.url = reader.string();
          break;
        case 8:
          message.width = reader.int32();
          break;
        case 9:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Artwork {
    const message = { ...baseArtwork } as Artwork;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Artwork>): Artwork {
    const message = { ...baseArtwork } as Artwork;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Artwork): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const CharacterResult = {
  encode(message: CharacterResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.characters) {
      Character.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CharacterResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCharacterResult } as CharacterResult;
    message.characters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.characters.push(Character.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CharacterResult {
    const message = { ...baseCharacterResult } as CharacterResult;
    message.characters = [];
    if (object.characters !== undefined && object.characters !== null) {
      for (const e of object.characters) {
        message.characters.push(Character.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CharacterResult>): CharacterResult {
    const message = { ...baseCharacterResult } as CharacterResult;
    message.characters = [];
    if (object.characters !== undefined && object.characters !== null) {
      for (const e of object.characters) {
        message.characters.push(Character.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CharacterResult): unknown {
    const obj: any = {};
    if (message.characters) {
      obj.characters = message.characters.map(e => e ? Character.toJSON(e) : undefined);
    } else {
      obj.characters = [];
    }
    return obj;
  },
};

export const Character = {
  encode(message: Character, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    for (const v of message.akas) {
      writer.uint32(18).string(v);
    }
    writer.uint32(26).string(message.countryName);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.description);
    for (const v of message.games) {
      Game.encode(v, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(56).int32(message.gender);
    if (message.mugShot !== undefined && message.mugShot !== undefined) {
      CharacterMugShot.encode(message.mugShot, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).string(message.name);
    for (const v of message.people) {
      Person.encode(v, writer.uint32(82).fork()).ldelim();
    }
    writer.uint32(90).string(message.slug);
    writer.uint32(96).int32(message.species);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
    }
    writer.uint32(114).string(message.url);
    writer.uint32(122).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Character {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCharacter } as Character;
    message.akas = [];
    message.games = [];
    message.people = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.akas.push(reader.string());
          break;
        case 3:
          message.countryName = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.games.push(Game.decode(reader, reader.uint32()));
          break;
        case 7:
          message.gender = reader.int32() as any;
          break;
        case 8:
          message.mugShot = CharacterMugShot.decode(reader, reader.uint32());
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.people.push(Person.decode(reader, reader.uint32()));
          break;
        case 11:
          message.slug = reader.string();
          break;
        case 12:
          message.species = reader.int32() as any;
          break;
        case 13:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 14:
          message.url = reader.string();
          break;
        case 15:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Character {
    const message = { ...baseCharacter } as Character;
    message.akas = [];
    message.games = [];
    message.people = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.akas !== undefined && object.akas !== null) {
      for (const e of object.akas) {
        message.akas.push(String(e));
      }
    }
    if (object.countryName !== undefined && object.countryName !== null) {
      message.countryName = String(object.countryName);
    } else {
      message.countryName = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromJSON(e));
      }
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = GenderGenderEnum.fromJSON(object.gender);
    } else {
      message.gender = 0;
    }
    if (object.mugShot !== undefined && object.mugShot !== null) {
      message.mugShot = CharacterMugShot.fromJSON(object.mugShot);
    } else {
      message.mugShot = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.people !== undefined && object.people !== null) {
      for (const e of object.people) {
        message.people.push(Person.fromJSON(e));
      }
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.species !== undefined && object.species !== null) {
      message.species = CharacterSpeciesEnum.fromJSON(object.species);
    } else {
      message.species = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Character>): Character {
    const message = { ...baseCharacter } as Character;
    message.akas = [];
    message.games = [];
    message.people = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.akas !== undefined && object.akas !== null) {
      for (const e of object.akas) {
        message.akas.push(e);
      }
    }
    if (object.countryName !== undefined && object.countryName !== null) {
      message.countryName = object.countryName;
    } else {
      message.countryName = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromPartial(e));
      }
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = object.gender;
    } else {
      message.gender = 0;
    }
    if (object.mugShot !== undefined && object.mugShot !== null) {
      message.mugShot = CharacterMugShot.fromPartial(object.mugShot);
    } else {
      message.mugShot = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.people !== undefined && object.people !== null) {
      for (const e of object.people) {
        message.people.push(Person.fromPartial(e));
      }
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.species !== undefined && object.species !== null) {
      message.species = object.species;
    } else {
      message.species = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Character): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    if (message.akas) {
      obj.akas = message.akas.map(e => e || "");
    } else {
      obj.akas = [];
    }
    obj.countryName = message.countryName || "";
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.description = message.description || "";
    if (message.games) {
      obj.games = message.games.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    obj.gender = GenderGenderEnum.toJSON(message.gender);
    obj.mugShot = message.mugShot ? CharacterMugShot.toJSON(message.mugShot) : undefined;
    obj.name = message.name || "";
    if (message.people) {
      obj.people = message.people.map(e => e ? Person.toJSON(e) : undefined);
    } else {
      obj.people = [];
    }
    obj.slug = message.slug || "";
    obj.species = CharacterSpeciesEnum.toJSON(message.species);
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const CharacterMugShotResult = {
  encode(message: CharacterMugShotResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.charactermugshots) {
      CharacterMugShot.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CharacterMugShotResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCharacterMugShotResult } as CharacterMugShotResult;
    message.charactermugshots = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.charactermugshots.push(CharacterMugShot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CharacterMugShotResult {
    const message = { ...baseCharacterMugShotResult } as CharacterMugShotResult;
    message.charactermugshots = [];
    if (object.charactermugshots !== undefined && object.charactermugshots !== null) {
      for (const e of object.charactermugshots) {
        message.charactermugshots.push(CharacterMugShot.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CharacterMugShotResult>): CharacterMugShotResult {
    const message = { ...baseCharacterMugShotResult } as CharacterMugShotResult;
    message.charactermugshots = [];
    if (object.charactermugshots !== undefined && object.charactermugshots !== null) {
      for (const e of object.charactermugshots) {
        message.charactermugshots.push(CharacterMugShot.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CharacterMugShotResult): unknown {
    const obj: any = {};
    if (message.charactermugshots) {
      obj.charactermugshots = message.charactermugshots.map(e => e ? CharacterMugShot.toJSON(e) : undefined);
    } else {
      obj.charactermugshots = [];
    }
    return obj;
  },
};

export const CharacterMugShot = {
  encode(message: CharacterMugShot, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    writer.uint32(32).int32(message.height);
    writer.uint32(42).string(message.imageId);
    writer.uint32(50).string(message.url);
    writer.uint32(56).int32(message.width);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CharacterMugShot {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCharacterMugShot } as CharacterMugShot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.imageId = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.width = reader.int32();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CharacterMugShot {
    const message = { ...baseCharacterMugShot } as CharacterMugShot;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<CharacterMugShot>): CharacterMugShot {
    const message = { ...baseCharacterMugShot } as CharacterMugShot;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: CharacterMugShot): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const CollectionResult = {
  encode(message: CollectionResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.collections) {
      Collection.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CollectionResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCollectionResult } as CollectionResult;
    message.collections = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CollectionResult {
    const message = { ...baseCollectionResult } as CollectionResult;
    message.collections = [];
    if (object.collections !== undefined && object.collections !== null) {
      for (const e of object.collections) {
        message.collections.push(Collection.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CollectionResult>): CollectionResult {
    const message = { ...baseCollectionResult } as CollectionResult;
    message.collections = [];
    if (object.collections !== undefined && object.collections !== null) {
      for (const e of object.collections) {
        message.collections.push(Collection.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CollectionResult): unknown {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toJSON(e) : undefined);
    } else {
      obj.collections = [];
    }
    return obj;
  },
};

export const Collection = {
  encode(message: Collection, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.games) {
      Game.encode(v, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.name);
    writer.uint32(42).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).string(message.url);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Collection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCollection } as Collection;
    message.games = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.games.push(Game.decode(reader, reader.uint32()));
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.slug = reader.string();
          break;
        case 6:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.url = reader.string();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Collection {
    const message = { ...baseCollection } as Collection;
    message.games = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromJSON(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Collection>): Collection {
    const message = { ...baseCollection } as Collection;
    message.games = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromPartial(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Collection): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    if (message.games) {
      obj.games = message.games.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    obj.name = message.name || "";
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const CompanyResult = {
  encode(message: CompanyResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.companies) {
      Company.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CompanyResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompanyResult } as CompanyResult;
    message.companies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.companies.push(Company.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompanyResult {
    const message = { ...baseCompanyResult } as CompanyResult;
    message.companies = [];
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(Company.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CompanyResult>): CompanyResult {
    const message = { ...baseCompanyResult } as CompanyResult;
    message.companies = [];
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(Company.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CompanyResult): unknown {
    const obj: any = {};
    if (message.companies) {
      obj.companies = message.companies.map(e => e ? Company.toJSON(e) : undefined);
    } else {
      obj.companies = [];
    }
    return obj;
  },
};

export const Company = {
  encode(message: Company, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.changeDate !== undefined && message.changeDate !== undefined) {
      Timestamp.encode(toTimestamp(message.changeDate), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).int32(message.changeDateCategory);
    if (message.changedCompanyId !== undefined && message.changedCompanyId !== undefined) {
      Company.encode(message.changedCompanyId, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).int32(message.country);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).string(message.description);
    for (const v of message.developed) {
      Game.encode(v, writer.uint32(66).fork()).ldelim();
    }
    if (message.logo !== undefined && message.logo !== undefined) {
      CompanyLogo.encode(message.logo, writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(82).string(message.name);
    if (message.parent !== undefined && message.parent !== undefined) {
      Company.encode(message.parent, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.published) {
      Game.encode(v, writer.uint32(98).fork()).ldelim();
    }
    writer.uint32(106).string(message.slug);
    if (message.startDate !== undefined && message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(114).fork()).ldelim();
    }
    writer.uint32(120).int32(message.startDateCategory);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(130).fork()).ldelim();
    }
    writer.uint32(138).string(message.url);
    for (const v of message.websites) {
      CompanyWebsite.encode(v, writer.uint32(146).fork()).ldelim();
    }
    writer.uint32(154).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Company {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompany } as Company;
    message.developed = [];
    message.published = [];
    message.websites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.changeDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.changeDateCategory = reader.int32() as any;
          break;
        case 4:
          message.changedCompanyId = Company.decode(reader, reader.uint32());
          break;
        case 5:
          message.country = reader.int32();
          break;
        case 6:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.description = reader.string();
          break;
        case 8:
          message.developed.push(Game.decode(reader, reader.uint32()));
          break;
        case 9:
          message.logo = CompanyLogo.decode(reader, reader.uint32());
          break;
        case 10:
          message.name = reader.string();
          break;
        case 11:
          message.parent = Company.decode(reader, reader.uint32());
          break;
        case 12:
          message.published.push(Game.decode(reader, reader.uint32()));
          break;
        case 13:
          message.slug = reader.string();
          break;
        case 14:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 15:
          message.startDateCategory = reader.int32() as any;
          break;
        case 16:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 17:
          message.url = reader.string();
          break;
        case 18:
          message.websites.push(CompanyWebsite.decode(reader, reader.uint32()));
          break;
        case 19:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Company {
    const message = { ...baseCompany } as Company;
    message.developed = [];
    message.published = [];
    message.websites = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.changeDate !== undefined && object.changeDate !== null) {
      message.changeDate = fromJsonTimestamp(object.changeDate);
    } else {
      message.changeDate = undefined;
    }
    if (object.changeDateCategory !== undefined && object.changeDateCategory !== null) {
      message.changeDateCategory = DateFormatChangeDateCategoryEnum.fromJSON(object.changeDateCategory);
    } else {
      message.changeDateCategory = 0;
    }
    if (object.changedCompanyId !== undefined && object.changedCompanyId !== null) {
      message.changedCompanyId = Company.fromJSON(object.changedCompanyId);
    } else {
      message.changedCompanyId = undefined;
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = Number(object.country);
    } else {
      message.country = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.developed !== undefined && object.developed !== null) {
      for (const e of object.developed) {
        message.developed.push(Game.fromJSON(e));
      }
    }
    if (object.logo !== undefined && object.logo !== null) {
      message.logo = CompanyLogo.fromJSON(object.logo);
    } else {
      message.logo = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = Company.fromJSON(object.parent);
    } else {
      message.parent = undefined;
    }
    if (object.published !== undefined && object.published !== null) {
      for (const e of object.published) {
        message.published.push(Game.fromJSON(e));
      }
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = fromJsonTimestamp(object.startDate);
    } else {
      message.startDate = undefined;
    }
    if (object.startDateCategory !== undefined && object.startDateCategory !== null) {
      message.startDateCategory = DateFormatChangeDateCategoryEnum.fromJSON(object.startDateCategory);
    } else {
      message.startDateCategory = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(CompanyWebsite.fromJSON(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Company>): Company {
    const message = { ...baseCompany } as Company;
    message.developed = [];
    message.published = [];
    message.websites = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.changeDate !== undefined && object.changeDate !== null) {
      message.changeDate = object.changeDate;
    } else {
      message.changeDate = undefined;
    }
    if (object.changeDateCategory !== undefined && object.changeDateCategory !== null) {
      message.changeDateCategory = object.changeDateCategory;
    } else {
      message.changeDateCategory = 0;
    }
    if (object.changedCompanyId !== undefined && object.changedCompanyId !== null) {
      message.changedCompanyId = Company.fromPartial(object.changedCompanyId);
    } else {
      message.changedCompanyId = undefined;
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.developed !== undefined && object.developed !== null) {
      for (const e of object.developed) {
        message.developed.push(Game.fromPartial(e));
      }
    }
    if (object.logo !== undefined && object.logo !== null) {
      message.logo = CompanyLogo.fromPartial(object.logo);
    } else {
      message.logo = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = Company.fromPartial(object.parent);
    } else {
      message.parent = undefined;
    }
    if (object.published !== undefined && object.published !== null) {
      for (const e of object.published) {
        message.published.push(Game.fromPartial(e));
      }
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = object.startDate;
    } else {
      message.startDate = undefined;
    }
    if (object.startDateCategory !== undefined && object.startDateCategory !== null) {
      message.startDateCategory = object.startDateCategory;
    } else {
      message.startDateCategory = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(CompanyWebsite.fromPartial(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Company): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.changeDate = message.changeDate !== undefined ? message.changeDate.toISOString() : null;
    obj.changeDateCategory = DateFormatChangeDateCategoryEnum.toJSON(message.changeDateCategory);
    obj.changedCompanyId = message.changedCompanyId ? Company.toJSON(message.changedCompanyId) : undefined;
    obj.country = message.country || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.description = message.description || "";
    if (message.developed) {
      obj.developed = message.developed.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.developed = [];
    }
    obj.logo = message.logo ? CompanyLogo.toJSON(message.logo) : undefined;
    obj.name = message.name || "";
    obj.parent = message.parent ? Company.toJSON(message.parent) : undefined;
    if (message.published) {
      obj.published = message.published.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.published = [];
    }
    obj.slug = message.slug || "";
    obj.startDate = message.startDate !== undefined ? message.startDate.toISOString() : null;
    obj.startDateCategory = DateFormatChangeDateCategoryEnum.toJSON(message.startDateCategory);
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    if (message.websites) {
      obj.websites = message.websites.map(e => e ? CompanyWebsite.toJSON(e) : undefined);
    } else {
      obj.websites = [];
    }
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const CompanyLogoResult = {
  encode(message: CompanyLogoResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.companylogos) {
      CompanyLogo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CompanyLogoResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompanyLogoResult } as CompanyLogoResult;
    message.companylogos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.companylogos.push(CompanyLogo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompanyLogoResult {
    const message = { ...baseCompanyLogoResult } as CompanyLogoResult;
    message.companylogos = [];
    if (object.companylogos !== undefined && object.companylogos !== null) {
      for (const e of object.companylogos) {
        message.companylogos.push(CompanyLogo.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CompanyLogoResult>): CompanyLogoResult {
    const message = { ...baseCompanyLogoResult } as CompanyLogoResult;
    message.companylogos = [];
    if (object.companylogos !== undefined && object.companylogos !== null) {
      for (const e of object.companylogos) {
        message.companylogos.push(CompanyLogo.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CompanyLogoResult): unknown {
    const obj: any = {};
    if (message.companylogos) {
      obj.companylogos = message.companylogos.map(e => e ? CompanyLogo.toJSON(e) : undefined);
    } else {
      obj.companylogos = [];
    }
    return obj;
  },
};

export const CompanyLogo = {
  encode(message: CompanyLogo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    writer.uint32(32).int32(message.height);
    writer.uint32(42).string(message.imageId);
    writer.uint32(50).string(message.url);
    writer.uint32(56).int32(message.width);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CompanyLogo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompanyLogo } as CompanyLogo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.imageId = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.width = reader.int32();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompanyLogo {
    const message = { ...baseCompanyLogo } as CompanyLogo;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<CompanyLogo>): CompanyLogo {
    const message = { ...baseCompanyLogo } as CompanyLogo;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: CompanyLogo): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const CompanyWebsiteResult = {
  encode(message: CompanyWebsiteResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.companywebsites) {
      CompanyWebsite.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CompanyWebsiteResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompanyWebsiteResult } as CompanyWebsiteResult;
    message.companywebsites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.companywebsites.push(CompanyWebsite.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompanyWebsiteResult {
    const message = { ...baseCompanyWebsiteResult } as CompanyWebsiteResult;
    message.companywebsites = [];
    if (object.companywebsites !== undefined && object.companywebsites !== null) {
      for (const e of object.companywebsites) {
        message.companywebsites.push(CompanyWebsite.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CompanyWebsiteResult>): CompanyWebsiteResult {
    const message = { ...baseCompanyWebsiteResult } as CompanyWebsiteResult;
    message.companywebsites = [];
    if (object.companywebsites !== undefined && object.companywebsites !== null) {
      for (const e of object.companywebsites) {
        message.companywebsites.push(CompanyWebsite.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CompanyWebsiteResult): unknown {
    const obj: any = {};
    if (message.companywebsites) {
      obj.companywebsites = message.companywebsites.map(e => e ? CompanyWebsite.toJSON(e) : undefined);
    } else {
      obj.companywebsites = [];
    }
    return obj;
  },
};

export const CompanyWebsite = {
  encode(message: CompanyWebsite, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    writer.uint32(24).bool(message.trusted);
    writer.uint32(34).string(message.url);
    writer.uint32(42).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CompanyWebsite {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompanyWebsite } as CompanyWebsite;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.trusted = reader.bool();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompanyWebsite {
    const message = { ...baseCompanyWebsite } as CompanyWebsite;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = WebsiteCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = Boolean(object.trusted);
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<CompanyWebsite>): CompanyWebsite {
    const message = { ...baseCompanyWebsite } as CompanyWebsite;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = object.trusted;
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: CompanyWebsite): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = WebsiteCategoryEnum.toJSON(message.category);
    obj.trusted = message.trusted || false;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const CoverResult = {
  encode(message: CoverResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.covers) {
      Cover.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CoverResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCoverResult } as CoverResult;
    message.covers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.covers.push(Cover.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CoverResult {
    const message = { ...baseCoverResult } as CoverResult;
    message.covers = [];
    if (object.covers !== undefined && object.covers !== null) {
      for (const e of object.covers) {
        message.covers.push(Cover.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CoverResult>): CoverResult {
    const message = { ...baseCoverResult } as CoverResult;
    message.covers = [];
    if (object.covers !== undefined && object.covers !== null) {
      for (const e of object.covers) {
        message.covers.push(Cover.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CoverResult): unknown {
    const obj: any = {};
    if (message.covers) {
      obj.covers = message.covers.map(e => e ? Cover.toJSON(e) : undefined);
    } else {
      obj.covers = [];
    }
    return obj;
  },
};

export const Cover = {
  encode(message: Cover, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).int32(message.height);
    writer.uint32(50).string(message.imageId);
    writer.uint32(58).string(message.url);
    writer.uint32(64).int32(message.width);
    writer.uint32(74).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Cover {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCover } as Cover;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 5:
          message.height = reader.int32();
          break;
        case 6:
          message.imageId = reader.string();
          break;
        case 7:
          message.url = reader.string();
          break;
        case 8:
          message.width = reader.int32();
          break;
        case 9:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Cover {
    const message = { ...baseCover } as Cover;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Cover>): Cover {
    const message = { ...baseCover } as Cover;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Cover): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const CreditResult = {
  encode(message: CreditResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.credits) {
      Credit.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CreditResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreditResult } as CreditResult;
    message.credits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credits.push(Credit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreditResult {
    const message = { ...baseCreditResult } as CreditResult;
    message.credits = [];
    if (object.credits !== undefined && object.credits !== null) {
      for (const e of object.credits) {
        message.credits.push(Credit.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreditResult>): CreditResult {
    const message = { ...baseCreditResult } as CreditResult;
    message.credits = [];
    if (object.credits !== undefined && object.credits !== null) {
      for (const e of object.credits) {
        message.credits.push(Credit.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CreditResult): unknown {
    const obj: any = {};
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? Credit.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }
    return obj;
  },
};

export const Credit = {
  encode(message: Credit, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    if (message.character !== undefined && message.character !== undefined) {
      Character.encode(message.character, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.characterCreditedName);
    writer.uint32(42).string(message.comment);
    if (message.company !== undefined && message.company !== undefined) {
      Company.encode(message.company, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(56).int32(message.country);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).string(message.creditedName);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(82).fork()).ldelim();
    }
    if (message.person !== undefined && message.person !== undefined) {
      Person.encode(message.person, writer.uint32(90).fork()).ldelim();
    }
    if (message.personTitle !== undefined && message.personTitle !== undefined) {
      Title.encode(message.personTitle, writer.uint32(98).fork()).ldelim();
    }
    writer.uint32(104).int32(message.position);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(114).fork()).ldelim();
    }
    writer.uint32(122).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Credit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredit } as Credit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.character = Character.decode(reader, reader.uint32());
          break;
        case 4:
          message.characterCreditedName = reader.string();
          break;
        case 5:
          message.comment = reader.string();
          break;
        case 6:
          message.company = Company.decode(reader, reader.uint32());
          break;
        case 7:
          message.country = reader.int32();
          break;
        case 8:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.creditedName = reader.string();
          break;
        case 10:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 11:
          message.person = Person.decode(reader, reader.uint32());
          break;
        case 12:
          message.personTitle = Title.decode(reader, reader.uint32());
          break;
        case 13:
          message.position = reader.int32();
          break;
        case 14:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 15:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Credit {
    const message = { ...baseCredit } as Credit;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = CreditCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.character !== undefined && object.character !== null) {
      message.character = Character.fromJSON(object.character);
    } else {
      message.character = undefined;
    }
    if (object.characterCreditedName !== undefined && object.characterCreditedName !== null) {
      message.characterCreditedName = String(object.characterCreditedName);
    } else {
      message.characterCreditedName = "";
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = String(object.comment);
    } else {
      message.comment = "";
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = Company.fromJSON(object.company);
    } else {
      message.company = undefined;
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = Number(object.country);
    } else {
      message.country = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.creditedName !== undefined && object.creditedName !== null) {
      message.creditedName = String(object.creditedName);
    } else {
      message.creditedName = "";
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.person !== undefined && object.person !== null) {
      message.person = Person.fromJSON(object.person);
    } else {
      message.person = undefined;
    }
    if (object.personTitle !== undefined && object.personTitle !== null) {
      message.personTitle = Title.fromJSON(object.personTitle);
    } else {
      message.personTitle = undefined;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = Number(object.position);
    } else {
      message.position = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Credit>): Credit {
    const message = { ...baseCredit } as Credit;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.character !== undefined && object.character !== null) {
      message.character = Character.fromPartial(object.character);
    } else {
      message.character = undefined;
    }
    if (object.characterCreditedName !== undefined && object.characterCreditedName !== null) {
      message.characterCreditedName = object.characterCreditedName;
    } else {
      message.characterCreditedName = "";
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = object.comment;
    } else {
      message.comment = "";
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = Company.fromPartial(object.company);
    } else {
      message.company = undefined;
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.creditedName !== undefined && object.creditedName !== null) {
      message.creditedName = object.creditedName;
    } else {
      message.creditedName = "";
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.person !== undefined && object.person !== null) {
      message.person = Person.fromPartial(object.person);
    } else {
      message.person = undefined;
    }
    if (object.personTitle !== undefined && object.personTitle !== null) {
      message.personTitle = Title.fromPartial(object.personTitle);
    } else {
      message.personTitle = undefined;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    } else {
      message.position = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Credit): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = CreditCategoryEnum.toJSON(message.category);
    obj.character = message.character ? Character.toJSON(message.character) : undefined;
    obj.characterCreditedName = message.characterCreditedName || "";
    obj.comment = message.comment || "";
    obj.company = message.company ? Company.toJSON(message.company) : undefined;
    obj.country = message.country || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.creditedName = message.creditedName || "";
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.person = message.person ? Person.toJSON(message.person) : undefined;
    obj.personTitle = message.personTitle ? Title.toJSON(message.personTitle) : undefined;
    obj.position = message.position || 0;
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const ExternalGameResult = {
  encode(message: ExternalGameResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.externalgames) {
      ExternalGame.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ExternalGameResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalGameResult } as ExternalGameResult;
    message.externalgames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalgames.push(ExternalGame.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExternalGameResult {
    const message = { ...baseExternalGameResult } as ExternalGameResult;
    message.externalgames = [];
    if (object.externalgames !== undefined && object.externalgames !== null) {
      for (const e of object.externalgames) {
        message.externalgames.push(ExternalGame.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExternalGameResult>): ExternalGameResult {
    const message = { ...baseExternalGameResult } as ExternalGameResult;
    message.externalgames = [];
    if (object.externalgames !== undefined && object.externalgames !== null) {
      for (const e of object.externalgames) {
        message.externalgames.push(ExternalGame.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ExternalGameResult): unknown {
    const obj: any = {};
    if (message.externalgames) {
      obj.externalgames = message.externalgames.map(e => e ? ExternalGame.toJSON(e) : undefined);
    } else {
      obj.externalgames = [];
    }
    return obj;
  },
};

export const ExternalGame = {
  encode(message: ExternalGame, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.name);
    writer.uint32(50).string(message.uid);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).string(message.url);
    writer.uint32(72).int32(message.year);
    writer.uint32(80).int32(message.media);
    if (message.platform !== undefined && message.platform !== undefined) {
      Platform.encode(message.platform, writer.uint32(90).fork()).ldelim();
    }
    writer.uint32(98).fork();
    for (const v of message.countries) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(106).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ExternalGame {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalGame } as ExternalGame;
    message.countries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.uid = reader.string();
          break;
        case 7:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.url = reader.string();
          break;
        case 9:
          message.year = reader.int32();
          break;
        case 10:
          message.media = reader.int32() as any;
          break;
        case 11:
          message.platform = Platform.decode(reader, reader.uint32());
          break;
        case 12:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.countries.push(reader.int32());
            }
          } else {
            message.countries.push(reader.int32());
          }
          break;
        case 13:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExternalGame {
    const message = { ...baseExternalGame } as ExternalGame;
    message.countries = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = ExternalGameCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = Number(object.year);
    } else {
      message.year = 0;
    }
    if (object.media !== undefined && object.media !== null) {
      message.media = ExternalGameMediaEnum.fromJSON(object.media);
    } else {
      message.media = 0;
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromJSON(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.countries !== undefined && object.countries !== null) {
      for (const e of object.countries) {
        message.countries.push(Number(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExternalGame>): ExternalGame {
    const message = { ...baseExternalGame } as ExternalGame;
    message.countries = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    } else {
      message.year = 0;
    }
    if (object.media !== undefined && object.media !== null) {
      message.media = object.media;
    } else {
      message.media = 0;
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromPartial(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.countries !== undefined && object.countries !== null) {
      for (const e of object.countries) {
        message.countries.push(e);
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: ExternalGame): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = ExternalGameCategoryEnum.toJSON(message.category);
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.name = message.name || "";
    obj.uid = message.uid || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.year = message.year || 0;
    obj.media = ExternalGameMediaEnum.toJSON(message.media);
    obj.platform = message.platform ? Platform.toJSON(message.platform) : undefined;
    if (message.countries) {
      obj.countries = message.countries.map(e => e || 0);
    } else {
      obj.countries = [];
    }
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const FeedResult = {
  encode(message: FeedResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.feeds) {
      Feed.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FeedResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeedResult } as FeedResult;
    message.feeds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeds.push(Feed.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeedResult {
    const message = { ...baseFeedResult } as FeedResult;
    message.feeds = [];
    if (object.feeds !== undefined && object.feeds !== null) {
      for (const e of object.feeds) {
        message.feeds.push(Feed.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeedResult>): FeedResult {
    const message = { ...baseFeedResult } as FeedResult;
    message.feeds = [];
    if (object.feeds !== undefined && object.feeds !== null) {
      for (const e of object.feeds) {
        message.feeds.push(Feed.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: FeedResult): unknown {
    const obj: any = {};
    if (message.feeds) {
      obj.feeds = message.feeds.map(e => e ? Feed.toJSON(e) : undefined);
    } else {
      obj.feeds = [];
    }
    return obj;
  },
};

export const Feed = {
  encode(message: Feed, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    writer.uint32(26).string(message.content);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).int32(message.feedLikesCount);
    if (message.feedVideo !== undefined && message.feedVideo !== undefined) {
      GameVideo.encode(message.feedVideo, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.games) {
      Game.encode(v, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).string(message.meta);
    if (message.publishedAt !== undefined && message.publishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.publishedAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.pulse !== undefined && message.pulse !== undefined) {
      Pulse.encode(message.pulse, writer.uint32(82).fork()).ldelim();
    }
    writer.uint32(90).string(message.slug);
    writer.uint32(98).string(message.title);
    writer.uint32(106).string(message.uid);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(114).fork()).ldelim();
    }
    writer.uint32(122).string(message.url);
    writer.uint32(128).int32(message.user);
    writer.uint32(138).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Feed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeed } as Feed;
    message.games = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.content = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.feedLikesCount = reader.int32();
          break;
        case 6:
          message.feedVideo = GameVideo.decode(reader, reader.uint32());
          break;
        case 7:
          message.games.push(Game.decode(reader, reader.uint32()));
          break;
        case 8:
          message.meta = reader.string();
          break;
        case 9:
          message.publishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.pulse = Pulse.decode(reader, reader.uint32());
          break;
        case 11:
          message.slug = reader.string();
          break;
        case 12:
          message.title = reader.string();
          break;
        case 13:
          message.uid = reader.string();
          break;
        case 14:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 15:
          message.url = reader.string();
          break;
        case 16:
          message.user = reader.int32();
          break;
        case 17:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Feed {
    const message = { ...baseFeed } as Feed;
    message.games = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = FeedCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.feedLikesCount !== undefined && object.feedLikesCount !== null) {
      message.feedLikesCount = Number(object.feedLikesCount);
    } else {
      message.feedLikesCount = 0;
    }
    if (object.feedVideo !== undefined && object.feedVideo !== null) {
      message.feedVideo = GameVideo.fromJSON(object.feedVideo);
    } else {
      message.feedVideo = undefined;
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromJSON(e));
      }
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = String(object.meta);
    } else {
      message.meta = "";
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = fromJsonTimestamp(object.publishedAt);
    } else {
      message.publishedAt = undefined;
    }
    if (object.pulse !== undefined && object.pulse !== null) {
      message.pulse = Pulse.fromJSON(object.pulse);
    } else {
      message.pulse = undefined;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = Number(object.user);
    } else {
      message.user = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Feed>): Feed {
    const message = { ...baseFeed } as Feed;
    message.games = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.feedLikesCount !== undefined && object.feedLikesCount !== null) {
      message.feedLikesCount = object.feedLikesCount;
    } else {
      message.feedLikesCount = 0;
    }
    if (object.feedVideo !== undefined && object.feedVideo !== null) {
      message.feedVideo = GameVideo.fromPartial(object.feedVideo);
    } else {
      message.feedVideo = undefined;
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromPartial(e));
      }
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = object.meta;
    } else {
      message.meta = "";
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = object.publishedAt;
    } else {
      message.publishedAt = undefined;
    }
    if (object.pulse !== undefined && object.pulse !== null) {
      message.pulse = Pulse.fromPartial(object.pulse);
    } else {
      message.pulse = undefined;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Feed): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = FeedCategoryEnum.toJSON(message.category);
    obj.content = message.content || "";
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.feedLikesCount = message.feedLikesCount || 0;
    obj.feedVideo = message.feedVideo ? GameVideo.toJSON(message.feedVideo) : undefined;
    if (message.games) {
      obj.games = message.games.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    obj.meta = message.meta || "";
    obj.publishedAt = message.publishedAt !== undefined ? message.publishedAt.toISOString() : null;
    obj.pulse = message.pulse ? Pulse.toJSON(message.pulse) : undefined;
    obj.slug = message.slug || "";
    obj.title = message.title || "";
    obj.uid = message.uid || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.user = message.user || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const FeedFollowResult = {
  encode(message: FeedFollowResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.feedfollows) {
      FeedFollow.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FeedFollowResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeedFollowResult } as FeedFollowResult;
    message.feedfollows = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedfollows.push(FeedFollow.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeedFollowResult {
    const message = { ...baseFeedFollowResult } as FeedFollowResult;
    message.feedfollows = [];
    if (object.feedfollows !== undefined && object.feedfollows !== null) {
      for (const e of object.feedfollows) {
        message.feedfollows.push(FeedFollow.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeedFollowResult>): FeedFollowResult {
    const message = { ...baseFeedFollowResult } as FeedFollowResult;
    message.feedfollows = [];
    if (object.feedfollows !== undefined && object.feedfollows !== null) {
      for (const e of object.feedfollows) {
        message.feedfollows.push(FeedFollow.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: FeedFollowResult): unknown {
    const obj: any = {};
    if (message.feedfollows) {
      obj.feedfollows = message.feedfollows.map(e => e ? FeedFollow.toJSON(e) : undefined);
    } else {
      obj.feedfollows = [];
    }
    return obj;
  },
};

export const FeedFollow = {
  encode(message: FeedFollow, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).int32(message.feed);
    if (message.publishedAt !== undefined && message.publishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.publishedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FeedFollow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeedFollow } as FeedFollow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.feed = reader.int32() as any;
          break;
        case 4:
          message.publishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 7:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeedFollow {
    const message = { ...baseFeedFollow } as FeedFollow;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.feed !== undefined && object.feed !== null) {
      message.feed = FeedCategoryEnum.fromJSON(object.feed);
    } else {
      message.feed = 0;
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = fromJsonTimestamp(object.publishedAt);
    } else {
      message.publishedAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeedFollow>): FeedFollow {
    const message = { ...baseFeedFollow } as FeedFollow;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.feed !== undefined && object.feed !== null) {
      message.feed = object.feed;
    } else {
      message.feed = 0;
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = object.publishedAt;
    } else {
      message.publishedAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: FeedFollow): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.feed = FeedCategoryEnum.toJSON(message.feed);
    obj.publishedAt = message.publishedAt !== undefined ? message.publishedAt.toISOString() : null;
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const FollowResult = {
  encode(message: FollowResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.follows) {
      Follow.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FollowResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFollowResult } as FollowResult;
    message.follows = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.follows.push(Follow.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FollowResult {
    const message = { ...baseFollowResult } as FollowResult;
    message.follows = [];
    if (object.follows !== undefined && object.follows !== null) {
      for (const e of object.follows) {
        message.follows.push(Follow.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FollowResult>): FollowResult {
    const message = { ...baseFollowResult } as FollowResult;
    message.follows = [];
    if (object.follows !== undefined && object.follows !== null) {
      for (const e of object.follows) {
        message.follows.push(Follow.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: FollowResult): unknown {
    const obj: any = {};
    if (message.follows) {
      obj.follows = message.follows.map(e => e ? Follow.toJSON(e) : undefined);
    } else {
      obj.follows = [];
    }
    return obj;
  },
};

export const Follow = {
  encode(message: Follow, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(18).fork()).ldelim();
    }
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Follow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFollow } as Follow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 3:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 4:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Follow {
    const message = { ...baseFollow } as Follow;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Follow>): Follow {
    const message = { ...baseFollow } as Follow;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Follow): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const FranchiseResult = {
  encode(message: FranchiseResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.franchises) {
      Franchise.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FranchiseResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFranchiseResult } as FranchiseResult;
    message.franchises = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.franchises.push(Franchise.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FranchiseResult {
    const message = { ...baseFranchiseResult } as FranchiseResult;
    message.franchises = [];
    if (object.franchises !== undefined && object.franchises !== null) {
      for (const e of object.franchises) {
        message.franchises.push(Franchise.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FranchiseResult>): FranchiseResult {
    const message = { ...baseFranchiseResult } as FranchiseResult;
    message.franchises = [];
    if (object.franchises !== undefined && object.franchises !== null) {
      for (const e of object.franchises) {
        message.franchises.push(Franchise.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: FranchiseResult): unknown {
    const obj: any = {};
    if (message.franchises) {
      obj.franchises = message.franchises.map(e => e ? Franchise.toJSON(e) : undefined);
    } else {
      obj.franchises = [];
    }
    return obj;
  },
};

export const Franchise = {
  encode(message: Franchise, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.games) {
      Game.encode(v, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.name);
    writer.uint32(42).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).string(message.url);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Franchise {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFranchise } as Franchise;
    message.games = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.games.push(Game.decode(reader, reader.uint32()));
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.slug = reader.string();
          break;
        case 6:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.url = reader.string();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Franchise {
    const message = { ...baseFranchise } as Franchise;
    message.games = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromJSON(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Franchise>): Franchise {
    const message = { ...baseFranchise } as Franchise;
    message.games = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromPartial(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Franchise): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    if (message.games) {
      obj.games = message.games.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    obj.name = message.name || "";
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const GameResult = {
  encode(message: GameResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.games) {
      Game.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameResult } as GameResult;
    message.games = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.games.push(Game.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameResult {
    const message = { ...baseGameResult } as GameResult;
    message.games = [];
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameResult>): GameResult {
    const message = { ...baseGameResult } as GameResult;
    message.games = [];
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GameResult): unknown {
    const obj: any = {};
    if (message.games) {
      obj.games = message.games.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    return obj;
  },
};

export const Game = {
  encode(message: Game, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    for (const v of message.ageRatings) {
      AgeRating.encode(v, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(25).double(message.aggregatedRating);
    writer.uint32(32).int32(message.aggregatedRatingCount);
    for (const v of message.alternativeNames) {
      AlternativeName.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.artworks) {
      Artwork.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.bundles) {
      Game.encode(v, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(64).int32(message.category);
    if (message.collection !== undefined && message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(74).fork()).ldelim();
    }
    if (message.cover !== undefined && message.cover !== undefined) {
      Cover.encode(message.cover, writer.uint32(82).fork()).ldelim();
    }
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.dlcs) {
      Game.encode(v, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.expansions) {
      Game.encode(v, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.externalGames) {
      ExternalGame.encode(v, writer.uint32(114).fork()).ldelim();
    }
    if (message.firstReleaseDate !== undefined && message.firstReleaseDate !== undefined) {
      Timestamp.encode(toTimestamp(message.firstReleaseDate), writer.uint32(122).fork()).ldelim();
    }
    writer.uint32(128).int32(message.follows);
    if (message.franchise !== undefined && message.franchise !== undefined) {
      Franchise.encode(message.franchise, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.franchises) {
      Franchise.encode(v, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.gameEngines) {
      GameEngine.encode(v, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.gameModes) {
      GameMode.encode(v, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.genres) {
      Genre.encode(v, writer.uint32(170).fork()).ldelim();
    }
    writer.uint32(176).int32(message.hypes);
    for (const v of message.involvedCompanies) {
      InvolvedCompany.encode(v, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.keywords) {
      Keyword.encode(v, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.multiplayerModes) {
      MultiplayerMode.encode(v, writer.uint32(202).fork()).ldelim();
    }
    writer.uint32(210).string(message.name);
    if (message.parentGame !== undefined && message.parentGame !== undefined) {
      Game.encode(message.parentGame, writer.uint32(218).fork()).ldelim();
    }
    for (const v of message.platforms) {
      Platform.encode(v, writer.uint32(226).fork()).ldelim();
    }
    for (const v of message.playerPerspectives) {
      PlayerPerspective.encode(v, writer.uint32(234).fork()).ldelim();
    }
    writer.uint32(241).double(message.popularity);
    writer.uint32(248).int32(message.pulseCount);
    writer.uint32(257).double(message.rating);
    writer.uint32(264).int32(message.ratingCount);
    for (const v of message.releaseDates) {
      ReleaseDate.encode(v, writer.uint32(274).fork()).ldelim();
    }
    for (const v of message.screenshots) {
      Screenshot.encode(v, writer.uint32(282).fork()).ldelim();
    }
    for (const v of message.similarGames) {
      Game.encode(v, writer.uint32(290).fork()).ldelim();
    }
    writer.uint32(298).string(message.slug);
    for (const v of message.standaloneExpansions) {
      Game.encode(v, writer.uint32(306).fork()).ldelim();
    }
    writer.uint32(312).int32(message.status);
    writer.uint32(322).string(message.storyline);
    writer.uint32(330).string(message.summary);
    writer.uint32(338).fork();
    for (const v of message.tags) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.themes) {
      Theme.encode(v, writer.uint32(346).fork()).ldelim();
    }
    if (message.timeToBeat !== undefined && message.timeToBeat !== undefined) {
      TimeToBeat.encode(message.timeToBeat, writer.uint32(354).fork()).ldelim();
    }
    writer.uint32(361).double(message.totalRating);
    writer.uint32(368).int32(message.totalRatingCount);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(378).fork()).ldelim();
    }
    writer.uint32(386).string(message.url);
    if (message.versionParent !== undefined && message.versionParent !== undefined) {
      Game.encode(message.versionParent, writer.uint32(394).fork()).ldelim();
    }
    writer.uint32(402).string(message.versionTitle);
    for (const v of message.videos) {
      GameVideo.encode(v, writer.uint32(410).fork()).ldelim();
    }
    for (const v of message.websites) {
      Website.encode(v, writer.uint32(418).fork()).ldelim();
    }
    writer.uint32(426).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Game {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGame } as Game;
    message.ageRatings = [];
    message.alternativeNames = [];
    message.artworks = [];
    message.bundles = [];
    message.dlcs = [];
    message.expansions = [];
    message.externalGames = [];
    message.franchises = [];
    message.gameEngines = [];
    message.gameModes = [];
    message.genres = [];
    message.involvedCompanies = [];
    message.keywords = [];
    message.multiplayerModes = [];
    message.platforms = [];
    message.playerPerspectives = [];
    message.releaseDates = [];
    message.screenshots = [];
    message.similarGames = [];
    message.standaloneExpansions = [];
    message.tags = [];
    message.themes = [];
    message.videos = [];
    message.websites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.ageRatings.push(AgeRating.decode(reader, reader.uint32()));
          break;
        case 3:
          message.aggregatedRating = reader.double();
          break;
        case 4:
          message.aggregatedRatingCount = reader.int32();
          break;
        case 5:
          message.alternativeNames.push(AlternativeName.decode(reader, reader.uint32()));
          break;
        case 6:
          message.artworks.push(Artwork.decode(reader, reader.uint32()));
          break;
        case 7:
          message.bundles.push(Game.decode(reader, reader.uint32()));
          break;
        case 8:
          message.category = reader.int32() as any;
          break;
        case 9:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        case 10:
          message.cover = Cover.decode(reader, reader.uint32());
          break;
        case 11:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 12:
          message.dlcs.push(Game.decode(reader, reader.uint32()));
          break;
        case 13:
          message.expansions.push(Game.decode(reader, reader.uint32()));
          break;
        case 14:
          message.externalGames.push(ExternalGame.decode(reader, reader.uint32()));
          break;
        case 15:
          message.firstReleaseDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 16:
          message.follows = reader.int32();
          break;
        case 17:
          message.franchise = Franchise.decode(reader, reader.uint32());
          break;
        case 18:
          message.franchises.push(Franchise.decode(reader, reader.uint32()));
          break;
        case 19:
          message.gameEngines.push(GameEngine.decode(reader, reader.uint32()));
          break;
        case 20:
          message.gameModes.push(GameMode.decode(reader, reader.uint32()));
          break;
        case 21:
          message.genres.push(Genre.decode(reader, reader.uint32()));
          break;
        case 22:
          message.hypes = reader.int32();
          break;
        case 23:
          message.involvedCompanies.push(InvolvedCompany.decode(reader, reader.uint32()));
          break;
        case 24:
          message.keywords.push(Keyword.decode(reader, reader.uint32()));
          break;
        case 25:
          message.multiplayerModes.push(MultiplayerMode.decode(reader, reader.uint32()));
          break;
        case 26:
          message.name = reader.string();
          break;
        case 27:
          message.parentGame = Game.decode(reader, reader.uint32());
          break;
        case 28:
          message.platforms.push(Platform.decode(reader, reader.uint32()));
          break;
        case 29:
          message.playerPerspectives.push(PlayerPerspective.decode(reader, reader.uint32()));
          break;
        case 30:
          message.popularity = reader.double();
          break;
        case 31:
          message.pulseCount = reader.int32();
          break;
        case 32:
          message.rating = reader.double();
          break;
        case 33:
          message.ratingCount = reader.int32();
          break;
        case 34:
          message.releaseDates.push(ReleaseDate.decode(reader, reader.uint32()));
          break;
        case 35:
          message.screenshots.push(Screenshot.decode(reader, reader.uint32()));
          break;
        case 36:
          message.similarGames.push(Game.decode(reader, reader.uint32()));
          break;
        case 37:
          message.slug = reader.string();
          break;
        case 38:
          message.standaloneExpansions.push(Game.decode(reader, reader.uint32()));
          break;
        case 39:
          message.status = reader.int32() as any;
          break;
        case 40:
          message.storyline = reader.string();
          break;
        case 41:
          message.summary = reader.string();
          break;
        case 42:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tags.push(reader.int32());
            }
          } else {
            message.tags.push(reader.int32());
          }
          break;
        case 43:
          message.themes.push(Theme.decode(reader, reader.uint32()));
          break;
        case 44:
          message.timeToBeat = TimeToBeat.decode(reader, reader.uint32());
          break;
        case 45:
          message.totalRating = reader.double();
          break;
        case 46:
          message.totalRatingCount = reader.int32();
          break;
        case 47:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 48:
          message.url = reader.string();
          break;
        case 49:
          message.versionParent = Game.decode(reader, reader.uint32());
          break;
        case 50:
          message.versionTitle = reader.string();
          break;
        case 51:
          message.videos.push(GameVideo.decode(reader, reader.uint32()));
          break;
        case 52:
          message.websites.push(Website.decode(reader, reader.uint32()));
          break;
        case 53:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Game {
    const message = { ...baseGame } as Game;
    message.ageRatings = [];
    message.alternativeNames = [];
    message.artworks = [];
    message.bundles = [];
    message.dlcs = [];
    message.expansions = [];
    message.externalGames = [];
    message.franchises = [];
    message.gameEngines = [];
    message.gameModes = [];
    message.genres = [];
    message.involvedCompanies = [];
    message.keywords = [];
    message.multiplayerModes = [];
    message.platforms = [];
    message.playerPerspectives = [];
    message.releaseDates = [];
    message.screenshots = [];
    message.similarGames = [];
    message.standaloneExpansions = [];
    message.tags = [];
    message.themes = [];
    message.videos = [];
    message.websites = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.ageRatings !== undefined && object.ageRatings !== null) {
      for (const e of object.ageRatings) {
        message.ageRatings.push(AgeRating.fromJSON(e));
      }
    }
    if (object.aggregatedRating !== undefined && object.aggregatedRating !== null) {
      message.aggregatedRating = Number(object.aggregatedRating);
    } else {
      message.aggregatedRating = 0;
    }
    if (object.aggregatedRatingCount !== undefined && object.aggregatedRatingCount !== null) {
      message.aggregatedRatingCount = Number(object.aggregatedRatingCount);
    } else {
      message.aggregatedRatingCount = 0;
    }
    if (object.alternativeNames !== undefined && object.alternativeNames !== null) {
      for (const e of object.alternativeNames) {
        message.alternativeNames.push(AlternativeName.fromJSON(e));
      }
    }
    if (object.artworks !== undefined && object.artworks !== null) {
      for (const e of object.artworks) {
        message.artworks.push(Artwork.fromJSON(e));
      }
    }
    if (object.bundles !== undefined && object.bundles !== null) {
      for (const e of object.bundles) {
        message.bundles.push(Game.fromJSON(e));
      }
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = GameCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromJSON(object.collection);
    } else {
      message.collection = undefined;
    }
    if (object.cover !== undefined && object.cover !== null) {
      message.cover = Cover.fromJSON(object.cover);
    } else {
      message.cover = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.dlcs !== undefined && object.dlcs !== null) {
      for (const e of object.dlcs) {
        message.dlcs.push(Game.fromJSON(e));
      }
    }
    if (object.expansions !== undefined && object.expansions !== null) {
      for (const e of object.expansions) {
        message.expansions.push(Game.fromJSON(e));
      }
    }
    if (object.externalGames !== undefined && object.externalGames !== null) {
      for (const e of object.externalGames) {
        message.externalGames.push(ExternalGame.fromJSON(e));
      }
    }
    if (object.firstReleaseDate !== undefined && object.firstReleaseDate !== null) {
      message.firstReleaseDate = fromJsonTimestamp(object.firstReleaseDate);
    } else {
      message.firstReleaseDate = undefined;
    }
    if (object.follows !== undefined && object.follows !== null) {
      message.follows = Number(object.follows);
    } else {
      message.follows = 0;
    }
    if (object.franchise !== undefined && object.franchise !== null) {
      message.franchise = Franchise.fromJSON(object.franchise);
    } else {
      message.franchise = undefined;
    }
    if (object.franchises !== undefined && object.franchises !== null) {
      for (const e of object.franchises) {
        message.franchises.push(Franchise.fromJSON(e));
      }
    }
    if (object.gameEngines !== undefined && object.gameEngines !== null) {
      for (const e of object.gameEngines) {
        message.gameEngines.push(GameEngine.fromJSON(e));
      }
    }
    if (object.gameModes !== undefined && object.gameModes !== null) {
      for (const e of object.gameModes) {
        message.gameModes.push(GameMode.fromJSON(e));
      }
    }
    if (object.genres !== undefined && object.genres !== null) {
      for (const e of object.genres) {
        message.genres.push(Genre.fromJSON(e));
      }
    }
    if (object.hypes !== undefined && object.hypes !== null) {
      message.hypes = Number(object.hypes);
    } else {
      message.hypes = 0;
    }
    if (object.involvedCompanies !== undefined && object.involvedCompanies !== null) {
      for (const e of object.involvedCompanies) {
        message.involvedCompanies.push(InvolvedCompany.fromJSON(e));
      }
    }
    if (object.keywords !== undefined && object.keywords !== null) {
      for (const e of object.keywords) {
        message.keywords.push(Keyword.fromJSON(e));
      }
    }
    if (object.multiplayerModes !== undefined && object.multiplayerModes !== null) {
      for (const e of object.multiplayerModes) {
        message.multiplayerModes.push(MultiplayerMode.fromJSON(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.parentGame !== undefined && object.parentGame !== null) {
      message.parentGame = Game.fromJSON(object.parentGame);
    } else {
      message.parentGame = undefined;
    }
    if (object.platforms !== undefined && object.platforms !== null) {
      for (const e of object.platforms) {
        message.platforms.push(Platform.fromJSON(e));
      }
    }
    if (object.playerPerspectives !== undefined && object.playerPerspectives !== null) {
      for (const e of object.playerPerspectives) {
        message.playerPerspectives.push(PlayerPerspective.fromJSON(e));
      }
    }
    if (object.popularity !== undefined && object.popularity !== null) {
      message.popularity = Number(object.popularity);
    } else {
      message.popularity = 0;
    }
    if (object.pulseCount !== undefined && object.pulseCount !== null) {
      message.pulseCount = Number(object.pulseCount);
    } else {
      message.pulseCount = 0;
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = Number(object.rating);
    } else {
      message.rating = 0;
    }
    if (object.ratingCount !== undefined && object.ratingCount !== null) {
      message.ratingCount = Number(object.ratingCount);
    } else {
      message.ratingCount = 0;
    }
    if (object.releaseDates !== undefined && object.releaseDates !== null) {
      for (const e of object.releaseDates) {
        message.releaseDates.push(ReleaseDate.fromJSON(e));
      }
    }
    if (object.screenshots !== undefined && object.screenshots !== null) {
      for (const e of object.screenshots) {
        message.screenshots.push(Screenshot.fromJSON(e));
      }
    }
    if (object.similarGames !== undefined && object.similarGames !== null) {
      for (const e of object.similarGames) {
        message.similarGames.push(Game.fromJSON(e));
      }
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.standaloneExpansions !== undefined && object.standaloneExpansions !== null) {
      for (const e of object.standaloneExpansions) {
        message.standaloneExpansions.push(Game.fromJSON(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = GameStatusEnum.fromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.storyline !== undefined && object.storyline !== null) {
      message.storyline = String(object.storyline);
    } else {
      message.storyline = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = String(object.summary);
    } else {
      message.summary = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(Number(e));
      }
    }
    if (object.themes !== undefined && object.themes !== null) {
      for (const e of object.themes) {
        message.themes.push(Theme.fromJSON(e));
      }
    }
    if (object.timeToBeat !== undefined && object.timeToBeat !== null) {
      message.timeToBeat = TimeToBeat.fromJSON(object.timeToBeat);
    } else {
      message.timeToBeat = undefined;
    }
    if (object.totalRating !== undefined && object.totalRating !== null) {
      message.totalRating = Number(object.totalRating);
    } else {
      message.totalRating = 0;
    }
    if (object.totalRatingCount !== undefined && object.totalRatingCount !== null) {
      message.totalRatingCount = Number(object.totalRatingCount);
    } else {
      message.totalRatingCount = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.versionParent !== undefined && object.versionParent !== null) {
      message.versionParent = Game.fromJSON(object.versionParent);
    } else {
      message.versionParent = undefined;
    }
    if (object.versionTitle !== undefined && object.versionTitle !== null) {
      message.versionTitle = String(object.versionTitle);
    } else {
      message.versionTitle = "";
    }
    if (object.videos !== undefined && object.videos !== null) {
      for (const e of object.videos) {
        message.videos.push(GameVideo.fromJSON(e));
      }
    }
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(Website.fromJSON(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Game>): Game {
    const message = { ...baseGame } as Game;
    message.ageRatings = [];
    message.alternativeNames = [];
    message.artworks = [];
    message.bundles = [];
    message.dlcs = [];
    message.expansions = [];
    message.externalGames = [];
    message.franchises = [];
    message.gameEngines = [];
    message.gameModes = [];
    message.genres = [];
    message.involvedCompanies = [];
    message.keywords = [];
    message.multiplayerModes = [];
    message.platforms = [];
    message.playerPerspectives = [];
    message.releaseDates = [];
    message.screenshots = [];
    message.similarGames = [];
    message.standaloneExpansions = [];
    message.tags = [];
    message.themes = [];
    message.videos = [];
    message.websites = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.ageRatings !== undefined && object.ageRatings !== null) {
      for (const e of object.ageRatings) {
        message.ageRatings.push(AgeRating.fromPartial(e));
      }
    }
    if (object.aggregatedRating !== undefined && object.aggregatedRating !== null) {
      message.aggregatedRating = object.aggregatedRating;
    } else {
      message.aggregatedRating = 0;
    }
    if (object.aggregatedRatingCount !== undefined && object.aggregatedRatingCount !== null) {
      message.aggregatedRatingCount = object.aggregatedRatingCount;
    } else {
      message.aggregatedRatingCount = 0;
    }
    if (object.alternativeNames !== undefined && object.alternativeNames !== null) {
      for (const e of object.alternativeNames) {
        message.alternativeNames.push(AlternativeName.fromPartial(e));
      }
    }
    if (object.artworks !== undefined && object.artworks !== null) {
      for (const e of object.artworks) {
        message.artworks.push(Artwork.fromPartial(e));
      }
    }
    if (object.bundles !== undefined && object.bundles !== null) {
      for (const e of object.bundles) {
        message.bundles.push(Game.fromPartial(e));
      }
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromPartial(object.collection);
    } else {
      message.collection = undefined;
    }
    if (object.cover !== undefined && object.cover !== null) {
      message.cover = Cover.fromPartial(object.cover);
    } else {
      message.cover = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.dlcs !== undefined && object.dlcs !== null) {
      for (const e of object.dlcs) {
        message.dlcs.push(Game.fromPartial(e));
      }
    }
    if (object.expansions !== undefined && object.expansions !== null) {
      for (const e of object.expansions) {
        message.expansions.push(Game.fromPartial(e));
      }
    }
    if (object.externalGames !== undefined && object.externalGames !== null) {
      for (const e of object.externalGames) {
        message.externalGames.push(ExternalGame.fromPartial(e));
      }
    }
    if (object.firstReleaseDate !== undefined && object.firstReleaseDate !== null) {
      message.firstReleaseDate = object.firstReleaseDate;
    } else {
      message.firstReleaseDate = undefined;
    }
    if (object.follows !== undefined && object.follows !== null) {
      message.follows = object.follows;
    } else {
      message.follows = 0;
    }
    if (object.franchise !== undefined && object.franchise !== null) {
      message.franchise = Franchise.fromPartial(object.franchise);
    } else {
      message.franchise = undefined;
    }
    if (object.franchises !== undefined && object.franchises !== null) {
      for (const e of object.franchises) {
        message.franchises.push(Franchise.fromPartial(e));
      }
    }
    if (object.gameEngines !== undefined && object.gameEngines !== null) {
      for (const e of object.gameEngines) {
        message.gameEngines.push(GameEngine.fromPartial(e));
      }
    }
    if (object.gameModes !== undefined && object.gameModes !== null) {
      for (const e of object.gameModes) {
        message.gameModes.push(GameMode.fromPartial(e));
      }
    }
    if (object.genres !== undefined && object.genres !== null) {
      for (const e of object.genres) {
        message.genres.push(Genre.fromPartial(e));
      }
    }
    if (object.hypes !== undefined && object.hypes !== null) {
      message.hypes = object.hypes;
    } else {
      message.hypes = 0;
    }
    if (object.involvedCompanies !== undefined && object.involvedCompanies !== null) {
      for (const e of object.involvedCompanies) {
        message.involvedCompanies.push(InvolvedCompany.fromPartial(e));
      }
    }
    if (object.keywords !== undefined && object.keywords !== null) {
      for (const e of object.keywords) {
        message.keywords.push(Keyword.fromPartial(e));
      }
    }
    if (object.multiplayerModes !== undefined && object.multiplayerModes !== null) {
      for (const e of object.multiplayerModes) {
        message.multiplayerModes.push(MultiplayerMode.fromPartial(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.parentGame !== undefined && object.parentGame !== null) {
      message.parentGame = Game.fromPartial(object.parentGame);
    } else {
      message.parentGame = undefined;
    }
    if (object.platforms !== undefined && object.platforms !== null) {
      for (const e of object.platforms) {
        message.platforms.push(Platform.fromPartial(e));
      }
    }
    if (object.playerPerspectives !== undefined && object.playerPerspectives !== null) {
      for (const e of object.playerPerspectives) {
        message.playerPerspectives.push(PlayerPerspective.fromPartial(e));
      }
    }
    if (object.popularity !== undefined && object.popularity !== null) {
      message.popularity = object.popularity;
    } else {
      message.popularity = 0;
    }
    if (object.pulseCount !== undefined && object.pulseCount !== null) {
      message.pulseCount = object.pulseCount;
    } else {
      message.pulseCount = 0;
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = object.rating;
    } else {
      message.rating = 0;
    }
    if (object.ratingCount !== undefined && object.ratingCount !== null) {
      message.ratingCount = object.ratingCount;
    } else {
      message.ratingCount = 0;
    }
    if (object.releaseDates !== undefined && object.releaseDates !== null) {
      for (const e of object.releaseDates) {
        message.releaseDates.push(ReleaseDate.fromPartial(e));
      }
    }
    if (object.screenshots !== undefined && object.screenshots !== null) {
      for (const e of object.screenshots) {
        message.screenshots.push(Screenshot.fromPartial(e));
      }
    }
    if (object.similarGames !== undefined && object.similarGames !== null) {
      for (const e of object.similarGames) {
        message.similarGames.push(Game.fromPartial(e));
      }
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.standaloneExpansions !== undefined && object.standaloneExpansions !== null) {
      for (const e of object.standaloneExpansions) {
        message.standaloneExpansions.push(Game.fromPartial(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.storyline !== undefined && object.storyline !== null) {
      message.storyline = object.storyline;
    } else {
      message.storyline = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    } else {
      message.summary = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    if (object.themes !== undefined && object.themes !== null) {
      for (const e of object.themes) {
        message.themes.push(Theme.fromPartial(e));
      }
    }
    if (object.timeToBeat !== undefined && object.timeToBeat !== null) {
      message.timeToBeat = TimeToBeat.fromPartial(object.timeToBeat);
    } else {
      message.timeToBeat = undefined;
    }
    if (object.totalRating !== undefined && object.totalRating !== null) {
      message.totalRating = object.totalRating;
    } else {
      message.totalRating = 0;
    }
    if (object.totalRatingCount !== undefined && object.totalRatingCount !== null) {
      message.totalRatingCount = object.totalRatingCount;
    } else {
      message.totalRatingCount = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.versionParent !== undefined && object.versionParent !== null) {
      message.versionParent = Game.fromPartial(object.versionParent);
    } else {
      message.versionParent = undefined;
    }
    if (object.versionTitle !== undefined && object.versionTitle !== null) {
      message.versionTitle = object.versionTitle;
    } else {
      message.versionTitle = "";
    }
    if (object.videos !== undefined && object.videos !== null) {
      for (const e of object.videos) {
        message.videos.push(GameVideo.fromPartial(e));
      }
    }
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(Website.fromPartial(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Game): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    if (message.ageRatings) {
      obj.ageRatings = message.ageRatings.map(e => e ? AgeRating.toJSON(e) : undefined);
    } else {
      obj.ageRatings = [];
    }
    obj.aggregatedRating = message.aggregatedRating || 0;
    obj.aggregatedRatingCount = message.aggregatedRatingCount || 0;
    if (message.alternativeNames) {
      obj.alternativeNames = message.alternativeNames.map(e => e ? AlternativeName.toJSON(e) : undefined);
    } else {
      obj.alternativeNames = [];
    }
    if (message.artworks) {
      obj.artworks = message.artworks.map(e => e ? Artwork.toJSON(e) : undefined);
    } else {
      obj.artworks = [];
    }
    if (message.bundles) {
      obj.bundles = message.bundles.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.bundles = [];
    }
    obj.category = GameCategoryEnum.toJSON(message.category);
    obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined;
    obj.cover = message.cover ? Cover.toJSON(message.cover) : undefined;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    if (message.dlcs) {
      obj.dlcs = message.dlcs.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.dlcs = [];
    }
    if (message.expansions) {
      obj.expansions = message.expansions.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.expansions = [];
    }
    if (message.externalGames) {
      obj.externalGames = message.externalGames.map(e => e ? ExternalGame.toJSON(e) : undefined);
    } else {
      obj.externalGames = [];
    }
    obj.firstReleaseDate = message.firstReleaseDate !== undefined ? message.firstReleaseDate.toISOString() : null;
    obj.follows = message.follows || 0;
    obj.franchise = message.franchise ? Franchise.toJSON(message.franchise) : undefined;
    if (message.franchises) {
      obj.franchises = message.franchises.map(e => e ? Franchise.toJSON(e) : undefined);
    } else {
      obj.franchises = [];
    }
    if (message.gameEngines) {
      obj.gameEngines = message.gameEngines.map(e => e ? GameEngine.toJSON(e) : undefined);
    } else {
      obj.gameEngines = [];
    }
    if (message.gameModes) {
      obj.gameModes = message.gameModes.map(e => e ? GameMode.toJSON(e) : undefined);
    } else {
      obj.gameModes = [];
    }
    if (message.genres) {
      obj.genres = message.genres.map(e => e ? Genre.toJSON(e) : undefined);
    } else {
      obj.genres = [];
    }
    obj.hypes = message.hypes || 0;
    if (message.involvedCompanies) {
      obj.involvedCompanies = message.involvedCompanies.map(e => e ? InvolvedCompany.toJSON(e) : undefined);
    } else {
      obj.involvedCompanies = [];
    }
    if (message.keywords) {
      obj.keywords = message.keywords.map(e => e ? Keyword.toJSON(e) : undefined);
    } else {
      obj.keywords = [];
    }
    if (message.multiplayerModes) {
      obj.multiplayerModes = message.multiplayerModes.map(e => e ? MultiplayerMode.toJSON(e) : undefined);
    } else {
      obj.multiplayerModes = [];
    }
    obj.name = message.name || "";
    obj.parentGame = message.parentGame ? Game.toJSON(message.parentGame) : undefined;
    if (message.platforms) {
      obj.platforms = message.platforms.map(e => e ? Platform.toJSON(e) : undefined);
    } else {
      obj.platforms = [];
    }
    if (message.playerPerspectives) {
      obj.playerPerspectives = message.playerPerspectives.map(e => e ? PlayerPerspective.toJSON(e) : undefined);
    } else {
      obj.playerPerspectives = [];
    }
    obj.popularity = message.popularity || 0;
    obj.pulseCount = message.pulseCount || 0;
    obj.rating = message.rating || 0;
    obj.ratingCount = message.ratingCount || 0;
    if (message.releaseDates) {
      obj.releaseDates = message.releaseDates.map(e => e ? ReleaseDate.toJSON(e) : undefined);
    } else {
      obj.releaseDates = [];
    }
    if (message.screenshots) {
      obj.screenshots = message.screenshots.map(e => e ? Screenshot.toJSON(e) : undefined);
    } else {
      obj.screenshots = [];
    }
    if (message.similarGames) {
      obj.similarGames = message.similarGames.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.similarGames = [];
    }
    obj.slug = message.slug || "";
    if (message.standaloneExpansions) {
      obj.standaloneExpansions = message.standaloneExpansions.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.standaloneExpansions = [];
    }
    obj.status = GameStatusEnum.toJSON(message.status);
    obj.storyline = message.storyline || "";
    obj.summary = message.summary || "";
    if (message.tags) {
      obj.tags = message.tags.map(e => e || 0);
    } else {
      obj.tags = [];
    }
    if (message.themes) {
      obj.themes = message.themes.map(e => e ? Theme.toJSON(e) : undefined);
    } else {
      obj.themes = [];
    }
    obj.timeToBeat = message.timeToBeat ? TimeToBeat.toJSON(message.timeToBeat) : undefined;
    obj.totalRating = message.totalRating || 0;
    obj.totalRatingCount = message.totalRatingCount || 0;
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.versionParent = message.versionParent ? Game.toJSON(message.versionParent) : undefined;
    obj.versionTitle = message.versionTitle || "";
    if (message.videos) {
      obj.videos = message.videos.map(e => e ? GameVideo.toJSON(e) : undefined);
    } else {
      obj.videos = [];
    }
    if (message.websites) {
      obj.websites = message.websites.map(e => e ? Website.toJSON(e) : undefined);
    } else {
      obj.websites = [];
    }
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const GameEngineResult = {
  encode(message: GameEngineResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.gameengines) {
      GameEngine.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameEngineResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEngineResult } as GameEngineResult;
    message.gameengines = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameengines.push(GameEngine.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameEngineResult {
    const message = { ...baseGameEngineResult } as GameEngineResult;
    message.gameengines = [];
    if (object.gameengines !== undefined && object.gameengines !== null) {
      for (const e of object.gameengines) {
        message.gameengines.push(GameEngine.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameEngineResult>): GameEngineResult {
    const message = { ...baseGameEngineResult } as GameEngineResult;
    message.gameengines = [];
    if (object.gameengines !== undefined && object.gameengines !== null) {
      for (const e of object.gameengines) {
        message.gameengines.push(GameEngine.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GameEngineResult): unknown {
    const obj: any = {};
    if (message.gameengines) {
      obj.gameengines = message.gameengines.map(e => e ? GameEngine.toJSON(e) : undefined);
    } else {
      obj.gameengines = [];
    }
    return obj;
  },
};

export const GameEngine = {
  encode(message: GameEngine, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    for (const v of message.companies) {
      Company.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.description);
    if (message.logo !== undefined && message.logo !== undefined) {
      GameEngineLogo.encode(message.logo, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.name);
    for (const v of message.platforms) {
      Platform.encode(v, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(82).string(message.url);
    writer.uint32(90).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameEngine {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEngine } as GameEngine;
    message.companies = [];
    message.platforms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.companies.push(Company.decode(reader, reader.uint32()));
          break;
        case 3:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.logo = GameEngineLogo.decode(reader, reader.uint32());
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.platforms.push(Platform.decode(reader, reader.uint32()));
          break;
        case 8:
          message.slug = reader.string();
          break;
        case 9:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.url = reader.string();
          break;
        case 11:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameEngine {
    const message = { ...baseGameEngine } as GameEngine;
    message.companies = [];
    message.platforms = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(Company.fromJSON(e));
      }
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.logo !== undefined && object.logo !== null) {
      message.logo = GameEngineLogo.fromJSON(object.logo);
    } else {
      message.logo = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.platforms !== undefined && object.platforms !== null) {
      for (const e of object.platforms) {
        message.platforms.push(Platform.fromJSON(e));
      }
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameEngine>): GameEngine {
    const message = { ...baseGameEngine } as GameEngine;
    message.companies = [];
    message.platforms = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(Company.fromPartial(e));
      }
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.logo !== undefined && object.logo !== null) {
      message.logo = GameEngineLogo.fromPartial(object.logo);
    } else {
      message.logo = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.platforms !== undefined && object.platforms !== null) {
      for (const e of object.platforms) {
        message.platforms.push(Platform.fromPartial(e));
      }
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: GameEngine): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    if (message.companies) {
      obj.companies = message.companies.map(e => e ? Company.toJSON(e) : undefined);
    } else {
      obj.companies = [];
    }
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.description = message.description || "";
    obj.logo = message.logo ? GameEngineLogo.toJSON(message.logo) : undefined;
    obj.name = message.name || "";
    if (message.platforms) {
      obj.platforms = message.platforms.map(e => e ? Platform.toJSON(e) : undefined);
    } else {
      obj.platforms = [];
    }
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const GameEngineLogoResult = {
  encode(message: GameEngineLogoResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.gameenginelogos) {
      GameEngineLogo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameEngineLogoResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEngineLogoResult } as GameEngineLogoResult;
    message.gameenginelogos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameenginelogos.push(GameEngineLogo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameEngineLogoResult {
    const message = { ...baseGameEngineLogoResult } as GameEngineLogoResult;
    message.gameenginelogos = [];
    if (object.gameenginelogos !== undefined && object.gameenginelogos !== null) {
      for (const e of object.gameenginelogos) {
        message.gameenginelogos.push(GameEngineLogo.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameEngineLogoResult>): GameEngineLogoResult {
    const message = { ...baseGameEngineLogoResult } as GameEngineLogoResult;
    message.gameenginelogos = [];
    if (object.gameenginelogos !== undefined && object.gameenginelogos !== null) {
      for (const e of object.gameenginelogos) {
        message.gameenginelogos.push(GameEngineLogo.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GameEngineLogoResult): unknown {
    const obj: any = {};
    if (message.gameenginelogos) {
      obj.gameenginelogos = message.gameenginelogos.map(e => e ? GameEngineLogo.toJSON(e) : undefined);
    } else {
      obj.gameenginelogos = [];
    }
    return obj;
  },
};

export const GameEngineLogo = {
  encode(message: GameEngineLogo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    writer.uint32(32).int32(message.height);
    writer.uint32(42).string(message.imageId);
    writer.uint32(50).string(message.url);
    writer.uint32(56).int32(message.width);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameEngineLogo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEngineLogo } as GameEngineLogo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.imageId = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.width = reader.int32();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameEngineLogo {
    const message = { ...baseGameEngineLogo } as GameEngineLogo;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameEngineLogo>): GameEngineLogo {
    const message = { ...baseGameEngineLogo } as GameEngineLogo;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: GameEngineLogo): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const GameModeResult = {
  encode(message: GameModeResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.gamemodes) {
      GameMode.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameModeResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameModeResult } as GameModeResult;
    message.gamemodes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gamemodes.push(GameMode.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameModeResult {
    const message = { ...baseGameModeResult } as GameModeResult;
    message.gamemodes = [];
    if (object.gamemodes !== undefined && object.gamemodes !== null) {
      for (const e of object.gamemodes) {
        message.gamemodes.push(GameMode.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameModeResult>): GameModeResult {
    const message = { ...baseGameModeResult } as GameModeResult;
    message.gamemodes = [];
    if (object.gamemodes !== undefined && object.gamemodes !== null) {
      for (const e of object.gamemodes) {
        message.gamemodes.push(GameMode.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GameModeResult): unknown {
    const obj: any = {};
    if (message.gamemodes) {
      obj.gamemodes = message.gamemodes.map(e => e ? GameMode.toJSON(e) : undefined);
    } else {
      obj.gamemodes = [];
    }
    return obj;
  },
};

export const GameMode = {
  encode(message: GameMode, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.url);
    writer.uint32(58).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameMode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameMode } as GameMode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.slug = reader.string();
          break;
        case 5:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameMode {
    const message = { ...baseGameMode } as GameMode;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameMode>): GameMode {
    const message = { ...baseGameMode } as GameMode;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: GameMode): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.name = message.name || "";
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const GameVersionResult = {
  encode(message: GameVersionResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.gameversions) {
      GameVersion.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameVersionResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameVersionResult } as GameVersionResult;
    message.gameversions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameversions.push(GameVersion.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameVersionResult {
    const message = { ...baseGameVersionResult } as GameVersionResult;
    message.gameversions = [];
    if (object.gameversions !== undefined && object.gameversions !== null) {
      for (const e of object.gameversions) {
        message.gameversions.push(GameVersion.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameVersionResult>): GameVersionResult {
    const message = { ...baseGameVersionResult } as GameVersionResult;
    message.gameversions = [];
    if (object.gameversions !== undefined && object.gameversions !== null) {
      for (const e of object.gameversions) {
        message.gameversions.push(GameVersion.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GameVersionResult): unknown {
    const obj: any = {};
    if (message.gameversions) {
      obj.gameversions = message.gameversions.map(e => e ? GameVersion.toJSON(e) : undefined);
    } else {
      obj.gameversions = [];
    }
    return obj;
  },
};

export const GameVersion = {
  encode(message: GameVersion, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.features) {
      GameVersionFeature.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.games) {
      Game.encode(v, writer.uint32(42).fork()).ldelim();
    }
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).string(message.url);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameVersion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameVersion } as GameVersion;
    message.features = [];
    message.games = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.features.push(GameVersionFeature.decode(reader, reader.uint32()));
          break;
        case 4:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 5:
          message.games.push(Game.decode(reader, reader.uint32()));
          break;
        case 6:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.url = reader.string();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameVersion {
    const message = { ...baseGameVersion } as GameVersion;
    message.features = [];
    message.games = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.features !== undefined && object.features !== null) {
      for (const e of object.features) {
        message.features.push(GameVersionFeature.fromJSON(e));
      }
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromJSON(e));
      }
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameVersion>): GameVersion {
    const message = { ...baseGameVersion } as GameVersion;
    message.features = [];
    message.games = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.features !== undefined && object.features !== null) {
      for (const e of object.features) {
        message.features.push(GameVersionFeature.fromPartial(e));
      }
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromPartial(e));
      }
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: GameVersion): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    if (message.features) {
      obj.features = message.features.map(e => e ? GameVersionFeature.toJSON(e) : undefined);
    } else {
      obj.features = [];
    }
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    if (message.games) {
      obj.games = message.games.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const GameVersionFeatureResult = {
  encode(message: GameVersionFeatureResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.gameversionfeatures) {
      GameVersionFeature.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameVersionFeatureResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameVersionFeatureResult } as GameVersionFeatureResult;
    message.gameversionfeatures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameversionfeatures.push(GameVersionFeature.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameVersionFeatureResult {
    const message = { ...baseGameVersionFeatureResult } as GameVersionFeatureResult;
    message.gameversionfeatures = [];
    if (object.gameversionfeatures !== undefined && object.gameversionfeatures !== null) {
      for (const e of object.gameversionfeatures) {
        message.gameversionfeatures.push(GameVersionFeature.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameVersionFeatureResult>): GameVersionFeatureResult {
    const message = { ...baseGameVersionFeatureResult } as GameVersionFeatureResult;
    message.gameversionfeatures = [];
    if (object.gameversionfeatures !== undefined && object.gameversionfeatures !== null) {
      for (const e of object.gameversionfeatures) {
        message.gameversionfeatures.push(GameVersionFeature.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GameVersionFeatureResult): unknown {
    const obj: any = {};
    if (message.gameversionfeatures) {
      obj.gameversionfeatures = message.gameversionfeatures.map(e => e ? GameVersionFeature.toJSON(e) : undefined);
    } else {
      obj.gameversionfeatures = [];
    }
    return obj;
  },
};

export const GameVersionFeature = {
  encode(message: GameVersionFeature, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    writer.uint32(26).string(message.description);
    writer.uint32(32).int32(message.position);
    writer.uint32(42).string(message.title);
    for (const v of message.values) {
      GameVersionFeatureValue.encode(v, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameVersionFeature {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameVersionFeature } as GameVersionFeature;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.position = reader.int32();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.values.push(GameVersionFeatureValue.decode(reader, reader.uint32()));
          break;
        case 7:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameVersionFeature {
    const message = { ...baseGameVersionFeature } as GameVersionFeature;
    message.values = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = GameVersionFeatureCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = Number(object.position);
    } else {
      message.position = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(GameVersionFeatureValue.fromJSON(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameVersionFeature>): GameVersionFeature {
    const message = { ...baseGameVersionFeature } as GameVersionFeature;
    message.values = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    } else {
      message.position = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(GameVersionFeatureValue.fromPartial(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: GameVersionFeature): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = GameVersionFeatureCategoryEnum.toJSON(message.category);
    obj.description = message.description || "";
    obj.position = message.position || 0;
    obj.title = message.title || "";
    if (message.values) {
      obj.values = message.values.map(e => e ? GameVersionFeatureValue.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const GameVersionFeatureValueResult = {
  encode(message: GameVersionFeatureValueResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.gameversionfeaturevalues) {
      GameVersionFeatureValue.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameVersionFeatureValueResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameVersionFeatureValueResult } as GameVersionFeatureValueResult;
    message.gameversionfeaturevalues = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameversionfeaturevalues.push(GameVersionFeatureValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameVersionFeatureValueResult {
    const message = { ...baseGameVersionFeatureValueResult } as GameVersionFeatureValueResult;
    message.gameversionfeaturevalues = [];
    if (object.gameversionfeaturevalues !== undefined && object.gameversionfeaturevalues !== null) {
      for (const e of object.gameversionfeaturevalues) {
        message.gameversionfeaturevalues.push(GameVersionFeatureValue.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameVersionFeatureValueResult>): GameVersionFeatureValueResult {
    const message = { ...baseGameVersionFeatureValueResult } as GameVersionFeatureValueResult;
    message.gameversionfeaturevalues = [];
    if (object.gameversionfeaturevalues !== undefined && object.gameversionfeaturevalues !== null) {
      for (const e of object.gameversionfeaturevalues) {
        message.gameversionfeaturevalues.push(GameVersionFeatureValue.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GameVersionFeatureValueResult): unknown {
    const obj: any = {};
    if (message.gameversionfeaturevalues) {
      obj.gameversionfeaturevalues = message.gameversionfeaturevalues.map(e => e ? GameVersionFeatureValue.toJSON(e) : undefined);
    } else {
      obj.gameversionfeaturevalues = [];
    }
    return obj;
  },
};

export const GameVersionFeatureValue = {
  encode(message: GameVersionFeatureValue, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(18).fork()).ldelim();
    }
    if (message.gameFeature !== undefined && message.gameFeature !== undefined) {
      GameVersionFeature.encode(message.gameFeature, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).int32(message.includedFeature);
    writer.uint32(42).string(message.note);
    writer.uint32(50).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameVersionFeatureValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameVersionFeatureValue } as GameVersionFeatureValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 3:
          message.gameFeature = GameVersionFeature.decode(reader, reader.uint32());
          break;
        case 4:
          message.includedFeature = reader.int32() as any;
          break;
        case 5:
          message.note = reader.string();
          break;
        case 6:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameVersionFeatureValue {
    const message = { ...baseGameVersionFeatureValue } as GameVersionFeatureValue;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.gameFeature !== undefined && object.gameFeature !== null) {
      message.gameFeature = GameVersionFeature.fromJSON(object.gameFeature);
    } else {
      message.gameFeature = undefined;
    }
    if (object.includedFeature !== undefined && object.includedFeature !== null) {
      message.includedFeature = GameVersionFeatureValueIncludedFeatureEnum.fromJSON(object.includedFeature);
    } else {
      message.includedFeature = 0;
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = String(object.note);
    } else {
      message.note = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameVersionFeatureValue>): GameVersionFeatureValue {
    const message = { ...baseGameVersionFeatureValue } as GameVersionFeatureValue;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.gameFeature !== undefined && object.gameFeature !== null) {
      message.gameFeature = GameVersionFeature.fromPartial(object.gameFeature);
    } else {
      message.gameFeature = undefined;
    }
    if (object.includedFeature !== undefined && object.includedFeature !== null) {
      message.includedFeature = object.includedFeature;
    } else {
      message.includedFeature = 0;
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = object.note;
    } else {
      message.note = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: GameVersionFeatureValue): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.gameFeature = message.gameFeature ? GameVersionFeature.toJSON(message.gameFeature) : undefined;
    obj.includedFeature = GameVersionFeatureValueIncludedFeatureEnum.toJSON(message.includedFeature);
    obj.note = message.note || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const GameVideoResult = {
  encode(message: GameVideoResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.gamevideos) {
      GameVideo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameVideoResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameVideoResult } as GameVideoResult;
    message.gamevideos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gamevideos.push(GameVideo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameVideoResult {
    const message = { ...baseGameVideoResult } as GameVideoResult;
    message.gamevideos = [];
    if (object.gamevideos !== undefined && object.gamevideos !== null) {
      for (const e of object.gamevideos) {
        message.gamevideos.push(GameVideo.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameVideoResult>): GameVideoResult {
    const message = { ...baseGameVideoResult } as GameVideoResult;
    message.gamevideos = [];
    if (object.gamevideos !== undefined && object.gamevideos !== null) {
      for (const e of object.gamevideos) {
        message.gamevideos.push(GameVideo.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GameVideoResult): unknown {
    const obj: any = {};
    if (message.gamevideos) {
      obj.gamevideos = message.gamevideos.map(e => e ? GameVideo.toJSON(e) : undefined);
    } else {
      obj.gamevideos = [];
    }
    return obj;
  },
};

export const GameVideo = {
  encode(message: GameVideo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.videoId);
    writer.uint32(42).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GameVideo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameVideo } as GameVideo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.videoId = reader.string();
          break;
        case 5:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GameVideo {
    const message = { ...baseGameVideo } as GameVideo;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.videoId !== undefined && object.videoId !== null) {
      message.videoId = String(object.videoId);
    } else {
      message.videoId = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<GameVideo>): GameVideo {
    const message = { ...baseGameVideo } as GameVideo;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.videoId !== undefined && object.videoId !== null) {
      message.videoId = object.videoId;
    } else {
      message.videoId = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: GameVideo): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.name = message.name || "";
    obj.videoId = message.videoId || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const GenreResult = {
  encode(message: GenreResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.genres) {
      Genre.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GenreResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenreResult } as GenreResult;
    message.genres = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genres.push(Genre.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenreResult {
    const message = { ...baseGenreResult } as GenreResult;
    message.genres = [];
    if (object.genres !== undefined && object.genres !== null) {
      for (const e of object.genres) {
        message.genres.push(Genre.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenreResult>): GenreResult {
    const message = { ...baseGenreResult } as GenreResult;
    message.genres = [];
    if (object.genres !== undefined && object.genres !== null) {
      for (const e of object.genres) {
        message.genres.push(Genre.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GenreResult): unknown {
    const obj: any = {};
    if (message.genres) {
      obj.genres = message.genres.map(e => e ? Genre.toJSON(e) : undefined);
    } else {
      obj.genres = [];
    }
    return obj;
  },
};

export const Genre = {
  encode(message: Genre, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.url);
    writer.uint32(58).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Genre {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenre } as Genre;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.slug = reader.string();
          break;
        case 5:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Genre {
    const message = { ...baseGenre } as Genre;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Genre>): Genre {
    const message = { ...baseGenre } as Genre;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Genre): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.name = message.name || "";
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const InvolvedCompanyResult = {
  encode(message: InvolvedCompanyResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.involvedcompanies) {
      InvolvedCompany.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): InvolvedCompanyResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvolvedCompanyResult } as InvolvedCompanyResult;
    message.involvedcompanies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.involvedcompanies.push(InvolvedCompany.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InvolvedCompanyResult {
    const message = { ...baseInvolvedCompanyResult } as InvolvedCompanyResult;
    message.involvedcompanies = [];
    if (object.involvedcompanies !== undefined && object.involvedcompanies !== null) {
      for (const e of object.involvedcompanies) {
        message.involvedcompanies.push(InvolvedCompany.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InvolvedCompanyResult>): InvolvedCompanyResult {
    const message = { ...baseInvolvedCompanyResult } as InvolvedCompanyResult;
    message.involvedcompanies = [];
    if (object.involvedcompanies !== undefined && object.involvedcompanies !== null) {
      for (const e of object.involvedcompanies) {
        message.involvedcompanies.push(InvolvedCompany.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: InvolvedCompanyResult): unknown {
    const obj: any = {};
    if (message.involvedcompanies) {
      obj.involvedcompanies = message.involvedcompanies.map(e => e ? InvolvedCompany.toJSON(e) : undefined);
    } else {
      obj.involvedcompanies = [];
    }
    return obj;
  },
};

export const InvolvedCompany = {
  encode(message: InvolvedCompany, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.company !== undefined && message.company !== undefined) {
      Company.encode(message.company, writer.uint32(18).fork()).ldelim();
    }
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).bool(message.developer);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(48).bool(message.porting);
    writer.uint32(56).bool(message.publisher);
    writer.uint32(64).bool(message.supporting);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(82).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): InvolvedCompany {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvolvedCompany } as InvolvedCompany;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.company = Company.decode(reader, reader.uint32());
          break;
        case 3:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.developer = reader.bool();
          break;
        case 5:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 6:
          message.porting = reader.bool();
          break;
        case 7:
          message.publisher = reader.bool();
          break;
        case 8:
          message.supporting = reader.bool();
          break;
        case 9:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InvolvedCompany {
    const message = { ...baseInvolvedCompany } as InvolvedCompany;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = Company.fromJSON(object.company);
    } else {
      message.company = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.developer !== undefined && object.developer !== null) {
      message.developer = Boolean(object.developer);
    } else {
      message.developer = false;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.porting !== undefined && object.porting !== null) {
      message.porting = Boolean(object.porting);
    } else {
      message.porting = false;
    }
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = Boolean(object.publisher);
    } else {
      message.publisher = false;
    }
    if (object.supporting !== undefined && object.supporting !== null) {
      message.supporting = Boolean(object.supporting);
    } else {
      message.supporting = false;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<InvolvedCompany>): InvolvedCompany {
    const message = { ...baseInvolvedCompany } as InvolvedCompany;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = Company.fromPartial(object.company);
    } else {
      message.company = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.developer !== undefined && object.developer !== null) {
      message.developer = object.developer;
    } else {
      message.developer = false;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.porting !== undefined && object.porting !== null) {
      message.porting = object.porting;
    } else {
      message.porting = false;
    }
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = object.publisher;
    } else {
      message.publisher = false;
    }
    if (object.supporting !== undefined && object.supporting !== null) {
      message.supporting = object.supporting;
    } else {
      message.supporting = false;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: InvolvedCompany): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.company = message.company ? Company.toJSON(message.company) : undefined;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.developer = message.developer || false;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.porting = message.porting || false;
    obj.publisher = message.publisher || false;
    obj.supporting = message.supporting || false;
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const KeywordResult = {
  encode(message: KeywordResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.keywords) {
      Keyword.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): KeywordResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKeywordResult } as KeywordResult;
    message.keywords = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keywords.push(Keyword.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): KeywordResult {
    const message = { ...baseKeywordResult } as KeywordResult;
    message.keywords = [];
    if (object.keywords !== undefined && object.keywords !== null) {
      for (const e of object.keywords) {
        message.keywords.push(Keyword.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<KeywordResult>): KeywordResult {
    const message = { ...baseKeywordResult } as KeywordResult;
    message.keywords = [];
    if (object.keywords !== undefined && object.keywords !== null) {
      for (const e of object.keywords) {
        message.keywords.push(Keyword.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: KeywordResult): unknown {
    const obj: any = {};
    if (message.keywords) {
      obj.keywords = message.keywords.map(e => e ? Keyword.toJSON(e) : undefined);
    } else {
      obj.keywords = [];
    }
    return obj;
  },
};

export const Keyword = {
  encode(message: Keyword, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.url);
    writer.uint32(58).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Keyword {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKeyword } as Keyword;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.slug = reader.string();
          break;
        case 5:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Keyword {
    const message = { ...baseKeyword } as Keyword;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Keyword>): Keyword {
    const message = { ...baseKeyword } as Keyword;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Keyword): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.name = message.name || "";
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const ListResult = {
  encode(message: ListResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.lists) {
      List.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ListResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListResult } as ListResult;
    message.lists = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lists.push(List.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListResult {
    const message = { ...baseListResult } as ListResult;
    message.lists = [];
    if (object.lists !== undefined && object.lists !== null) {
      for (const e of object.lists) {
        message.lists.push(List.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListResult>): ListResult {
    const message = { ...baseListResult } as ListResult;
    message.lists = [];
    if (object.lists !== undefined && object.lists !== null) {
      for (const e of object.lists) {
        message.lists.push(List.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ListResult): unknown {
    const obj: any = {};
    if (message.lists) {
      obj.lists = message.lists.map(e => e ? List.toJSON(e) : undefined);
    } else {
      obj.lists = [];
    }
    return obj;
  },
};

export const List = {
  encode(message: List, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.description);
    writer.uint32(32).int32(message.entriesCount);
    for (const v of message.listEntries) {
      ListEntry.encode(v, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.listTags) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.listedGames) {
      Game.encode(v, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).string(message.name);
    writer.uint32(72).bool(message.numbering);
    writer.uint32(80).bool(message.private);
    for (const v of message.similarLists) {
      List.encode(v, writer.uint32(90).fork()).ldelim();
    }
    writer.uint32(98).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
    }
    writer.uint32(114).string(message.url);
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(122).fork()).ldelim();
    }
    writer.uint32(130).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): List {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseList } as List;
    message.listEntries = [];
    message.listTags = [];
    message.listedGames = [];
    message.similarLists = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.entriesCount = reader.int32();
          break;
        case 5:
          message.listEntries.push(ListEntry.decode(reader, reader.uint32()));
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.listTags.push(reader.int32());
            }
          } else {
            message.listTags.push(reader.int32());
          }
          break;
        case 7:
          message.listedGames.push(Game.decode(reader, reader.uint32()));
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.numbering = reader.bool();
          break;
        case 10:
          message.private = reader.bool();
          break;
        case 11:
          message.similarLists.push(List.decode(reader, reader.uint32()));
          break;
        case 12:
          message.slug = reader.string();
          break;
        case 13:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 14:
          message.url = reader.string();
          break;
        case 15:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 16:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): List {
    const message = { ...baseList } as List;
    message.listEntries = [];
    message.listTags = [];
    message.listedGames = [];
    message.similarLists = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.entriesCount !== undefined && object.entriesCount !== null) {
      message.entriesCount = Number(object.entriesCount);
    } else {
      message.entriesCount = 0;
    }
    if (object.listEntries !== undefined && object.listEntries !== null) {
      for (const e of object.listEntries) {
        message.listEntries.push(ListEntry.fromJSON(e));
      }
    }
    if (object.listTags !== undefined && object.listTags !== null) {
      for (const e of object.listTags) {
        message.listTags.push(Number(e));
      }
    }
    if (object.listedGames !== undefined && object.listedGames !== null) {
      for (const e of object.listedGames) {
        message.listedGames.push(Game.fromJSON(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.numbering !== undefined && object.numbering !== null) {
      message.numbering = Boolean(object.numbering);
    } else {
      message.numbering = false;
    }
    if (object.private !== undefined && object.private !== null) {
      message.private = Boolean(object.private);
    } else {
      message.private = false;
    }
    if (object.similarLists !== undefined && object.similarLists !== null) {
      for (const e of object.similarLists) {
        message.similarLists.push(List.fromJSON(e));
      }
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<List>): List {
    const message = { ...baseList } as List;
    message.listEntries = [];
    message.listTags = [];
    message.listedGames = [];
    message.similarLists = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.entriesCount !== undefined && object.entriesCount !== null) {
      message.entriesCount = object.entriesCount;
    } else {
      message.entriesCount = 0;
    }
    if (object.listEntries !== undefined && object.listEntries !== null) {
      for (const e of object.listEntries) {
        message.listEntries.push(ListEntry.fromPartial(e));
      }
    }
    if (object.listTags !== undefined && object.listTags !== null) {
      for (const e of object.listTags) {
        message.listTags.push(e);
      }
    }
    if (object.listedGames !== undefined && object.listedGames !== null) {
      for (const e of object.listedGames) {
        message.listedGames.push(Game.fromPartial(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.numbering !== undefined && object.numbering !== null) {
      message.numbering = object.numbering;
    } else {
      message.numbering = false;
    }
    if (object.private !== undefined && object.private !== null) {
      message.private = object.private;
    } else {
      message.private = false;
    }
    if (object.similarLists !== undefined && object.similarLists !== null) {
      for (const e of object.similarLists) {
        message.similarLists.push(List.fromPartial(e));
      }
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: List): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.description = message.description || "";
    obj.entriesCount = message.entriesCount || 0;
    if (message.listEntries) {
      obj.listEntries = message.listEntries.map(e => e ? ListEntry.toJSON(e) : undefined);
    } else {
      obj.listEntries = [];
    }
    if (message.listTags) {
      obj.listTags = message.listTags.map(e => e || 0);
    } else {
      obj.listTags = [];
    }
    if (message.listedGames) {
      obj.listedGames = message.listedGames.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.listedGames = [];
    }
    obj.name = message.name || "";
    obj.numbering = message.numbering || false;
    obj.private = message.private || false;
    if (message.similarLists) {
      obj.similarLists = message.similarLists.map(e => e ? List.toJSON(e) : undefined);
    } else {
      obj.similarLists = [];
    }
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const ListEntryResult = {
  encode(message: ListEntryResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.listentries) {
      ListEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ListEntryResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListEntryResult } as ListEntryResult;
    message.listentries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listentries.push(ListEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListEntryResult {
    const message = { ...baseListEntryResult } as ListEntryResult;
    message.listentries = [];
    if (object.listentries !== undefined && object.listentries !== null) {
      for (const e of object.listentries) {
        message.listentries.push(ListEntry.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListEntryResult>): ListEntryResult {
    const message = { ...baseListEntryResult } as ListEntryResult;
    message.listentries = [];
    if (object.listentries !== undefined && object.listentries !== null) {
      for (const e of object.listentries) {
        message.listentries.push(ListEntry.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ListEntryResult): unknown {
    const obj: any = {};
    if (message.listentries) {
      obj.listentries = message.listentries.map(e => e ? ListEntry.toJSON(e) : undefined);
    } else {
      obj.listentries = [];
    }
    return obj;
  },
};

export const ListEntry = {
  encode(message: ListEntry, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(18).string(message.description);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(26).fork()).ldelim();
    }
    if (message.list !== undefined && message.list !== undefined) {
      List.encode(message.list, writer.uint32(34).fork()).ldelim();
    }
    if (message.platform !== undefined && message.platform !== undefined) {
      Platform.encode(message.platform, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(48).int32(message.position);
    writer.uint32(56).bool(message.private);
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ListEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListEntry } as ListEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 4:
          message.list = List.decode(reader, reader.uint32());
          break;
        case 5:
          message.platform = Platform.decode(reader, reader.uint32());
          break;
        case 6:
          message.position = reader.int32();
          break;
        case 7:
          message.private = reader.bool();
          break;
        case 8:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 9:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListEntry {
    const message = { ...baseListEntry } as ListEntry;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.list !== undefined && object.list !== null) {
      message.list = List.fromJSON(object.list);
    } else {
      message.list = undefined;
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromJSON(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = Number(object.position);
    } else {
      message.position = 0;
    }
    if (object.private !== undefined && object.private !== null) {
      message.private = Boolean(object.private);
    } else {
      message.private = false;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListEntry>): ListEntry {
    const message = { ...baseListEntry } as ListEntry;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.list !== undefined && object.list !== null) {
      message.list = List.fromPartial(object.list);
    } else {
      message.list = undefined;
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromPartial(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    } else {
      message.position = 0;
    }
    if (object.private !== undefined && object.private !== null) {
      message.private = object.private;
    } else {
      message.private = false;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: ListEntry): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.description = message.description || "";
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.list = message.list ? List.toJSON(message.list) : undefined;
    obj.platform = message.platform ? Platform.toJSON(message.platform) : undefined;
    obj.position = message.position || 0;
    obj.private = message.private || false;
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const MultiplayerModeResult = {
  encode(message: MultiplayerModeResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.multiplayermodes) {
      MultiplayerMode.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MultiplayerModeResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMultiplayerModeResult } as MultiplayerModeResult;
    message.multiplayermodes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.multiplayermodes.push(MultiplayerMode.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MultiplayerModeResult {
    const message = { ...baseMultiplayerModeResult } as MultiplayerModeResult;
    message.multiplayermodes = [];
    if (object.multiplayermodes !== undefined && object.multiplayermodes !== null) {
      for (const e of object.multiplayermodes) {
        message.multiplayermodes.push(MultiplayerMode.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MultiplayerModeResult>): MultiplayerModeResult {
    const message = { ...baseMultiplayerModeResult } as MultiplayerModeResult;
    message.multiplayermodes = [];
    if (object.multiplayermodes !== undefined && object.multiplayermodes !== null) {
      for (const e of object.multiplayermodes) {
        message.multiplayermodes.push(MultiplayerMode.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: MultiplayerModeResult): unknown {
    const obj: any = {};
    if (message.multiplayermodes) {
      obj.multiplayermodes = message.multiplayermodes.map(e => e ? MultiplayerMode.toJSON(e) : undefined);
    } else {
      obj.multiplayermodes = [];
    }
    return obj;
  },
};

export const MultiplayerMode = {
  encode(message: MultiplayerMode, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.campaigncoop);
    writer.uint32(24).bool(message.dropin);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).bool(message.lancoop);
    writer.uint32(48).bool(message.offlinecoop);
    writer.uint32(56).int32(message.offlinecoopmax);
    writer.uint32(64).int32(message.offlinemax);
    writer.uint32(72).bool(message.onlinecoop);
    writer.uint32(80).int32(message.onlinecoopmax);
    writer.uint32(88).int32(message.onlinemax);
    if (message.platform !== undefined && message.platform !== undefined) {
      Platform.encode(message.platform, writer.uint32(98).fork()).ldelim();
    }
    writer.uint32(104).bool(message.splitscreen);
    writer.uint32(112).bool(message.splitscreenonline);
    writer.uint32(122).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MultiplayerMode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMultiplayerMode } as MultiplayerMode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.campaigncoop = reader.bool();
          break;
        case 3:
          message.dropin = reader.bool();
          break;
        case 4:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 5:
          message.lancoop = reader.bool();
          break;
        case 6:
          message.offlinecoop = reader.bool();
          break;
        case 7:
          message.offlinecoopmax = reader.int32();
          break;
        case 8:
          message.offlinemax = reader.int32();
          break;
        case 9:
          message.onlinecoop = reader.bool();
          break;
        case 10:
          message.onlinecoopmax = reader.int32();
          break;
        case 11:
          message.onlinemax = reader.int32();
          break;
        case 12:
          message.platform = Platform.decode(reader, reader.uint32());
          break;
        case 13:
          message.splitscreen = reader.bool();
          break;
        case 14:
          message.splitscreenonline = reader.bool();
          break;
        case 15:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MultiplayerMode {
    const message = { ...baseMultiplayerMode } as MultiplayerMode;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.campaigncoop !== undefined && object.campaigncoop !== null) {
      message.campaigncoop = Boolean(object.campaigncoop);
    } else {
      message.campaigncoop = false;
    }
    if (object.dropin !== undefined && object.dropin !== null) {
      message.dropin = Boolean(object.dropin);
    } else {
      message.dropin = false;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.lancoop !== undefined && object.lancoop !== null) {
      message.lancoop = Boolean(object.lancoop);
    } else {
      message.lancoop = false;
    }
    if (object.offlinecoop !== undefined && object.offlinecoop !== null) {
      message.offlinecoop = Boolean(object.offlinecoop);
    } else {
      message.offlinecoop = false;
    }
    if (object.offlinecoopmax !== undefined && object.offlinecoopmax !== null) {
      message.offlinecoopmax = Number(object.offlinecoopmax);
    } else {
      message.offlinecoopmax = 0;
    }
    if (object.offlinemax !== undefined && object.offlinemax !== null) {
      message.offlinemax = Number(object.offlinemax);
    } else {
      message.offlinemax = 0;
    }
    if (object.onlinecoop !== undefined && object.onlinecoop !== null) {
      message.onlinecoop = Boolean(object.onlinecoop);
    } else {
      message.onlinecoop = false;
    }
    if (object.onlinecoopmax !== undefined && object.onlinecoopmax !== null) {
      message.onlinecoopmax = Number(object.onlinecoopmax);
    } else {
      message.onlinecoopmax = 0;
    }
    if (object.onlinemax !== undefined && object.onlinemax !== null) {
      message.onlinemax = Number(object.onlinemax);
    } else {
      message.onlinemax = 0;
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromJSON(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.splitscreen !== undefined && object.splitscreen !== null) {
      message.splitscreen = Boolean(object.splitscreen);
    } else {
      message.splitscreen = false;
    }
    if (object.splitscreenonline !== undefined && object.splitscreenonline !== null) {
      message.splitscreenonline = Boolean(object.splitscreenonline);
    } else {
      message.splitscreenonline = false;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MultiplayerMode>): MultiplayerMode {
    const message = { ...baseMultiplayerMode } as MultiplayerMode;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.campaigncoop !== undefined && object.campaigncoop !== null) {
      message.campaigncoop = object.campaigncoop;
    } else {
      message.campaigncoop = false;
    }
    if (object.dropin !== undefined && object.dropin !== null) {
      message.dropin = object.dropin;
    } else {
      message.dropin = false;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.lancoop !== undefined && object.lancoop !== null) {
      message.lancoop = object.lancoop;
    } else {
      message.lancoop = false;
    }
    if (object.offlinecoop !== undefined && object.offlinecoop !== null) {
      message.offlinecoop = object.offlinecoop;
    } else {
      message.offlinecoop = false;
    }
    if (object.offlinecoopmax !== undefined && object.offlinecoopmax !== null) {
      message.offlinecoopmax = object.offlinecoopmax;
    } else {
      message.offlinecoopmax = 0;
    }
    if (object.offlinemax !== undefined && object.offlinemax !== null) {
      message.offlinemax = object.offlinemax;
    } else {
      message.offlinemax = 0;
    }
    if (object.onlinecoop !== undefined && object.onlinecoop !== null) {
      message.onlinecoop = object.onlinecoop;
    } else {
      message.onlinecoop = false;
    }
    if (object.onlinecoopmax !== undefined && object.onlinecoopmax !== null) {
      message.onlinecoopmax = object.onlinecoopmax;
    } else {
      message.onlinecoopmax = 0;
    }
    if (object.onlinemax !== undefined && object.onlinemax !== null) {
      message.onlinemax = object.onlinemax;
    } else {
      message.onlinemax = 0;
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromPartial(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.splitscreen !== undefined && object.splitscreen !== null) {
      message.splitscreen = object.splitscreen;
    } else {
      message.splitscreen = false;
    }
    if (object.splitscreenonline !== undefined && object.splitscreenonline !== null) {
      message.splitscreenonline = object.splitscreenonline;
    } else {
      message.splitscreenonline = false;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: MultiplayerMode): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.campaigncoop = message.campaigncoop || false;
    obj.dropin = message.dropin || false;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.lancoop = message.lancoop || false;
    obj.offlinecoop = message.offlinecoop || false;
    obj.offlinecoopmax = message.offlinecoopmax || 0;
    obj.offlinemax = message.offlinemax || 0;
    obj.onlinecoop = message.onlinecoop || false;
    obj.onlinecoopmax = message.onlinecoopmax || 0;
    obj.onlinemax = message.onlinemax || 0;
    obj.platform = message.platform ? Platform.toJSON(message.platform) : undefined;
    obj.splitscreen = message.splitscreen || false;
    obj.splitscreenonline = message.splitscreenonline || false;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PageResult = {
  encode(message: PageResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.pages) {
      Page.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PageResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageResult } as PageResult;
    message.pages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pages.push(Page.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PageResult {
    const message = { ...basePageResult } as PageResult;
    message.pages = [];
    if (object.pages !== undefined && object.pages !== null) {
      for (const e of object.pages) {
        message.pages.push(Page.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PageResult>): PageResult {
    const message = { ...basePageResult } as PageResult;
    message.pages = [];
    if (object.pages !== undefined && object.pages !== null) {
      for (const e of object.pages) {
        message.pages.push(Page.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PageResult): unknown {
    const obj: any = {};
    if (message.pages) {
      obj.pages = message.pages.map(e => e ? Page.toJSON(e) : undefined);
    } else {
      obj.pages = [];
    }
    return obj;
  },
};

export const Page = {
  encode(message: Page, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.background !== undefined && message.background !== undefined) {
      PageBackground.encode(message.background, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.battlenet);
    writer.uint32(32).int32(message.category);
    writer.uint32(40).int32(message.color);
    if (message.company !== undefined && message.company !== undefined) {
      Company.encode(message.company, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(56).int32(message.country);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).string(message.description);
    if (message.feed !== undefined && message.feed !== undefined) {
      Feed.encode(message.feed, writer.uint32(82).fork()).ldelim();
    }
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(90).fork()).ldelim();
    }
    writer.uint32(98).string(message.name);
    writer.uint32(106).string(message.origin);
    writer.uint32(112).int32(message.pageFollowsCount);
    if (message.pageLogo !== undefined && message.pageLogo !== undefined) {
      PageLogo.encode(message.pageLogo, writer.uint32(122).fork()).ldelim();
    }
    writer.uint32(130).string(message.slug);
    writer.uint32(136).int32(message.subCategory);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(146).fork()).ldelim();
    }
    writer.uint32(154).string(message.uplay);
    writer.uint32(162).string(message.url);
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.websites) {
      PageWebsite.encode(v, writer.uint32(178).fork()).ldelim();
    }
    writer.uint32(186).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Page {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePage } as Page;
    message.websites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.background = PageBackground.decode(reader, reader.uint32());
          break;
        case 3:
          message.battlenet = reader.string();
          break;
        case 4:
          message.category = reader.int32() as any;
          break;
        case 5:
          message.color = reader.int32() as any;
          break;
        case 6:
          message.company = Company.decode(reader, reader.uint32());
          break;
        case 7:
          message.country = reader.int32();
          break;
        case 8:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.description = reader.string();
          break;
        case 10:
          message.feed = Feed.decode(reader, reader.uint32());
          break;
        case 11:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 12:
          message.name = reader.string();
          break;
        case 13:
          message.origin = reader.string();
          break;
        case 14:
          message.pageFollowsCount = reader.int32();
          break;
        case 15:
          message.pageLogo = PageLogo.decode(reader, reader.uint32());
          break;
        case 16:
          message.slug = reader.string();
          break;
        case 17:
          message.subCategory = reader.int32() as any;
          break;
        case 18:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 19:
          message.uplay = reader.string();
          break;
        case 20:
          message.url = reader.string();
          break;
        case 21:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 22:
          message.websites.push(PageWebsite.decode(reader, reader.uint32()));
          break;
        case 23:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Page {
    const message = { ...basePage } as Page;
    message.websites = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.background !== undefined && object.background !== null) {
      message.background = PageBackground.fromJSON(object.background);
    } else {
      message.background = undefined;
    }
    if (object.battlenet !== undefined && object.battlenet !== null) {
      message.battlenet = String(object.battlenet);
    } else {
      message.battlenet = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = PageCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.color !== undefined && object.color !== null) {
      message.color = ColorColorEnum.fromJSON(object.color);
    } else {
      message.color = 0;
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = Company.fromJSON(object.company);
    } else {
      message.company = undefined;
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = Number(object.country);
    } else {
      message.country = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.feed !== undefined && object.feed !== null) {
      message.feed = Feed.fromJSON(object.feed);
    } else {
      message.feed = undefined;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.origin !== undefined && object.origin !== null) {
      message.origin = String(object.origin);
    } else {
      message.origin = "";
    }
    if (object.pageFollowsCount !== undefined && object.pageFollowsCount !== null) {
      message.pageFollowsCount = Number(object.pageFollowsCount);
    } else {
      message.pageFollowsCount = 0;
    }
    if (object.pageLogo !== undefined && object.pageLogo !== null) {
      message.pageLogo = PageLogo.fromJSON(object.pageLogo);
    } else {
      message.pageLogo = undefined;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.subCategory !== undefined && object.subCategory !== null) {
      message.subCategory = PageSubCategoryEnum.fromJSON(object.subCategory);
    } else {
      message.subCategory = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.uplay !== undefined && object.uplay !== null) {
      message.uplay = String(object.uplay);
    } else {
      message.uplay = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(PageWebsite.fromJSON(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Page>): Page {
    const message = { ...basePage } as Page;
    message.websites = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.background !== undefined && object.background !== null) {
      message.background = PageBackground.fromPartial(object.background);
    } else {
      message.background = undefined;
    }
    if (object.battlenet !== undefined && object.battlenet !== null) {
      message.battlenet = object.battlenet;
    } else {
      message.battlenet = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.color !== undefined && object.color !== null) {
      message.color = object.color;
    } else {
      message.color = 0;
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = Company.fromPartial(object.company);
    } else {
      message.company = undefined;
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.feed !== undefined && object.feed !== null) {
      message.feed = Feed.fromPartial(object.feed);
    } else {
      message.feed = undefined;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.origin !== undefined && object.origin !== null) {
      message.origin = object.origin;
    } else {
      message.origin = "";
    }
    if (object.pageFollowsCount !== undefined && object.pageFollowsCount !== null) {
      message.pageFollowsCount = object.pageFollowsCount;
    } else {
      message.pageFollowsCount = 0;
    }
    if (object.pageLogo !== undefined && object.pageLogo !== null) {
      message.pageLogo = PageLogo.fromPartial(object.pageLogo);
    } else {
      message.pageLogo = undefined;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.subCategory !== undefined && object.subCategory !== null) {
      message.subCategory = object.subCategory;
    } else {
      message.subCategory = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.uplay !== undefined && object.uplay !== null) {
      message.uplay = object.uplay;
    } else {
      message.uplay = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(PageWebsite.fromPartial(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Page): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.background = message.background ? PageBackground.toJSON(message.background) : undefined;
    obj.battlenet = message.battlenet || "";
    obj.category = PageCategoryEnum.toJSON(message.category);
    obj.color = ColorColorEnum.toJSON(message.color);
    obj.company = message.company ? Company.toJSON(message.company) : undefined;
    obj.country = message.country || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.description = message.description || "";
    obj.feed = message.feed ? Feed.toJSON(message.feed) : undefined;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.name = message.name || "";
    obj.origin = message.origin || "";
    obj.pageFollowsCount = message.pageFollowsCount || 0;
    obj.pageLogo = message.pageLogo ? PageLogo.toJSON(message.pageLogo) : undefined;
    obj.slug = message.slug || "";
    obj.subCategory = PageSubCategoryEnum.toJSON(message.subCategory);
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.uplay = message.uplay || "";
    obj.url = message.url || "";
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    if (message.websites) {
      obj.websites = message.websites.map(e => e ? PageWebsite.toJSON(e) : undefined);
    } else {
      obj.websites = [];
    }
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PageBackgroundResult = {
  encode(message: PageBackgroundResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.pagebackgrounds) {
      PageBackground.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PageBackgroundResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageBackgroundResult } as PageBackgroundResult;
    message.pagebackgrounds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagebackgrounds.push(PageBackground.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PageBackgroundResult {
    const message = { ...basePageBackgroundResult } as PageBackgroundResult;
    message.pagebackgrounds = [];
    if (object.pagebackgrounds !== undefined && object.pagebackgrounds !== null) {
      for (const e of object.pagebackgrounds) {
        message.pagebackgrounds.push(PageBackground.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PageBackgroundResult>): PageBackgroundResult {
    const message = { ...basePageBackgroundResult } as PageBackgroundResult;
    message.pagebackgrounds = [];
    if (object.pagebackgrounds !== undefined && object.pagebackgrounds !== null) {
      for (const e of object.pagebackgrounds) {
        message.pagebackgrounds.push(PageBackground.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PageBackgroundResult): unknown {
    const obj: any = {};
    if (message.pagebackgrounds) {
      obj.pagebackgrounds = message.pagebackgrounds.map(e => e ? PageBackground.toJSON(e) : undefined);
    } else {
      obj.pagebackgrounds = [];
    }
    return obj;
  },
};

export const PageBackground = {
  encode(message: PageBackground, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    writer.uint32(32).int32(message.height);
    writer.uint32(42).string(message.imageId);
    writer.uint32(50).string(message.url);
    writer.uint32(56).int32(message.width);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PageBackground {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageBackground } as PageBackground;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.imageId = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.width = reader.int32();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PageBackground {
    const message = { ...basePageBackground } as PageBackground;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PageBackground>): PageBackground {
    const message = { ...basePageBackground } as PageBackground;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PageBackground): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PageLogoResult = {
  encode(message: PageLogoResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.pagelogos) {
      PageLogo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PageLogoResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageLogoResult } as PageLogoResult;
    message.pagelogos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagelogos.push(PageLogo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PageLogoResult {
    const message = { ...basePageLogoResult } as PageLogoResult;
    message.pagelogos = [];
    if (object.pagelogos !== undefined && object.pagelogos !== null) {
      for (const e of object.pagelogos) {
        message.pagelogos.push(PageLogo.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PageLogoResult>): PageLogoResult {
    const message = { ...basePageLogoResult } as PageLogoResult;
    message.pagelogos = [];
    if (object.pagelogos !== undefined && object.pagelogos !== null) {
      for (const e of object.pagelogos) {
        message.pagelogos.push(PageLogo.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PageLogoResult): unknown {
    const obj: any = {};
    if (message.pagelogos) {
      obj.pagelogos = message.pagelogos.map(e => e ? PageLogo.toJSON(e) : undefined);
    } else {
      obj.pagelogos = [];
    }
    return obj;
  },
};

export const PageLogo = {
  encode(message: PageLogo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    writer.uint32(32).int32(message.height);
    writer.uint32(42).string(message.imageId);
    writer.uint32(50).string(message.url);
    writer.uint32(56).int32(message.width);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PageLogo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageLogo } as PageLogo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.imageId = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.width = reader.int32();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PageLogo {
    const message = { ...basePageLogo } as PageLogo;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PageLogo>): PageLogo {
    const message = { ...basePageLogo } as PageLogo;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PageLogo): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PageWebsiteResult = {
  encode(message: PageWebsiteResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.pagewebsites) {
      PageWebsite.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PageWebsiteResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageWebsiteResult } as PageWebsiteResult;
    message.pagewebsites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagewebsites.push(PageWebsite.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PageWebsiteResult {
    const message = { ...basePageWebsiteResult } as PageWebsiteResult;
    message.pagewebsites = [];
    if (object.pagewebsites !== undefined && object.pagewebsites !== null) {
      for (const e of object.pagewebsites) {
        message.pagewebsites.push(PageWebsite.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PageWebsiteResult>): PageWebsiteResult {
    const message = { ...basePageWebsiteResult } as PageWebsiteResult;
    message.pagewebsites = [];
    if (object.pagewebsites !== undefined && object.pagewebsites !== null) {
      for (const e of object.pagewebsites) {
        message.pagewebsites.push(PageWebsite.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PageWebsiteResult): unknown {
    const obj: any = {};
    if (message.pagewebsites) {
      obj.pagewebsites = message.pagewebsites.map(e => e ? PageWebsite.toJSON(e) : undefined);
    } else {
      obj.pagewebsites = [];
    }
    return obj;
  },
};

export const PageWebsite = {
  encode(message: PageWebsite, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    writer.uint32(24).bool(message.trusted);
    writer.uint32(34).string(message.url);
    writer.uint32(42).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PageWebsite {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageWebsite } as PageWebsite;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.trusted = reader.bool();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PageWebsite {
    const message = { ...basePageWebsite } as PageWebsite;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = WebsiteCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = Boolean(object.trusted);
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PageWebsite>): PageWebsite {
    const message = { ...basePageWebsite } as PageWebsite;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = object.trusted;
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PageWebsite): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = WebsiteCategoryEnum.toJSON(message.category);
    obj.trusted = message.trusted || false;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PersonResult = {
  encode(message: PersonResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.people) {
      Person.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PersonResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePersonResult } as PersonResult;
    message.people = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.people.push(Person.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PersonResult {
    const message = { ...basePersonResult } as PersonResult;
    message.people = [];
    if (object.people !== undefined && object.people !== null) {
      for (const e of object.people) {
        message.people.push(Person.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PersonResult>): PersonResult {
    const message = { ...basePersonResult } as PersonResult;
    message.people = [];
    if (object.people !== undefined && object.people !== null) {
      for (const e of object.people) {
        message.people.push(Person.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PersonResult): unknown {
    const obj: any = {};
    if (message.people) {
      obj.people = message.people.map(e => e ? Person.toJSON(e) : undefined);
    } else {
      obj.people = [];
    }
    return obj;
  },
};

export const Person = {
  encode(message: Person, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(18).string(message.bio);
    for (const v of message.characters) {
      Character.encode(v, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).int32(message.country);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.creditedGames) {
      Game.encode(v, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).string(message.description);
    if (message.dob !== undefined && message.dob !== undefined) {
      Timestamp.encode(toTimestamp(message.dob), writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(72).int32(message.gender);
    writer.uint32(80).int32(message.lovesCount);
    if (message.mugShot !== undefined && message.mugShot !== undefined) {
      PersonMugShot.encode(message.mugShot, writer.uint32(90).fork()).ldelim();
    }
    writer.uint32(98).string(message.name);
    for (const v of message.nicknames) {
      writer.uint32(106).string(v);
    }
    if (message.parent !== undefined && message.parent !== undefined) {
      Person.encode(message.parent, writer.uint32(114).fork()).ldelim();
    }
    writer.uint32(122).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(130).fork()).ldelim();
    }
    writer.uint32(138).string(message.url);
    for (const v of message.voiceActed) {
      Game.encode(v, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.websites) {
      PersonWebsite.encode(v, writer.uint32(154).fork()).ldelim();
    }
    writer.uint32(162).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Person {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePerson } as Person;
    message.characters = [];
    message.creditedGames = [];
    message.nicknames = [];
    message.voiceActed = [];
    message.websites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.bio = reader.string();
          break;
        case 3:
          message.characters.push(Character.decode(reader, reader.uint32()));
          break;
        case 4:
          message.country = reader.int32();
          break;
        case 5:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.creditedGames.push(Game.decode(reader, reader.uint32()));
          break;
        case 7:
          message.description = reader.string();
          break;
        case 8:
          message.dob = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.gender = reader.int32() as any;
          break;
        case 10:
          message.lovesCount = reader.int32();
          break;
        case 11:
          message.mugShot = PersonMugShot.decode(reader, reader.uint32());
          break;
        case 12:
          message.name = reader.string();
          break;
        case 13:
          message.nicknames.push(reader.string());
          break;
        case 14:
          message.parent = Person.decode(reader, reader.uint32());
          break;
        case 15:
          message.slug = reader.string();
          break;
        case 16:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 17:
          message.url = reader.string();
          break;
        case 18:
          message.voiceActed.push(Game.decode(reader, reader.uint32()));
          break;
        case 19:
          message.websites.push(PersonWebsite.decode(reader, reader.uint32()));
          break;
        case 20:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Person {
    const message = { ...basePerson } as Person;
    message.characters = [];
    message.creditedGames = [];
    message.nicknames = [];
    message.voiceActed = [];
    message.websites = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = String(object.bio);
    } else {
      message.bio = "";
    }
    if (object.characters !== undefined && object.characters !== null) {
      for (const e of object.characters) {
        message.characters.push(Character.fromJSON(e));
      }
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = Number(object.country);
    } else {
      message.country = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.creditedGames !== undefined && object.creditedGames !== null) {
      for (const e of object.creditedGames) {
        message.creditedGames.push(Game.fromJSON(e));
      }
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.dob !== undefined && object.dob !== null) {
      message.dob = fromJsonTimestamp(object.dob);
    } else {
      message.dob = undefined;
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = GenderGenderEnum.fromJSON(object.gender);
    } else {
      message.gender = 0;
    }
    if (object.lovesCount !== undefined && object.lovesCount !== null) {
      message.lovesCount = Number(object.lovesCount);
    } else {
      message.lovesCount = 0;
    }
    if (object.mugShot !== undefined && object.mugShot !== null) {
      message.mugShot = PersonMugShot.fromJSON(object.mugShot);
    } else {
      message.mugShot = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.nicknames !== undefined && object.nicknames !== null) {
      for (const e of object.nicknames) {
        message.nicknames.push(String(e));
      }
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = Person.fromJSON(object.parent);
    } else {
      message.parent = undefined;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.voiceActed !== undefined && object.voiceActed !== null) {
      for (const e of object.voiceActed) {
        message.voiceActed.push(Game.fromJSON(e));
      }
    }
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(PersonWebsite.fromJSON(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Person>): Person {
    const message = { ...basePerson } as Person;
    message.characters = [];
    message.creditedGames = [];
    message.nicknames = [];
    message.voiceActed = [];
    message.websites = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = object.bio;
    } else {
      message.bio = "";
    }
    if (object.characters !== undefined && object.characters !== null) {
      for (const e of object.characters) {
        message.characters.push(Character.fromPartial(e));
      }
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.creditedGames !== undefined && object.creditedGames !== null) {
      for (const e of object.creditedGames) {
        message.creditedGames.push(Game.fromPartial(e));
      }
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.dob !== undefined && object.dob !== null) {
      message.dob = object.dob;
    } else {
      message.dob = undefined;
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = object.gender;
    } else {
      message.gender = 0;
    }
    if (object.lovesCount !== undefined && object.lovesCount !== null) {
      message.lovesCount = object.lovesCount;
    } else {
      message.lovesCount = 0;
    }
    if (object.mugShot !== undefined && object.mugShot !== null) {
      message.mugShot = PersonMugShot.fromPartial(object.mugShot);
    } else {
      message.mugShot = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.nicknames !== undefined && object.nicknames !== null) {
      for (const e of object.nicknames) {
        message.nicknames.push(e);
      }
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = Person.fromPartial(object.parent);
    } else {
      message.parent = undefined;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.voiceActed !== undefined && object.voiceActed !== null) {
      for (const e of object.voiceActed) {
        message.voiceActed.push(Game.fromPartial(e));
      }
    }
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(PersonWebsite.fromPartial(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Person): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.bio = message.bio || "";
    if (message.characters) {
      obj.characters = message.characters.map(e => e ? Character.toJSON(e) : undefined);
    } else {
      obj.characters = [];
    }
    obj.country = message.country || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    if (message.creditedGames) {
      obj.creditedGames = message.creditedGames.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.creditedGames = [];
    }
    obj.description = message.description || "";
    obj.dob = message.dob !== undefined ? message.dob.toISOString() : null;
    obj.gender = GenderGenderEnum.toJSON(message.gender);
    obj.lovesCount = message.lovesCount || 0;
    obj.mugShot = message.mugShot ? PersonMugShot.toJSON(message.mugShot) : undefined;
    obj.name = message.name || "";
    if (message.nicknames) {
      obj.nicknames = message.nicknames.map(e => e || "");
    } else {
      obj.nicknames = [];
    }
    obj.parent = message.parent ? Person.toJSON(message.parent) : undefined;
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    if (message.voiceActed) {
      obj.voiceActed = message.voiceActed.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.voiceActed = [];
    }
    if (message.websites) {
      obj.websites = message.websites.map(e => e ? PersonWebsite.toJSON(e) : undefined);
    } else {
      obj.websites = [];
    }
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PersonMugShotResult = {
  encode(message: PersonMugShotResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.personmugshots) {
      PersonMugShot.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PersonMugShotResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePersonMugShotResult } as PersonMugShotResult;
    message.personmugshots = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.personmugshots.push(PersonMugShot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PersonMugShotResult {
    const message = { ...basePersonMugShotResult } as PersonMugShotResult;
    message.personmugshots = [];
    if (object.personmugshots !== undefined && object.personmugshots !== null) {
      for (const e of object.personmugshots) {
        message.personmugshots.push(PersonMugShot.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PersonMugShotResult>): PersonMugShotResult {
    const message = { ...basePersonMugShotResult } as PersonMugShotResult;
    message.personmugshots = [];
    if (object.personmugshots !== undefined && object.personmugshots !== null) {
      for (const e of object.personmugshots) {
        message.personmugshots.push(PersonMugShot.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PersonMugShotResult): unknown {
    const obj: any = {};
    if (message.personmugshots) {
      obj.personmugshots = message.personmugshots.map(e => e ? PersonMugShot.toJSON(e) : undefined);
    } else {
      obj.personmugshots = [];
    }
    return obj;
  },
};

export const PersonMugShot = {
  encode(message: PersonMugShot, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.height);
    writer.uint32(26).string(message.imageId);
    writer.uint32(34).string(message.url);
    writer.uint32(40).int32(message.width);
    writer.uint32(50).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PersonMugShot {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePersonMugShot } as PersonMugShot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.height = reader.int32();
          break;
        case 3:
          message.imageId = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.width = reader.int32();
          break;
        case 6:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PersonMugShot {
    const message = { ...basePersonMugShot } as PersonMugShot;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PersonMugShot>): PersonMugShot {
    const message = { ...basePersonMugShot } as PersonMugShot;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PersonMugShot): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PersonWebsiteResult = {
  encode(message: PersonWebsiteResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.personwebsites) {
      PersonWebsite.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PersonWebsiteResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePersonWebsiteResult } as PersonWebsiteResult;
    message.personwebsites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.personwebsites.push(PersonWebsite.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PersonWebsiteResult {
    const message = { ...basePersonWebsiteResult } as PersonWebsiteResult;
    message.personwebsites = [];
    if (object.personwebsites !== undefined && object.personwebsites !== null) {
      for (const e of object.personwebsites) {
        message.personwebsites.push(PersonWebsite.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PersonWebsiteResult>): PersonWebsiteResult {
    const message = { ...basePersonWebsiteResult } as PersonWebsiteResult;
    message.personwebsites = [];
    if (object.personwebsites !== undefined && object.personwebsites !== null) {
      for (const e of object.personwebsites) {
        message.personwebsites.push(PersonWebsite.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PersonWebsiteResult): unknown {
    const obj: any = {};
    if (message.personwebsites) {
      obj.personwebsites = message.personwebsites.map(e => e ? PersonWebsite.toJSON(e) : undefined);
    } else {
      obj.personwebsites = [];
    }
    return obj;
  },
};

export const PersonWebsite = {
  encode(message: PersonWebsite, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    writer.uint32(24).bool(message.trusted);
    writer.uint32(34).string(message.url);
    writer.uint32(42).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PersonWebsite {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePersonWebsite } as PersonWebsite;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.trusted = reader.bool();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PersonWebsite {
    const message = { ...basePersonWebsite } as PersonWebsite;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = WebsiteCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = Boolean(object.trusted);
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PersonWebsite>): PersonWebsite {
    const message = { ...basePersonWebsite } as PersonWebsite;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = object.trusted;
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PersonWebsite): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = WebsiteCategoryEnum.toJSON(message.category);
    obj.trusted = message.trusted || false;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PlatformResult = {
  encode(message: PlatformResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.platforms) {
      Platform.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformResult } as PlatformResult;
    message.platforms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platforms.push(Platform.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformResult {
    const message = { ...basePlatformResult } as PlatformResult;
    message.platforms = [];
    if (object.platforms !== undefined && object.platforms !== null) {
      for (const e of object.platforms) {
        message.platforms.push(Platform.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformResult>): PlatformResult {
    const message = { ...basePlatformResult } as PlatformResult;
    message.platforms = [];
    if (object.platforms !== undefined && object.platforms !== null) {
      for (const e of object.platforms) {
        message.platforms.push(Platform.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PlatformResult): unknown {
    const obj: any = {};
    if (message.platforms) {
      obj.platforms = message.platforms.map(e => e ? Platform.toJSON(e) : undefined);
    } else {
      obj.platforms = [];
    }
    return obj;
  },
};

export const Platform = {
  encode(message: Platform, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(18).string(message.abbreviation);
    writer.uint32(26).string(message.alternativeName);
    writer.uint32(32).int32(message.category);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(48).int32(message.generation);
    writer.uint32(58).string(message.name);
    if (message.platformLogo !== undefined && message.platformLogo !== undefined) {
      PlatformLogo.encode(message.platformLogo, writer.uint32(66).fork()).ldelim();
    }
    if (message.productFamily !== undefined && message.productFamily !== undefined) {
      ProductFamily.encode(message.productFamily, writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(82).string(message.slug);
    writer.uint32(90).string(message.summary);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(98).fork()).ldelim();
    }
    writer.uint32(106).string(message.url);
    for (const v of message.versions) {
      PlatformVersion.encode(v, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.websites) {
      PlatformWebsite.encode(v, writer.uint32(122).fork()).ldelim();
    }
    writer.uint32(130).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Platform {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatform } as Platform;
    message.versions = [];
    message.websites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.abbreviation = reader.string();
          break;
        case 3:
          message.alternativeName = reader.string();
          break;
        case 4:
          message.category = reader.int32() as any;
          break;
        case 5:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.generation = reader.int32();
          break;
        case 7:
          message.name = reader.string();
          break;
        case 8:
          message.platformLogo = PlatformLogo.decode(reader, reader.uint32());
          break;
        case 9:
          message.productFamily = ProductFamily.decode(reader, reader.uint32());
          break;
        case 10:
          message.slug = reader.string();
          break;
        case 11:
          message.summary = reader.string();
          break;
        case 12:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 13:
          message.url = reader.string();
          break;
        case 14:
          message.versions.push(PlatformVersion.decode(reader, reader.uint32()));
          break;
        case 15:
          message.websites.push(PlatformWebsite.decode(reader, reader.uint32()));
          break;
        case 16:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Platform {
    const message = { ...basePlatform } as Platform;
    message.versions = [];
    message.websites = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.abbreviation !== undefined && object.abbreviation !== null) {
      message.abbreviation = String(object.abbreviation);
    } else {
      message.abbreviation = "";
    }
    if (object.alternativeName !== undefined && object.alternativeName !== null) {
      message.alternativeName = String(object.alternativeName);
    } else {
      message.alternativeName = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = PlatformCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.generation !== undefined && object.generation !== null) {
      message.generation = Number(object.generation);
    } else {
      message.generation = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.platformLogo !== undefined && object.platformLogo !== null) {
      message.platformLogo = PlatformLogo.fromJSON(object.platformLogo);
    } else {
      message.platformLogo = undefined;
    }
    if (object.productFamily !== undefined && object.productFamily !== null) {
      message.productFamily = ProductFamily.fromJSON(object.productFamily);
    } else {
      message.productFamily = undefined;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = String(object.summary);
    } else {
      message.summary = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.versions !== undefined && object.versions !== null) {
      for (const e of object.versions) {
        message.versions.push(PlatformVersion.fromJSON(e));
      }
    }
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(PlatformWebsite.fromJSON(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Platform>): Platform {
    const message = { ...basePlatform } as Platform;
    message.versions = [];
    message.websites = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.abbreviation !== undefined && object.abbreviation !== null) {
      message.abbreviation = object.abbreviation;
    } else {
      message.abbreviation = "";
    }
    if (object.alternativeName !== undefined && object.alternativeName !== null) {
      message.alternativeName = object.alternativeName;
    } else {
      message.alternativeName = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.generation !== undefined && object.generation !== null) {
      message.generation = object.generation;
    } else {
      message.generation = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.platformLogo !== undefined && object.platformLogo !== null) {
      message.platformLogo = PlatformLogo.fromPartial(object.platformLogo);
    } else {
      message.platformLogo = undefined;
    }
    if (object.productFamily !== undefined && object.productFamily !== null) {
      message.productFamily = ProductFamily.fromPartial(object.productFamily);
    } else {
      message.productFamily = undefined;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    } else {
      message.summary = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.versions !== undefined && object.versions !== null) {
      for (const e of object.versions) {
        message.versions.push(PlatformVersion.fromPartial(e));
      }
    }
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(PlatformWebsite.fromPartial(e));
      }
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Platform): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.abbreviation = message.abbreviation || "";
    obj.alternativeName = message.alternativeName || "";
    obj.category = PlatformCategoryEnum.toJSON(message.category);
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.generation = message.generation || 0;
    obj.name = message.name || "";
    obj.platformLogo = message.platformLogo ? PlatformLogo.toJSON(message.platformLogo) : undefined;
    obj.productFamily = message.productFamily ? ProductFamily.toJSON(message.productFamily) : undefined;
    obj.slug = message.slug || "";
    obj.summary = message.summary || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    if (message.versions) {
      obj.versions = message.versions.map(e => e ? PlatformVersion.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }
    if (message.websites) {
      obj.websites = message.websites.map(e => e ? PlatformWebsite.toJSON(e) : undefined);
    } else {
      obj.websites = [];
    }
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PlatformLogoResult = {
  encode(message: PlatformLogoResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.platformlogos) {
      PlatformLogo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformLogoResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformLogoResult } as PlatformLogoResult;
    message.platformlogos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platformlogos.push(PlatformLogo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformLogoResult {
    const message = { ...basePlatformLogoResult } as PlatformLogoResult;
    message.platformlogos = [];
    if (object.platformlogos !== undefined && object.platformlogos !== null) {
      for (const e of object.platformlogos) {
        message.platformlogos.push(PlatformLogo.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformLogoResult>): PlatformLogoResult {
    const message = { ...basePlatformLogoResult } as PlatformLogoResult;
    message.platformlogos = [];
    if (object.platformlogos !== undefined && object.platformlogos !== null) {
      for (const e of object.platformlogos) {
        message.platformlogos.push(PlatformLogo.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PlatformLogoResult): unknown {
    const obj: any = {};
    if (message.platformlogos) {
      obj.platformlogos = message.platformlogos.map(e => e ? PlatformLogo.toJSON(e) : undefined);
    } else {
      obj.platformlogos = [];
    }
    return obj;
  },
};

export const PlatformLogo = {
  encode(message: PlatformLogo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    writer.uint32(32).int32(message.height);
    writer.uint32(42).string(message.imageId);
    writer.uint32(50).string(message.url);
    writer.uint32(56).int32(message.width);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformLogo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformLogo } as PlatformLogo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.imageId = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.width = reader.int32();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformLogo {
    const message = { ...basePlatformLogo } as PlatformLogo;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformLogo>): PlatformLogo {
    const message = { ...basePlatformLogo } as PlatformLogo;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PlatformLogo): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PlatformVersionResult = {
  encode(message: PlatformVersionResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.platformversions) {
      PlatformVersion.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformVersionResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformVersionResult } as PlatformVersionResult;
    message.platformversions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platformversions.push(PlatformVersion.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformVersionResult {
    const message = { ...basePlatformVersionResult } as PlatformVersionResult;
    message.platformversions = [];
    if (object.platformversions !== undefined && object.platformversions !== null) {
      for (const e of object.platformversions) {
        message.platformversions.push(PlatformVersion.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformVersionResult>): PlatformVersionResult {
    const message = { ...basePlatformVersionResult } as PlatformVersionResult;
    message.platformversions = [];
    if (object.platformversions !== undefined && object.platformversions !== null) {
      for (const e of object.platformversions) {
        message.platformversions.push(PlatformVersion.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PlatformVersionResult): unknown {
    const obj: any = {};
    if (message.platformversions) {
      obj.platformversions = message.platformversions.map(e => e ? PlatformVersion.toJSON(e) : undefined);
    } else {
      obj.platformversions = [];
    }
    return obj;
  },
};

export const PlatformVersion = {
  encode(message: PlatformVersion, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    for (const v of message.companies) {
      PlatformVersionCompany.encode(v, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.connectivity);
    writer.uint32(34).string(message.cpu);
    writer.uint32(42).string(message.graphics);
    if (message.mainManufacturer !== undefined && message.mainManufacturer !== undefined) {
      PlatformVersionCompany.encode(message.mainManufacturer, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).string(message.media);
    writer.uint32(66).string(message.memory);
    writer.uint32(74).string(message.name);
    writer.uint32(82).string(message.online);
    writer.uint32(90).string(message.os);
    writer.uint32(98).string(message.output);
    if (message.platformLogo !== undefined && message.platformLogo !== undefined) {
      PlatformLogo.encode(message.platformLogo, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.platformVersionReleaseDates) {
      PlatformVersionReleaseDate.encode(v, writer.uint32(114).fork()).ldelim();
    }
    writer.uint32(122).string(message.resolutions);
    writer.uint32(130).string(message.slug);
    writer.uint32(138).string(message.sound);
    writer.uint32(146).string(message.storage);
    writer.uint32(154).string(message.summary);
    writer.uint32(162).string(message.url);
    writer.uint32(170).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformVersion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformVersion } as PlatformVersion;
    message.companies = [];
    message.platformVersionReleaseDates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.companies.push(PlatformVersionCompany.decode(reader, reader.uint32()));
          break;
        case 3:
          message.connectivity = reader.string();
          break;
        case 4:
          message.cpu = reader.string();
          break;
        case 5:
          message.graphics = reader.string();
          break;
        case 6:
          message.mainManufacturer = PlatformVersionCompany.decode(reader, reader.uint32());
          break;
        case 7:
          message.media = reader.string();
          break;
        case 8:
          message.memory = reader.string();
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.online = reader.string();
          break;
        case 11:
          message.os = reader.string();
          break;
        case 12:
          message.output = reader.string();
          break;
        case 13:
          message.platformLogo = PlatformLogo.decode(reader, reader.uint32());
          break;
        case 14:
          message.platformVersionReleaseDates.push(PlatformVersionReleaseDate.decode(reader, reader.uint32()));
          break;
        case 15:
          message.resolutions = reader.string();
          break;
        case 16:
          message.slug = reader.string();
          break;
        case 17:
          message.sound = reader.string();
          break;
        case 18:
          message.storage = reader.string();
          break;
        case 19:
          message.summary = reader.string();
          break;
        case 20:
          message.url = reader.string();
          break;
        case 21:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformVersion {
    const message = { ...basePlatformVersion } as PlatformVersion;
    message.companies = [];
    message.platformVersionReleaseDates = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(PlatformVersionCompany.fromJSON(e));
      }
    }
    if (object.connectivity !== undefined && object.connectivity !== null) {
      message.connectivity = String(object.connectivity);
    } else {
      message.connectivity = "";
    }
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = String(object.cpu);
    } else {
      message.cpu = "";
    }
    if (object.graphics !== undefined && object.graphics !== null) {
      message.graphics = String(object.graphics);
    } else {
      message.graphics = "";
    }
    if (object.mainManufacturer !== undefined && object.mainManufacturer !== null) {
      message.mainManufacturer = PlatformVersionCompany.fromJSON(object.mainManufacturer);
    } else {
      message.mainManufacturer = undefined;
    }
    if (object.media !== undefined && object.media !== null) {
      message.media = String(object.media);
    } else {
      message.media = "";
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = String(object.memory);
    } else {
      message.memory = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.online !== undefined && object.online !== null) {
      message.online = String(object.online);
    } else {
      message.online = "";
    }
    if (object.os !== undefined && object.os !== null) {
      message.os = String(object.os);
    } else {
      message.os = "";
    }
    if (object.output !== undefined && object.output !== null) {
      message.output = String(object.output);
    } else {
      message.output = "";
    }
    if (object.platformLogo !== undefined && object.platformLogo !== null) {
      message.platformLogo = PlatformLogo.fromJSON(object.platformLogo);
    } else {
      message.platformLogo = undefined;
    }
    if (object.platformVersionReleaseDates !== undefined && object.platformVersionReleaseDates !== null) {
      for (const e of object.platformVersionReleaseDates) {
        message.platformVersionReleaseDates.push(PlatformVersionReleaseDate.fromJSON(e));
      }
    }
    if (object.resolutions !== undefined && object.resolutions !== null) {
      message.resolutions = String(object.resolutions);
    } else {
      message.resolutions = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.sound !== undefined && object.sound !== null) {
      message.sound = String(object.sound);
    } else {
      message.sound = "";
    }
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = String(object.storage);
    } else {
      message.storage = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = String(object.summary);
    } else {
      message.summary = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformVersion>): PlatformVersion {
    const message = { ...basePlatformVersion } as PlatformVersion;
    message.companies = [];
    message.platformVersionReleaseDates = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(PlatformVersionCompany.fromPartial(e));
      }
    }
    if (object.connectivity !== undefined && object.connectivity !== null) {
      message.connectivity = object.connectivity;
    } else {
      message.connectivity = "";
    }
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = object.cpu;
    } else {
      message.cpu = "";
    }
    if (object.graphics !== undefined && object.graphics !== null) {
      message.graphics = object.graphics;
    } else {
      message.graphics = "";
    }
    if (object.mainManufacturer !== undefined && object.mainManufacturer !== null) {
      message.mainManufacturer = PlatformVersionCompany.fromPartial(object.mainManufacturer);
    } else {
      message.mainManufacturer = undefined;
    }
    if (object.media !== undefined && object.media !== null) {
      message.media = object.media;
    } else {
      message.media = "";
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = object.memory;
    } else {
      message.memory = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.online !== undefined && object.online !== null) {
      message.online = object.online;
    } else {
      message.online = "";
    }
    if (object.os !== undefined && object.os !== null) {
      message.os = object.os;
    } else {
      message.os = "";
    }
    if (object.output !== undefined && object.output !== null) {
      message.output = object.output;
    } else {
      message.output = "";
    }
    if (object.platformLogo !== undefined && object.platformLogo !== null) {
      message.platformLogo = PlatformLogo.fromPartial(object.platformLogo);
    } else {
      message.platformLogo = undefined;
    }
    if (object.platformVersionReleaseDates !== undefined && object.platformVersionReleaseDates !== null) {
      for (const e of object.platformVersionReleaseDates) {
        message.platformVersionReleaseDates.push(PlatformVersionReleaseDate.fromPartial(e));
      }
    }
    if (object.resolutions !== undefined && object.resolutions !== null) {
      message.resolutions = object.resolutions;
    } else {
      message.resolutions = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.sound !== undefined && object.sound !== null) {
      message.sound = object.sound;
    } else {
      message.sound = "";
    }
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = object.storage;
    } else {
      message.storage = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    } else {
      message.summary = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PlatformVersion): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    if (message.companies) {
      obj.companies = message.companies.map(e => e ? PlatformVersionCompany.toJSON(e) : undefined);
    } else {
      obj.companies = [];
    }
    obj.connectivity = message.connectivity || "";
    obj.cpu = message.cpu || "";
    obj.graphics = message.graphics || "";
    obj.mainManufacturer = message.mainManufacturer ? PlatformVersionCompany.toJSON(message.mainManufacturer) : undefined;
    obj.media = message.media || "";
    obj.memory = message.memory || "";
    obj.name = message.name || "";
    obj.online = message.online || "";
    obj.os = message.os || "";
    obj.output = message.output || "";
    obj.platformLogo = message.platformLogo ? PlatformLogo.toJSON(message.platformLogo) : undefined;
    if (message.platformVersionReleaseDates) {
      obj.platformVersionReleaseDates = message.platformVersionReleaseDates.map(e => e ? PlatformVersionReleaseDate.toJSON(e) : undefined);
    } else {
      obj.platformVersionReleaseDates = [];
    }
    obj.resolutions = message.resolutions || "";
    obj.slug = message.slug || "";
    obj.sound = message.sound || "";
    obj.storage = message.storage || "";
    obj.summary = message.summary || "";
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PlatformVersionCompanyResult = {
  encode(message: PlatformVersionCompanyResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.platformversioncompanies) {
      PlatformVersionCompany.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformVersionCompanyResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformVersionCompanyResult } as PlatformVersionCompanyResult;
    message.platformversioncompanies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platformversioncompanies.push(PlatformVersionCompany.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformVersionCompanyResult {
    const message = { ...basePlatformVersionCompanyResult } as PlatformVersionCompanyResult;
    message.platformversioncompanies = [];
    if (object.platformversioncompanies !== undefined && object.platformversioncompanies !== null) {
      for (const e of object.platformversioncompanies) {
        message.platformversioncompanies.push(PlatformVersionCompany.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformVersionCompanyResult>): PlatformVersionCompanyResult {
    const message = { ...basePlatformVersionCompanyResult } as PlatformVersionCompanyResult;
    message.platformversioncompanies = [];
    if (object.platformversioncompanies !== undefined && object.platformversioncompanies !== null) {
      for (const e of object.platformversioncompanies) {
        message.platformversioncompanies.push(PlatformVersionCompany.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PlatformVersionCompanyResult): unknown {
    const obj: any = {};
    if (message.platformversioncompanies) {
      obj.platformversioncompanies = message.platformversioncompanies.map(e => e ? PlatformVersionCompany.toJSON(e) : undefined);
    } else {
      obj.platformversioncompanies = [];
    }
    return obj;
  },
};

export const PlatformVersionCompany = {
  encode(message: PlatformVersionCompany, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(18).string(message.comment);
    if (message.company !== undefined && message.company !== undefined) {
      Company.encode(message.company, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).bool(message.developer);
    writer.uint32(40).bool(message.manufacturer);
    writer.uint32(50).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformVersionCompany {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformVersionCompany } as PlatformVersionCompany;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.comment = reader.string();
          break;
        case 3:
          message.company = Company.decode(reader, reader.uint32());
          break;
        case 4:
          message.developer = reader.bool();
          break;
        case 5:
          message.manufacturer = reader.bool();
          break;
        case 6:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformVersionCompany {
    const message = { ...basePlatformVersionCompany } as PlatformVersionCompany;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = String(object.comment);
    } else {
      message.comment = "";
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = Company.fromJSON(object.company);
    } else {
      message.company = undefined;
    }
    if (object.developer !== undefined && object.developer !== null) {
      message.developer = Boolean(object.developer);
    } else {
      message.developer = false;
    }
    if (object.manufacturer !== undefined && object.manufacturer !== null) {
      message.manufacturer = Boolean(object.manufacturer);
    } else {
      message.manufacturer = false;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformVersionCompany>): PlatformVersionCompany {
    const message = { ...basePlatformVersionCompany } as PlatformVersionCompany;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = object.comment;
    } else {
      message.comment = "";
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = Company.fromPartial(object.company);
    } else {
      message.company = undefined;
    }
    if (object.developer !== undefined && object.developer !== null) {
      message.developer = object.developer;
    } else {
      message.developer = false;
    }
    if (object.manufacturer !== undefined && object.manufacturer !== null) {
      message.manufacturer = object.manufacturer;
    } else {
      message.manufacturer = false;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PlatformVersionCompany): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.comment = message.comment || "";
    obj.company = message.company ? Company.toJSON(message.company) : undefined;
    obj.developer = message.developer || false;
    obj.manufacturer = message.manufacturer || false;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PlatformVersionReleaseDateResult = {
  encode(message: PlatformVersionReleaseDateResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.platformversionreleasedates) {
      PlatformVersionReleaseDate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformVersionReleaseDateResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformVersionReleaseDateResult } as PlatformVersionReleaseDateResult;
    message.platformversionreleasedates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platformversionreleasedates.push(PlatformVersionReleaseDate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformVersionReleaseDateResult {
    const message = { ...basePlatformVersionReleaseDateResult } as PlatformVersionReleaseDateResult;
    message.platformversionreleasedates = [];
    if (object.platformversionreleasedates !== undefined && object.platformversionreleasedates !== null) {
      for (const e of object.platformversionreleasedates) {
        message.platformversionreleasedates.push(PlatformVersionReleaseDate.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformVersionReleaseDateResult>): PlatformVersionReleaseDateResult {
    const message = { ...basePlatformVersionReleaseDateResult } as PlatformVersionReleaseDateResult;
    message.platformversionreleasedates = [];
    if (object.platformversionreleasedates !== undefined && object.platformversionreleasedates !== null) {
      for (const e of object.platformversionreleasedates) {
        message.platformversionreleasedates.push(PlatformVersionReleaseDate.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PlatformVersionReleaseDateResult): unknown {
    const obj: any = {};
    if (message.platformversionreleasedates) {
      obj.platformversionreleasedates = message.platformversionreleasedates.map(e => e ? PlatformVersionReleaseDate.toJSON(e) : undefined);
    } else {
      obj.platformversionreleasedates = [];
    }
    return obj;
  },
};

export const PlatformVersionReleaseDate = {
  encode(message: PlatformVersionReleaseDate, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.date !== undefined && message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.human);
    writer.uint32(48).int32(message.m);
    if (message.platformVersion !== undefined && message.platformVersion !== undefined) {
      PlatformVersion.encode(message.platformVersion, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(64).int32(message.region);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(80).int32(message.y);
    writer.uint32(90).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformVersionReleaseDate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformVersionReleaseDate } as PlatformVersionReleaseDate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.human = reader.string();
          break;
        case 6:
          message.m = reader.int32();
          break;
        case 7:
          message.platformVersion = PlatformVersion.decode(reader, reader.uint32());
          break;
        case 8:
          message.region = reader.int32() as any;
          break;
        case 9:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.y = reader.int32();
          break;
        case 11:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformVersionReleaseDate {
    const message = { ...basePlatformVersionReleaseDate } as PlatformVersionReleaseDate;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = DateFormatChangeDateCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = fromJsonTimestamp(object.date);
    } else {
      message.date = undefined;
    }
    if (object.human !== undefined && object.human !== null) {
      message.human = String(object.human);
    } else {
      message.human = "";
    }
    if (object.m !== undefined && object.m !== null) {
      message.m = Number(object.m);
    } else {
      message.m = 0;
    }
    if (object.platformVersion !== undefined && object.platformVersion !== null) {
      message.platformVersion = PlatformVersion.fromJSON(object.platformVersion);
    } else {
      message.platformVersion = undefined;
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = RegionLanguageEnum.fromJSON(object.region);
    } else {
      message.region = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = Number(object.y);
    } else {
      message.y = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformVersionReleaseDate>): PlatformVersionReleaseDate {
    const message = { ...basePlatformVersionReleaseDate } as PlatformVersionReleaseDate;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = undefined;
    }
    if (object.human !== undefined && object.human !== null) {
      message.human = object.human;
    } else {
      message.human = "";
    }
    if (object.m !== undefined && object.m !== null) {
      message.m = object.m;
    } else {
      message.m = 0;
    }
    if (object.platformVersion !== undefined && object.platformVersion !== null) {
      message.platformVersion = PlatformVersion.fromPartial(object.platformVersion);
    } else {
      message.platformVersion = undefined;
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = object.region;
    } else {
      message.region = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = object.y;
    } else {
      message.y = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PlatformVersionReleaseDate): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = DateFormatChangeDateCategoryEnum.toJSON(message.category);
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.date = message.date !== undefined ? message.date.toISOString() : null;
    obj.human = message.human || "";
    obj.m = message.m || 0;
    obj.platformVersion = message.platformVersion ? PlatformVersion.toJSON(message.platformVersion) : undefined;
    obj.region = RegionLanguageEnum.toJSON(message.region);
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.y = message.y || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PlatformWebsiteResult = {
  encode(message: PlatformWebsiteResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.platformwebsites) {
      PlatformWebsite.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformWebsiteResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformWebsiteResult } as PlatformWebsiteResult;
    message.platformwebsites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platformwebsites.push(PlatformWebsite.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformWebsiteResult {
    const message = { ...basePlatformWebsiteResult } as PlatformWebsiteResult;
    message.platformwebsites = [];
    if (object.platformwebsites !== undefined && object.platformwebsites !== null) {
      for (const e of object.platformwebsites) {
        message.platformwebsites.push(PlatformWebsite.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformWebsiteResult>): PlatformWebsiteResult {
    const message = { ...basePlatformWebsiteResult } as PlatformWebsiteResult;
    message.platformwebsites = [];
    if (object.platformwebsites !== undefined && object.platformwebsites !== null) {
      for (const e of object.platformwebsites) {
        message.platformwebsites.push(PlatformWebsite.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PlatformWebsiteResult): unknown {
    const obj: any = {};
    if (message.platformwebsites) {
      obj.platformwebsites = message.platformwebsites.map(e => e ? PlatformWebsite.toJSON(e) : undefined);
    } else {
      obj.platformwebsites = [];
    }
    return obj;
  },
};

export const PlatformWebsite = {
  encode(message: PlatformWebsite, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    writer.uint32(24).bool(message.trusted);
    writer.uint32(34).string(message.url);
    writer.uint32(42).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlatformWebsite {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformWebsite } as PlatformWebsite;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.trusted = reader.bool();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlatformWebsite {
    const message = { ...basePlatformWebsite } as PlatformWebsite;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = WebsiteCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = Boolean(object.trusted);
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlatformWebsite>): PlatformWebsite {
    const message = { ...basePlatformWebsite } as PlatformWebsite;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = object.trusted;
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PlatformWebsite): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = WebsiteCategoryEnum.toJSON(message.category);
    obj.trusted = message.trusted || false;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PlayerPerspectiveResult = {
  encode(message: PlayerPerspectiveResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.playerperspectives) {
      PlayerPerspective.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlayerPerspectiveResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlayerPerspectiveResult } as PlayerPerspectiveResult;
    message.playerperspectives = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerperspectives.push(PlayerPerspective.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlayerPerspectiveResult {
    const message = { ...basePlayerPerspectiveResult } as PlayerPerspectiveResult;
    message.playerperspectives = [];
    if (object.playerperspectives !== undefined && object.playerperspectives !== null) {
      for (const e of object.playerperspectives) {
        message.playerperspectives.push(PlayerPerspective.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlayerPerspectiveResult>): PlayerPerspectiveResult {
    const message = { ...basePlayerPerspectiveResult } as PlayerPerspectiveResult;
    message.playerperspectives = [];
    if (object.playerperspectives !== undefined && object.playerperspectives !== null) {
      for (const e of object.playerperspectives) {
        message.playerperspectives.push(PlayerPerspective.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PlayerPerspectiveResult): unknown {
    const obj: any = {};
    if (message.playerperspectives) {
      obj.playerperspectives = message.playerperspectives.map(e => e ? PlayerPerspective.toJSON(e) : undefined);
    } else {
      obj.playerperspectives = [];
    }
    return obj;
  },
};

export const PlayerPerspective = {
  encode(message: PlayerPerspective, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.url);
    writer.uint32(58).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PlayerPerspective {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlayerPerspective } as PlayerPerspective;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.slug = reader.string();
          break;
        case 5:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlayerPerspective {
    const message = { ...basePlayerPerspective } as PlayerPerspective;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlayerPerspective>): PlayerPerspective {
    const message = { ...basePlayerPerspective } as PlayerPerspective;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PlayerPerspective): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.name = message.name || "";
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const ProductFamilyResult = {
  encode(message: ProductFamilyResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.productfamilies) {
      ProductFamily.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ProductFamilyResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProductFamilyResult } as ProductFamilyResult;
    message.productfamilies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productfamilies.push(ProductFamily.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProductFamilyResult {
    const message = { ...baseProductFamilyResult } as ProductFamilyResult;
    message.productfamilies = [];
    if (object.productfamilies !== undefined && object.productfamilies !== null) {
      for (const e of object.productfamilies) {
        message.productfamilies.push(ProductFamily.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProductFamilyResult>): ProductFamilyResult {
    const message = { ...baseProductFamilyResult } as ProductFamilyResult;
    message.productfamilies = [];
    if (object.productfamilies !== undefined && object.productfamilies !== null) {
      for (const e of object.productfamilies) {
        message.productfamilies.push(ProductFamily.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ProductFamilyResult): unknown {
    const obj: any = {};
    if (message.productfamilies) {
      obj.productfamilies = message.productfamilies.map(e => e ? ProductFamily.toJSON(e) : undefined);
    } else {
      obj.productfamilies = [];
    }
    return obj;
  },
};

export const ProductFamily = {
  encode(message: ProductFamily, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.slug);
    writer.uint32(34).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ProductFamily {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProductFamily } as ProductFamily;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.slug = reader.string();
          break;
        case 4:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProductFamily {
    const message = { ...baseProductFamily } as ProductFamily;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProductFamily>): ProductFamily {
    const message = { ...baseProductFamily } as ProductFamily;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: ProductFamily): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.name = message.name || "";
    obj.slug = message.slug || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PulseResult = {
  encode(message: PulseResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.pulses) {
      Pulse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PulseResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePulseResult } as PulseResult;
    message.pulses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pulses.push(Pulse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PulseResult {
    const message = { ...basePulseResult } as PulseResult;
    message.pulses = [];
    if (object.pulses !== undefined && object.pulses !== null) {
      for (const e of object.pulses) {
        message.pulses.push(Pulse.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PulseResult>): PulseResult {
    const message = { ...basePulseResult } as PulseResult;
    message.pulses = [];
    if (object.pulses !== undefined && object.pulses !== null) {
      for (const e of object.pulses) {
        message.pulses.push(Pulse.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PulseResult): unknown {
    const obj: any = {};
    if (message.pulses) {
      obj.pulses = message.pulses.map(e => e ? Pulse.toJSON(e) : undefined);
    } else {
      obj.pulses = [];
    }
    return obj;
  },
};

export const Pulse = {
  encode(message: Pulse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(18).string(message.author);
    writer.uint32(24).int32(message.category);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).bool(message.ignored);
    writer.uint32(50).string(message.image);
    if (message.publishedAt !== undefined && message.publishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.publishedAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.pulseImage !== undefined && message.pulseImage !== undefined) {
      PulseImage.encode(message.pulseImage, writer.uint32(66).fork()).ldelim();
    }
    if (message.pulseSource !== undefined && message.pulseSource !== undefined) {
      PulseSource.encode(message.pulseSource, writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(82).string(message.summary);
    writer.uint32(90).fork();
    for (const v of message.tags) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(98).string(message.title);
    writer.uint32(106).string(message.uid);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.videos) {
      writer.uint32(122).string(v);
    }
    if (message.website !== undefined && message.website !== undefined) {
      PulseUrl.encode(message.website, writer.uint32(130).fork()).ldelim();
    }
    writer.uint32(138).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Pulse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePulse } as Pulse;
    message.tags = [];
    message.videos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.author = reader.string();
          break;
        case 3:
          message.category = reader.int32();
          break;
        case 4:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.ignored = reader.bool();
          break;
        case 6:
          message.image = reader.string();
          break;
        case 7:
          message.publishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.pulseImage = PulseImage.decode(reader, reader.uint32());
          break;
        case 9:
          message.pulseSource = PulseSource.decode(reader, reader.uint32());
          break;
        case 10:
          message.summary = reader.string();
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tags.push(reader.int32());
            }
          } else {
            message.tags.push(reader.int32());
          }
          break;
        case 12:
          message.title = reader.string();
          break;
        case 13:
          message.uid = reader.string();
          break;
        case 14:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 15:
          message.videos.push(reader.string());
          break;
        case 16:
          message.website = PulseUrl.decode(reader, reader.uint32());
          break;
        case 17:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pulse {
    const message = { ...basePulse } as Pulse;
    message.tags = [];
    message.videos = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = String(object.author);
    } else {
      message.author = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = Number(object.category);
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.ignored !== undefined && object.ignored !== null) {
      message.ignored = Boolean(object.ignored);
    } else {
      message.ignored = false;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image);
    } else {
      message.image = "";
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = fromJsonTimestamp(object.publishedAt);
    } else {
      message.publishedAt = undefined;
    }
    if (object.pulseImage !== undefined && object.pulseImage !== null) {
      message.pulseImage = PulseImage.fromJSON(object.pulseImage);
    } else {
      message.pulseImage = undefined;
    }
    if (object.pulseSource !== undefined && object.pulseSource !== null) {
      message.pulseSource = PulseSource.fromJSON(object.pulseSource);
    } else {
      message.pulseSource = undefined;
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = String(object.summary);
    } else {
      message.summary = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(Number(e));
      }
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.videos !== undefined && object.videos !== null) {
      for (const e of object.videos) {
        message.videos.push(String(e));
      }
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = PulseUrl.fromJSON(object.website);
    } else {
      message.website = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Pulse>): Pulse {
    const message = { ...basePulse } as Pulse;
    message.tags = [];
    message.videos = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    } else {
      message.author = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.ignored !== undefined && object.ignored !== null) {
      message.ignored = object.ignored;
    } else {
      message.ignored = false;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    } else {
      message.image = "";
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = object.publishedAt;
    } else {
      message.publishedAt = undefined;
    }
    if (object.pulseImage !== undefined && object.pulseImage !== null) {
      message.pulseImage = PulseImage.fromPartial(object.pulseImage);
    } else {
      message.pulseImage = undefined;
    }
    if (object.pulseSource !== undefined && object.pulseSource !== null) {
      message.pulseSource = PulseSource.fromPartial(object.pulseSource);
    } else {
      message.pulseSource = undefined;
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    } else {
      message.summary = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.videos !== undefined && object.videos !== null) {
      for (const e of object.videos) {
        message.videos.push(e);
      }
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = PulseUrl.fromPartial(object.website);
    } else {
      message.website = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Pulse): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.author = message.author || "";
    obj.category = message.category || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.ignored = message.ignored || false;
    obj.image = message.image || "";
    obj.publishedAt = message.publishedAt !== undefined ? message.publishedAt.toISOString() : null;
    obj.pulseImage = message.pulseImage ? PulseImage.toJSON(message.pulseImage) : undefined;
    obj.pulseSource = message.pulseSource ? PulseSource.toJSON(message.pulseSource) : undefined;
    obj.summary = message.summary || "";
    if (message.tags) {
      obj.tags = message.tags.map(e => e || 0);
    } else {
      obj.tags = [];
    }
    obj.title = message.title || "";
    obj.uid = message.uid || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    if (message.videos) {
      obj.videos = message.videos.map(e => e || "");
    } else {
      obj.videos = [];
    }
    obj.website = message.website ? PulseUrl.toJSON(message.website) : undefined;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PulseGroupResult = {
  encode(message: PulseGroupResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.pulsegroups) {
      PulseGroup.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PulseGroupResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePulseGroupResult } as PulseGroupResult;
    message.pulsegroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pulsegroups.push(PulseGroup.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PulseGroupResult {
    const message = { ...basePulseGroupResult } as PulseGroupResult;
    message.pulsegroups = [];
    if (object.pulsegroups !== undefined && object.pulsegroups !== null) {
      for (const e of object.pulsegroups) {
        message.pulsegroups.push(PulseGroup.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PulseGroupResult>): PulseGroupResult {
    const message = { ...basePulseGroupResult } as PulseGroupResult;
    message.pulsegroups = [];
    if (object.pulsegroups !== undefined && object.pulsegroups !== null) {
      for (const e of object.pulsegroups) {
        message.pulsegroups.push(PulseGroup.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PulseGroupResult): unknown {
    const obj: any = {};
    if (message.pulsegroups) {
      obj.pulsegroups = message.pulsegroups.map(e => e ? PulseGroup.toJSON(e) : undefined);
    } else {
      obj.pulsegroups = [];
    }
    return obj;
  },
};

export const PulseGroup = {
  encode(message: PulseGroup, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.name);
    if (message.publishedAt !== undefined && message.publishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.publishedAt), writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.pulses) {
      Pulse.encode(v, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.tags) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PulseGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePulseGroup } as PulseGroup;
    message.pulses = [];
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.publishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.pulses.push(Pulse.decode(reader, reader.uint32()));
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tags.push(reader.int32());
            }
          } else {
            message.tags.push(reader.int32());
          }
          break;
        case 8:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PulseGroup {
    const message = { ...basePulseGroup } as PulseGroup;
    message.pulses = [];
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = fromJsonTimestamp(object.publishedAt);
    } else {
      message.publishedAt = undefined;
    }
    if (object.pulses !== undefined && object.pulses !== null) {
      for (const e of object.pulses) {
        message.pulses.push(Pulse.fromJSON(e));
      }
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(Number(e));
      }
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PulseGroup>): PulseGroup {
    const message = { ...basePulseGroup } as PulseGroup;
    message.pulses = [];
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = object.publishedAt;
    } else {
      message.publishedAt = undefined;
    }
    if (object.pulses !== undefined && object.pulses !== null) {
      for (const e of object.pulses) {
        message.pulses.push(Pulse.fromPartial(e));
      }
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PulseGroup): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.name = message.name || "";
    obj.publishedAt = message.publishedAt !== undefined ? message.publishedAt.toISOString() : null;
    if (message.pulses) {
      obj.pulses = message.pulses.map(e => e ? Pulse.toJSON(e) : undefined);
    } else {
      obj.pulses = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map(e => e || 0);
    } else {
      obj.tags = [];
    }
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PulseImageResult = {
  encode(message: PulseImageResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.pulseimages) {
      PulseImage.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PulseImageResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePulseImageResult } as PulseImageResult;
    message.pulseimages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pulseimages.push(PulseImage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PulseImageResult {
    const message = { ...basePulseImageResult } as PulseImageResult;
    message.pulseimages = [];
    if (object.pulseimages !== undefined && object.pulseimages !== null) {
      for (const e of object.pulseimages) {
        message.pulseimages.push(PulseImage.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PulseImageResult>): PulseImageResult {
    const message = { ...basePulseImageResult } as PulseImageResult;
    message.pulseimages = [];
    if (object.pulseimages !== undefined && object.pulseimages !== null) {
      for (const e of object.pulseimages) {
        message.pulseimages.push(PulseImage.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PulseImageResult): unknown {
    const obj: any = {};
    if (message.pulseimages) {
      obj.pulseimages = message.pulseimages.map(e => e ? PulseImage.toJSON(e) : undefined);
    } else {
      obj.pulseimages = [];
    }
    return obj;
  },
};

export const PulseImage = {
  encode(message: PulseImage, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    writer.uint32(32).int32(message.height);
    writer.uint32(42).string(message.imageId);
    writer.uint32(50).string(message.url);
    writer.uint32(56).int32(message.width);
    writer.uint32(66).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PulseImage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePulseImage } as PulseImage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.imageId = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.width = reader.int32();
          break;
        case 8:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PulseImage {
    const message = { ...basePulseImage } as PulseImage;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PulseImage>): PulseImage {
    const message = { ...basePulseImage } as PulseImage;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PulseImage): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PulseSourceResult = {
  encode(message: PulseSourceResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.pulsesources) {
      PulseSource.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PulseSourceResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePulseSourceResult } as PulseSourceResult;
    message.pulsesources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pulsesources.push(PulseSource.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PulseSourceResult {
    const message = { ...basePulseSourceResult } as PulseSourceResult;
    message.pulsesources = [];
    if (object.pulsesources !== undefined && object.pulsesources !== null) {
      for (const e of object.pulsesources) {
        message.pulsesources.push(PulseSource.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PulseSourceResult>): PulseSourceResult {
    const message = { ...basePulseSourceResult } as PulseSourceResult;
    message.pulsesources = [];
    if (object.pulsesources !== undefined && object.pulsesources !== null) {
      for (const e of object.pulsesources) {
        message.pulsesources.push(PulseSource.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PulseSourceResult): unknown {
    const obj: any = {};
    if (message.pulsesources) {
      obj.pulsesources = message.pulsesources.map(e => e ? PulseSource.toJSON(e) : undefined);
    } else {
      obj.pulsesources = [];
    }
    return obj;
  },
};

export const PulseSource = {
  encode(message: PulseSource, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    if (message.page !== undefined && message.page !== undefined) {
      Page.encode(message.page, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PulseSource {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePulseSource } as PulseSource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.page = Page.decode(reader, reader.uint32());
          break;
        case 5:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PulseSource {
    const message = { ...basePulseSource } as PulseSource;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = Page.fromJSON(object.page);
    } else {
      message.page = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PulseSource>): PulseSource {
    const message = { ...basePulseSource } as PulseSource;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = Page.fromPartial(object.page);
    } else {
      message.page = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PulseSource): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.name = message.name || "";
    obj.page = message.page ? Page.toJSON(message.page) : undefined;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const PulseUrlResult = {
  encode(message: PulseUrlResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.pulseurls) {
      PulseUrl.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PulseUrlResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePulseUrlResult } as PulseUrlResult;
    message.pulseurls = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pulseurls.push(PulseUrl.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PulseUrlResult {
    const message = { ...basePulseUrlResult } as PulseUrlResult;
    message.pulseurls = [];
    if (object.pulseurls !== undefined && object.pulseurls !== null) {
      for (const e of object.pulseurls) {
        message.pulseurls.push(PulseUrl.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PulseUrlResult>): PulseUrlResult {
    const message = { ...basePulseUrlResult } as PulseUrlResult;
    message.pulseurls = [];
    if (object.pulseurls !== undefined && object.pulseurls !== null) {
      for (const e of object.pulseurls) {
        message.pulseurls.push(PulseUrl.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: PulseUrlResult): unknown {
    const obj: any = {};
    if (message.pulseurls) {
      obj.pulseurls = message.pulseurls.map(e => e ? PulseUrl.toJSON(e) : undefined);
    } else {
      obj.pulseurls = [];
    }
    return obj;
  },
};

export const PulseUrl = {
  encode(message: PulseUrl, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.trusted);
    writer.uint32(26).string(message.url);
    writer.uint32(34).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PulseUrl {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePulseUrl } as PulseUrl;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.trusted = reader.bool();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PulseUrl {
    const message = { ...basePulseUrl } as PulseUrl;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = Boolean(object.trusted);
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PulseUrl>): PulseUrl {
    const message = { ...basePulseUrl } as PulseUrl;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = object.trusted;
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: PulseUrl): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.trusted = message.trusted || false;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const RateResult = {
  encode(message: RateResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.rates) {
      Rate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RateResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRateResult } as RateResult;
    message.rates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rates.push(Rate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RateResult {
    const message = { ...baseRateResult } as RateResult;
    message.rates = [];
    if (object.rates !== undefined && object.rates !== null) {
      for (const e of object.rates) {
        message.rates.push(Rate.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RateResult>): RateResult {
    const message = { ...baseRateResult } as RateResult;
    message.rates = [];
    if (object.rates !== undefined && object.rates !== null) {
      for (const e of object.rates) {
        message.rates.push(Rate.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: RateResult): unknown {
    const obj: any = {};
    if (message.rates) {
      obj.rates = message.rates.map(e => e ? Rate.toJSON(e) : undefined);
    } else {
      obj.rates = [];
    }
    return obj;
  },
};

export const Rate = {
  encode(message: Rate, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).bool(message.private);
    writer.uint32(33).double(message.rating);
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Rate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRate } as Rate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 3:
          message.private = reader.bool();
          break;
        case 4:
          message.rating = reader.double();
          break;
        case 5:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 6:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Rate {
    const message = { ...baseRate } as Rate;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.private !== undefined && object.private !== null) {
      message.private = Boolean(object.private);
    } else {
      message.private = false;
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = Number(object.rating);
    } else {
      message.rating = 0;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Rate>): Rate {
    const message = { ...baseRate } as Rate;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.private !== undefined && object.private !== null) {
      message.private = object.private;
    } else {
      message.private = false;
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = object.rating;
    } else {
      message.rating = 0;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Rate): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.private = message.private || false;
    obj.rating = message.rating || 0;
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const ReleaseDateResult = {
  encode(message: ReleaseDateResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.releasedates) {
      ReleaseDate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ReleaseDateResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReleaseDateResult } as ReleaseDateResult;
    message.releasedates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.releasedates.push(ReleaseDate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReleaseDateResult {
    const message = { ...baseReleaseDateResult } as ReleaseDateResult;
    message.releasedates = [];
    if (object.releasedates !== undefined && object.releasedates !== null) {
      for (const e of object.releasedates) {
        message.releasedates.push(ReleaseDate.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReleaseDateResult>): ReleaseDateResult {
    const message = { ...baseReleaseDateResult } as ReleaseDateResult;
    message.releasedates = [];
    if (object.releasedates !== undefined && object.releasedates !== null) {
      for (const e of object.releasedates) {
        message.releasedates.push(ReleaseDate.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ReleaseDateResult): unknown {
    const obj: any = {};
    if (message.releasedates) {
      obj.releasedates = message.releasedates.map(e => e ? ReleaseDate.toJSON(e) : undefined);
    } else {
      obj.releasedates = [];
    }
    return obj;
  },
};

export const ReleaseDate = {
  encode(message: ReleaseDate, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.date !== undefined && message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(34).fork()).ldelim();
    }
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.human);
    writer.uint32(56).int32(message.m);
    if (message.platform !== undefined && message.platform !== undefined) {
      Platform.encode(message.platform, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(72).int32(message.region);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
    }
    writer.uint32(88).int32(message.y);
    writer.uint32(98).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ReleaseDate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReleaseDate } as ReleaseDate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 6:
          message.human = reader.string();
          break;
        case 7:
          message.m = reader.int32();
          break;
        case 8:
          message.platform = Platform.decode(reader, reader.uint32());
          break;
        case 9:
          message.region = reader.int32() as any;
          break;
        case 10:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.y = reader.int32();
          break;
        case 12:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReleaseDate {
    const message = { ...baseReleaseDate } as ReleaseDate;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = DateFormatChangeDateCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = fromJsonTimestamp(object.date);
    } else {
      message.date = undefined;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.human !== undefined && object.human !== null) {
      message.human = String(object.human);
    } else {
      message.human = "";
    }
    if (object.m !== undefined && object.m !== null) {
      message.m = Number(object.m);
    } else {
      message.m = 0;
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromJSON(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = RegionLanguageEnum.fromJSON(object.region);
    } else {
      message.region = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = Number(object.y);
    } else {
      message.y = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReleaseDate>): ReleaseDate {
    const message = { ...baseReleaseDate } as ReleaseDate;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = undefined;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.human !== undefined && object.human !== null) {
      message.human = object.human;
    } else {
      message.human = "";
    }
    if (object.m !== undefined && object.m !== null) {
      message.m = object.m;
    } else {
      message.m = 0;
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromPartial(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = object.region;
    } else {
      message.region = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = object.y;
    } else {
      message.y = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: ReleaseDate): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = DateFormatChangeDateCategoryEnum.toJSON(message.category);
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.date = message.date !== undefined ? message.date.toISOString() : null;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.human = message.human || "";
    obj.m = message.m || 0;
    obj.platform = message.platform ? Platform.toJSON(message.platform) : undefined;
    obj.region = RegionLanguageEnum.toJSON(message.region);
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.y = message.y || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const ReviewResult = {
  encode(message: ReviewResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.reviews) {
      Review.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ReviewResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReviewResult } as ReviewResult;
    message.reviews = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviews.push(Review.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReviewResult {
    const message = { ...baseReviewResult } as ReviewResult;
    message.reviews = [];
    if (object.reviews !== undefined && object.reviews !== null) {
      for (const e of object.reviews) {
        message.reviews.push(Review.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReviewResult>): ReviewResult {
    const message = { ...baseReviewResult } as ReviewResult;
    message.reviews = [];
    if (object.reviews !== undefined && object.reviews !== null) {
      for (const e of object.reviews) {
        message.reviews.push(Review.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ReviewResult): unknown {
    const obj: any = {};
    if (message.reviews) {
      obj.reviews = message.reviews.map(e => e ? Review.toJSON(e) : undefined);
    } else {
      obj.reviews = [];
    }
    return obj;
  },
};

export const Review = {
  encode(message: Review, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    writer.uint32(26).string(message.conclusion);
    writer.uint32(34).string(message.content);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).string(message.introduction);
    writer.uint32(64).int32(message.likes);
    writer.uint32(74).string(message.negativePoints);
    if (message.platform !== undefined && message.platform !== undefined) {
      Platform.encode(message.platform, writer.uint32(82).fork()).ldelim();
    }
    writer.uint32(90).string(message.positivePoints);
    writer.uint32(98).string(message.slug);
    writer.uint32(106).string(message.title);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(114).fork()).ldelim();
    }
    writer.uint32(122).string(message.url);
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(130).fork()).ldelim();
    }
    if (message.userRating !== undefined && message.userRating !== undefined) {
      Rate.encode(message.userRating, writer.uint32(138).fork()).ldelim();
    }
    if (message.video !== undefined && message.video !== undefined) {
      ReviewVideo.encode(message.video, writer.uint32(146).fork()).ldelim();
    }
    writer.uint32(152).int32(message.views);
    writer.uint32(162).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Review {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReview } as Review;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.conclusion = reader.string();
          break;
        case 4:
          message.content = reader.string();
          break;
        case 5:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 7:
          message.introduction = reader.string();
          break;
        case 8:
          message.likes = reader.int32();
          break;
        case 9:
          message.negativePoints = reader.string();
          break;
        case 10:
          message.platform = Platform.decode(reader, reader.uint32());
          break;
        case 11:
          message.positivePoints = reader.string();
          break;
        case 12:
          message.slug = reader.string();
          break;
        case 13:
          message.title = reader.string();
          break;
        case 14:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 15:
          message.url = reader.string();
          break;
        case 16:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 17:
          message.userRating = Rate.decode(reader, reader.uint32());
          break;
        case 18:
          message.video = ReviewVideo.decode(reader, reader.uint32());
          break;
        case 19:
          message.views = reader.int32();
          break;
        case 20:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Review {
    const message = { ...baseReview } as Review;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = ReviewCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.conclusion !== undefined && object.conclusion !== null) {
      message.conclusion = String(object.conclusion);
    } else {
      message.conclusion = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.introduction !== undefined && object.introduction !== null) {
      message.introduction = String(object.introduction);
    } else {
      message.introduction = "";
    }
    if (object.likes !== undefined && object.likes !== null) {
      message.likes = Number(object.likes);
    } else {
      message.likes = 0;
    }
    if (object.negativePoints !== undefined && object.negativePoints !== null) {
      message.negativePoints = String(object.negativePoints);
    } else {
      message.negativePoints = "";
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromJSON(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.positivePoints !== undefined && object.positivePoints !== null) {
      message.positivePoints = String(object.positivePoints);
    } else {
      message.positivePoints = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.userRating !== undefined && object.userRating !== null) {
      message.userRating = Rate.fromJSON(object.userRating);
    } else {
      message.userRating = undefined;
    }
    if (object.video !== undefined && object.video !== null) {
      message.video = ReviewVideo.fromJSON(object.video);
    } else {
      message.video = undefined;
    }
    if (object.views !== undefined && object.views !== null) {
      message.views = Number(object.views);
    } else {
      message.views = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Review>): Review {
    const message = { ...baseReview } as Review;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.conclusion !== undefined && object.conclusion !== null) {
      message.conclusion = object.conclusion;
    } else {
      message.conclusion = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.introduction !== undefined && object.introduction !== null) {
      message.introduction = object.introduction;
    } else {
      message.introduction = "";
    }
    if (object.likes !== undefined && object.likes !== null) {
      message.likes = object.likes;
    } else {
      message.likes = 0;
    }
    if (object.negativePoints !== undefined && object.negativePoints !== null) {
      message.negativePoints = object.negativePoints;
    } else {
      message.negativePoints = "";
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromPartial(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.positivePoints !== undefined && object.positivePoints !== null) {
      message.positivePoints = object.positivePoints;
    } else {
      message.positivePoints = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.userRating !== undefined && object.userRating !== null) {
      message.userRating = Rate.fromPartial(object.userRating);
    } else {
      message.userRating = undefined;
    }
    if (object.video !== undefined && object.video !== null) {
      message.video = ReviewVideo.fromPartial(object.video);
    } else {
      message.video = undefined;
    }
    if (object.views !== undefined && object.views !== null) {
      message.views = object.views;
    } else {
      message.views = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Review): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = ReviewCategoryEnum.toJSON(message.category);
    obj.conclusion = message.conclusion || "";
    obj.content = message.content || "";
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.introduction = message.introduction || "";
    obj.likes = message.likes || 0;
    obj.negativePoints = message.negativePoints || "";
    obj.platform = message.platform ? Platform.toJSON(message.platform) : undefined;
    obj.positivePoints = message.positivePoints || "";
    obj.slug = message.slug || "";
    obj.title = message.title || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    obj.userRating = message.userRating ? Rate.toJSON(message.userRating) : undefined;
    obj.video = message.video ? ReviewVideo.toJSON(message.video) : undefined;
    obj.views = message.views || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const ReviewVideoResult = {
  encode(message: ReviewVideoResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.reviewvideos) {
      ReviewVideo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ReviewVideoResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReviewVideoResult } as ReviewVideoResult;
    message.reviewvideos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewvideos.push(ReviewVideo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReviewVideoResult {
    const message = { ...baseReviewVideoResult } as ReviewVideoResult;
    message.reviewvideos = [];
    if (object.reviewvideos !== undefined && object.reviewvideos !== null) {
      for (const e of object.reviewvideos) {
        message.reviewvideos.push(ReviewVideo.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReviewVideoResult>): ReviewVideoResult {
    const message = { ...baseReviewVideoResult } as ReviewVideoResult;
    message.reviewvideos = [];
    if (object.reviewvideos !== undefined && object.reviewvideos !== null) {
      for (const e of object.reviewvideos) {
        message.reviewvideos.push(ReviewVideo.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ReviewVideoResult): unknown {
    const obj: any = {};
    if (message.reviewvideos) {
      obj.reviewvideos = message.reviewvideos.map(e => e ? ReviewVideo.toJSON(e) : undefined);
    } else {
      obj.reviewvideos = [];
    }
    return obj;
  },
};

export const ReviewVideo = {
  encode(message: ReviewVideo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.trusted);
    writer.uint32(26).string(message.url);
    writer.uint32(34).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ReviewVideo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReviewVideo } as ReviewVideo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.trusted = reader.bool();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReviewVideo {
    const message = { ...baseReviewVideo } as ReviewVideo;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = Boolean(object.trusted);
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReviewVideo>): ReviewVideo {
    const message = { ...baseReviewVideo } as ReviewVideo;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = object.trusted;
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: ReviewVideo): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.trusted = message.trusted || false;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const ScreenshotResult = {
  encode(message: ScreenshotResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.screenshots) {
      Screenshot.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ScreenshotResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScreenshotResult } as ScreenshotResult;
    message.screenshots = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screenshots.push(Screenshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ScreenshotResult {
    const message = { ...baseScreenshotResult } as ScreenshotResult;
    message.screenshots = [];
    if (object.screenshots !== undefined && object.screenshots !== null) {
      for (const e of object.screenshots) {
        message.screenshots.push(Screenshot.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ScreenshotResult>): ScreenshotResult {
    const message = { ...baseScreenshotResult } as ScreenshotResult;
    message.screenshots = [];
    if (object.screenshots !== undefined && object.screenshots !== null) {
      for (const e of object.screenshots) {
        message.screenshots.push(Screenshot.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ScreenshotResult): unknown {
    const obj: any = {};
    if (message.screenshots) {
      obj.screenshots = message.screenshots.map(e => e ? Screenshot.toJSON(e) : undefined);
    } else {
      obj.screenshots = [];
    }
    return obj;
  },
};

export const Screenshot = {
  encode(message: Screenshot, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.alphaChannel);
    writer.uint32(24).bool(message.animated);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).int32(message.height);
    writer.uint32(50).string(message.imageId);
    writer.uint32(58).string(message.url);
    writer.uint32(64).int32(message.width);
    writer.uint32(74).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Screenshot {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScreenshot } as Screenshot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alphaChannel = reader.bool();
          break;
        case 3:
          message.animated = reader.bool();
          break;
        case 4:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 5:
          message.height = reader.int32();
          break;
        case 6:
          message.imageId = reader.string();
          break;
        case 7:
          message.url = reader.string();
          break;
        case 8:
          message.width = reader.int32();
          break;
        case 9:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Screenshot {
    const message = { ...baseScreenshot } as Screenshot;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = Boolean(object.alphaChannel);
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = Boolean(object.animated);
    } else {
      message.animated = false;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = String(object.imageId);
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Screenshot>): Screenshot {
    const message = { ...baseScreenshot } as Screenshot;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alphaChannel !== undefined && object.alphaChannel !== null) {
      message.alphaChannel = object.alphaChannel;
    } else {
      message.alphaChannel = false;
    }
    if (object.animated !== undefined && object.animated !== null) {
      message.animated = object.animated;
    } else {
      message.animated = false;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = object.imageId;
    } else {
      message.imageId = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Screenshot): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alphaChannel = message.alphaChannel || false;
    obj.animated = message.animated || false;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.height = message.height || 0;
    obj.imageId = message.imageId || "";
    obj.url = message.url || "";
    obj.width = message.width || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const SearchResult = {
  encode(message: SearchResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.searches) {
      Search.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SearchResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchResult } as SearchResult;
    message.searches = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.searches.push(Search.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SearchResult {
    const message = { ...baseSearchResult } as SearchResult;
    message.searches = [];
    if (object.searches !== undefined && object.searches !== null) {
      for (const e of object.searches) {
        message.searches.push(Search.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SearchResult>): SearchResult {
    const message = { ...baseSearchResult } as SearchResult;
    message.searches = [];
    if (object.searches !== undefined && object.searches !== null) {
      for (const e of object.searches) {
        message.searches.push(Search.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: SearchResult): unknown {
    const obj: any = {};
    if (message.searches) {
      obj.searches = message.searches.map(e => e ? Search.toJSON(e) : undefined);
    } else {
      obj.searches = [];
    }
    return obj;
  },
};

export const Search = {
  encode(message: Search, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(18).string(message.alternativeName);
    if (message.character !== undefined && message.character !== undefined) {
      Character.encode(message.character, writer.uint32(26).fork()).ldelim();
    }
    if (message.collection !== undefined && message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(34).fork()).ldelim();
    }
    if (message.company !== undefined && message.company !== undefined) {
      Company.encode(message.company, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.description);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).string(message.name);
    if (message.person !== undefined && message.person !== undefined) {
      Person.encode(message.person, writer.uint32(74).fork()).ldelim();
    }
    if (message.platform !== undefined && message.platform !== undefined) {
      Platform.encode(message.platform, writer.uint32(82).fork()).ldelim();
    }
    writer.uint32(89).double(message.popularity);
    if (message.publishedAt !== undefined && message.publishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.publishedAt), writer.uint32(98).fork()).ldelim();
    }
    if (message.testDummy !== undefined && message.testDummy !== undefined) {
      TestDummy.encode(message.testDummy, writer.uint32(106).fork()).ldelim();
    }
    if (message.theme !== undefined && message.theme !== undefined) {
      Theme.encode(message.theme, writer.uint32(114).fork()).ldelim();
    }
    writer.uint32(122).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Search {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearch } as Search;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alternativeName = reader.string();
          break;
        case 3:
          message.character = Character.decode(reader, reader.uint32());
          break;
        case 4:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        case 5:
          message.company = Company.decode(reader, reader.uint32());
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 8:
          message.name = reader.string();
          break;
        case 9:
          message.person = Person.decode(reader, reader.uint32());
          break;
        case 10:
          message.platform = Platform.decode(reader, reader.uint32());
          break;
        case 11:
          message.popularity = reader.double();
          break;
        case 12:
          message.publishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 13:
          message.testDummy = TestDummy.decode(reader, reader.uint32());
          break;
        case 14:
          message.theme = Theme.decode(reader, reader.uint32());
          break;
        case 15:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Search {
    const message = { ...baseSearch } as Search;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.alternativeName !== undefined && object.alternativeName !== null) {
      message.alternativeName = String(object.alternativeName);
    } else {
      message.alternativeName = "";
    }
    if (object.character !== undefined && object.character !== null) {
      message.character = Character.fromJSON(object.character);
    } else {
      message.character = undefined;
    }
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromJSON(object.collection);
    } else {
      message.collection = undefined;
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = Company.fromJSON(object.company);
    } else {
      message.company = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.person !== undefined && object.person !== null) {
      message.person = Person.fromJSON(object.person);
    } else {
      message.person = undefined;
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromJSON(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.popularity !== undefined && object.popularity !== null) {
      message.popularity = Number(object.popularity);
    } else {
      message.popularity = 0;
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = fromJsonTimestamp(object.publishedAt);
    } else {
      message.publishedAt = undefined;
    }
    if (object.testDummy !== undefined && object.testDummy !== null) {
      message.testDummy = TestDummy.fromJSON(object.testDummy);
    } else {
      message.testDummy = undefined;
    }
    if (object.theme !== undefined && object.theme !== null) {
      message.theme = Theme.fromJSON(object.theme);
    } else {
      message.theme = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Search>): Search {
    const message = { ...baseSearch } as Search;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.alternativeName !== undefined && object.alternativeName !== null) {
      message.alternativeName = object.alternativeName;
    } else {
      message.alternativeName = "";
    }
    if (object.character !== undefined && object.character !== null) {
      message.character = Character.fromPartial(object.character);
    } else {
      message.character = undefined;
    }
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromPartial(object.collection);
    } else {
      message.collection = undefined;
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = Company.fromPartial(object.company);
    } else {
      message.company = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.person !== undefined && object.person !== null) {
      message.person = Person.fromPartial(object.person);
    } else {
      message.person = undefined;
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromPartial(object.platform);
    } else {
      message.platform = undefined;
    }
    if (object.popularity !== undefined && object.popularity !== null) {
      message.popularity = object.popularity;
    } else {
      message.popularity = 0;
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = object.publishedAt;
    } else {
      message.publishedAt = undefined;
    }
    if (object.testDummy !== undefined && object.testDummy !== null) {
      message.testDummy = TestDummy.fromPartial(object.testDummy);
    } else {
      message.testDummy = undefined;
    }
    if (object.theme !== undefined && object.theme !== null) {
      message.theme = Theme.fromPartial(object.theme);
    } else {
      message.theme = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Search): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.alternativeName = message.alternativeName || "";
    obj.character = message.character ? Character.toJSON(message.character) : undefined;
    obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined;
    obj.company = message.company ? Company.toJSON(message.company) : undefined;
    obj.description = message.description || "";
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.name = message.name || "";
    obj.person = message.person ? Person.toJSON(message.person) : undefined;
    obj.platform = message.platform ? Platform.toJSON(message.platform) : undefined;
    obj.popularity = message.popularity || 0;
    obj.publishedAt = message.publishedAt !== undefined ? message.publishedAt.toISOString() : null;
    obj.testDummy = message.testDummy ? TestDummy.toJSON(message.testDummy) : undefined;
    obj.theme = message.theme ? Theme.toJSON(message.theme) : undefined;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const TestDummyResult = {
  encode(message: TestDummyResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.testdummies) {
      TestDummy.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TestDummyResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestDummyResult } as TestDummyResult;
    message.testdummies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.testdummies.push(TestDummy.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TestDummyResult {
    const message = { ...baseTestDummyResult } as TestDummyResult;
    message.testdummies = [];
    if (object.testdummies !== undefined && object.testdummies !== null) {
      for (const e of object.testdummies) {
        message.testdummies.push(TestDummy.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TestDummyResult>): TestDummyResult {
    const message = { ...baseTestDummyResult } as TestDummyResult;
    message.testdummies = [];
    if (object.testdummies !== undefined && object.testdummies !== null) {
      for (const e of object.testdummies) {
        message.testdummies.push(TestDummy.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: TestDummyResult): unknown {
    const obj: any = {};
    if (message.testdummies) {
      obj.testdummies = message.testdummies.map(e => e ? TestDummy.toJSON(e) : undefined);
    } else {
      obj.testdummies = [];
    }
    return obj;
  },
};

export const TestDummy = {
  encode(message: TestDummy, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).bool(message.boolValue);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).int32(message.enumTest);
    writer.uint32(41).double(message.floatValue);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.integerArray) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(64).int32(message.integerValue);
    writer.uint32(74).string(message.name);
    writer.uint32(80).int32(message.newIntegerValue);
    writer.uint32(88).bool(message.private);
    writer.uint32(98).string(message.slug);
    for (const v of message.stringArray) {
      writer.uint32(106).string(v);
    }
    for (const v of message.testDummies) {
      TestDummy.encode(v, writer.uint32(114).fork()).ldelim();
    }
    if (message.testDummy !== undefined && message.testDummy !== undefined) {
      TestDummy.encode(message.testDummy, writer.uint32(122).fork()).ldelim();
    }
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(130).fork()).ldelim();
    }
    writer.uint32(138).string(message.url);
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(146).fork()).ldelim();
    }
    writer.uint32(154).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TestDummy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestDummy } as TestDummy;
    message.integerArray = [];
    message.stringArray = [];
    message.testDummies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.boolValue = reader.bool();
          break;
        case 3:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enumTest = reader.int32() as any;
          break;
        case 5:
          message.floatValue = reader.double();
          break;
        case 6:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.integerArray.push(reader.int32());
            }
          } else {
            message.integerArray.push(reader.int32());
          }
          break;
        case 8:
          message.integerValue = reader.int32();
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.newIntegerValue = reader.int32();
          break;
        case 11:
          message.private = reader.bool();
          break;
        case 12:
          message.slug = reader.string();
          break;
        case 13:
          message.stringArray.push(reader.string());
          break;
        case 14:
          message.testDummies.push(TestDummy.decode(reader, reader.uint32()));
          break;
        case 15:
          message.testDummy = TestDummy.decode(reader, reader.uint32());
          break;
        case 16:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 17:
          message.url = reader.string();
          break;
        case 18:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 19:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TestDummy {
    const message = { ...baseTestDummy } as TestDummy;
    message.integerArray = [];
    message.stringArray = [];
    message.testDummies = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.boolValue !== undefined && object.boolValue !== null) {
      message.boolValue = Boolean(object.boolValue);
    } else {
      message.boolValue = false;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.enumTest !== undefined && object.enumTest !== null) {
      message.enumTest = TestDummyEnumTestEnum.fromJSON(object.enumTest);
    } else {
      message.enumTest = 0;
    }
    if (object.floatValue !== undefined && object.floatValue !== null) {
      message.floatValue = Number(object.floatValue);
    } else {
      message.floatValue = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.integerArray !== undefined && object.integerArray !== null) {
      for (const e of object.integerArray) {
        message.integerArray.push(Number(e));
      }
    }
    if (object.integerValue !== undefined && object.integerValue !== null) {
      message.integerValue = Number(object.integerValue);
    } else {
      message.integerValue = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.newIntegerValue !== undefined && object.newIntegerValue !== null) {
      message.newIntegerValue = Number(object.newIntegerValue);
    } else {
      message.newIntegerValue = 0;
    }
    if (object.private !== undefined && object.private !== null) {
      message.private = Boolean(object.private);
    } else {
      message.private = false;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.stringArray !== undefined && object.stringArray !== null) {
      for (const e of object.stringArray) {
        message.stringArray.push(String(e));
      }
    }
    if (object.testDummies !== undefined && object.testDummies !== null) {
      for (const e of object.testDummies) {
        message.testDummies.push(TestDummy.fromJSON(e));
      }
    }
    if (object.testDummy !== undefined && object.testDummy !== null) {
      message.testDummy = TestDummy.fromJSON(object.testDummy);
    } else {
      message.testDummy = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<TestDummy>): TestDummy {
    const message = { ...baseTestDummy } as TestDummy;
    message.integerArray = [];
    message.stringArray = [];
    message.testDummies = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.boolValue !== undefined && object.boolValue !== null) {
      message.boolValue = object.boolValue;
    } else {
      message.boolValue = false;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.enumTest !== undefined && object.enumTest !== null) {
      message.enumTest = object.enumTest;
    } else {
      message.enumTest = 0;
    }
    if (object.floatValue !== undefined && object.floatValue !== null) {
      message.floatValue = object.floatValue;
    } else {
      message.floatValue = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.integerArray !== undefined && object.integerArray !== null) {
      for (const e of object.integerArray) {
        message.integerArray.push(e);
      }
    }
    if (object.integerValue !== undefined && object.integerValue !== null) {
      message.integerValue = object.integerValue;
    } else {
      message.integerValue = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.newIntegerValue !== undefined && object.newIntegerValue !== null) {
      message.newIntegerValue = object.newIntegerValue;
    } else {
      message.newIntegerValue = 0;
    }
    if (object.private !== undefined && object.private !== null) {
      message.private = object.private;
    } else {
      message.private = false;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.stringArray !== undefined && object.stringArray !== null) {
      for (const e of object.stringArray) {
        message.stringArray.push(e);
      }
    }
    if (object.testDummies !== undefined && object.testDummies !== null) {
      for (const e of object.testDummies) {
        message.testDummies.push(TestDummy.fromPartial(e));
      }
    }
    if (object.testDummy !== undefined && object.testDummy !== null) {
      message.testDummy = TestDummy.fromPartial(object.testDummy);
    } else {
      message.testDummy = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: TestDummy): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.boolValue = message.boolValue || false;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.enumTest = TestDummyEnumTestEnum.toJSON(message.enumTest);
    obj.floatValue = message.floatValue || 0;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    if (message.integerArray) {
      obj.integerArray = message.integerArray.map(e => e || 0);
    } else {
      obj.integerArray = [];
    }
    obj.integerValue = message.integerValue || 0;
    obj.name = message.name || "";
    obj.newIntegerValue = message.newIntegerValue || 0;
    obj.private = message.private || false;
    obj.slug = message.slug || "";
    if (message.stringArray) {
      obj.stringArray = message.stringArray.map(e => e || "");
    } else {
      obj.stringArray = [];
    }
    if (message.testDummies) {
      obj.testDummies = message.testDummies.map(e => e ? TestDummy.toJSON(e) : undefined);
    } else {
      obj.testDummies = [];
    }
    obj.testDummy = message.testDummy ? TestDummy.toJSON(message.testDummy) : undefined;
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const ThemeResult = {
  encode(message: ThemeResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.themes) {
      Theme.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ThemeResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseThemeResult } as ThemeResult;
    message.themes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.themes.push(Theme.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ThemeResult {
    const message = { ...baseThemeResult } as ThemeResult;
    message.themes = [];
    if (object.themes !== undefined && object.themes !== null) {
      for (const e of object.themes) {
        message.themes.push(Theme.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ThemeResult>): ThemeResult {
    const message = { ...baseThemeResult } as ThemeResult;
    message.themes = [];
    if (object.themes !== undefined && object.themes !== null) {
      for (const e of object.themes) {
        message.themes.push(Theme.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ThemeResult): unknown {
    const obj: any = {};
    if (message.themes) {
      obj.themes = message.themes.map(e => e ? Theme.toJSON(e) : undefined);
    } else {
      obj.themes = [];
    }
    return obj;
  },
};

export const Theme = {
  encode(message: Theme, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.url);
    writer.uint32(58).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Theme {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTheme } as Theme;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.slug = reader.string();
          break;
        case 5:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Theme {
    const message = { ...baseTheme } as Theme;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Theme>): Theme {
    const message = { ...baseTheme } as Theme;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Theme): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.name = message.name || "";
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const TimeToBeatResult = {
  encode(message: TimeToBeatResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.timetobeats) {
      TimeToBeat.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TimeToBeatResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimeToBeatResult } as TimeToBeatResult;
    message.timetobeats = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timetobeats.push(TimeToBeat.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimeToBeatResult {
    const message = { ...baseTimeToBeatResult } as TimeToBeatResult;
    message.timetobeats = [];
    if (object.timetobeats !== undefined && object.timetobeats !== null) {
      for (const e of object.timetobeats) {
        message.timetobeats.push(TimeToBeat.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TimeToBeatResult>): TimeToBeatResult {
    const message = { ...baseTimeToBeatResult } as TimeToBeatResult;
    message.timetobeats = [];
    if (object.timetobeats !== undefined && object.timetobeats !== null) {
      for (const e of object.timetobeats) {
        message.timetobeats.push(TimeToBeat.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: TimeToBeatResult): unknown {
    const obj: any = {};
    if (message.timetobeats) {
      obj.timetobeats = message.timetobeats.map(e => e ? TimeToBeat.toJSON(e) : undefined);
    } else {
      obj.timetobeats = [];
    }
    return obj;
  },
};

export const TimeToBeat = {
  encode(message: TimeToBeat, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.completely);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).int32(message.hastly);
    writer.uint32(40).int32(message.normally);
    writer.uint32(50).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TimeToBeat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimeToBeat } as TimeToBeat;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.completely = reader.int32();
          break;
        case 3:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 4:
          message.hastly = reader.int32();
          break;
        case 5:
          message.normally = reader.int32();
          break;
        case 6:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimeToBeat {
    const message = { ...baseTimeToBeat } as TimeToBeat;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.completely !== undefined && object.completely !== null) {
      message.completely = Number(object.completely);
    } else {
      message.completely = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.hastly !== undefined && object.hastly !== null) {
      message.hastly = Number(object.hastly);
    } else {
      message.hastly = 0;
    }
    if (object.normally !== undefined && object.normally !== null) {
      message.normally = Number(object.normally);
    } else {
      message.normally = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<TimeToBeat>): TimeToBeat {
    const message = { ...baseTimeToBeat } as TimeToBeat;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.completely !== undefined && object.completely !== null) {
      message.completely = object.completely;
    } else {
      message.completely = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.hastly !== undefined && object.hastly !== null) {
      message.hastly = object.hastly;
    } else {
      message.hastly = 0;
    }
    if (object.normally !== undefined && object.normally !== null) {
      message.normally = object.normally;
    } else {
      message.normally = 0;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: TimeToBeat): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.completely = message.completely || 0;
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.hastly = message.hastly || 0;
    obj.normally = message.normally || 0;
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const TitleResult = {
  encode(message: TitleResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.titles) {
      Title.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TitleResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTitleResult } as TitleResult;
    message.titles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.titles.push(Title.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TitleResult {
    const message = { ...baseTitleResult } as TitleResult;
    message.titles = [];
    if (object.titles !== undefined && object.titles !== null) {
      for (const e of object.titles) {
        message.titles.push(Title.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TitleResult>): TitleResult {
    const message = { ...baseTitleResult } as TitleResult;
    message.titles = [];
    if (object.titles !== undefined && object.titles !== null) {
      for (const e of object.titles) {
        message.titles.push(Title.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: TitleResult): unknown {
    const obj: any = {};
    if (message.titles) {
      obj.titles = message.titles.map(e => e ? Title.toJSON(e) : undefined);
    } else {
      obj.titles = [];
    }
    return obj;
  },
};

export const Title = {
  encode(message: Title, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.description);
    for (const v of message.games) {
      Game.encode(v, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.name);
    writer.uint32(50).string(message.slug);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).string(message.url);
    writer.uint32(74).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Title {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTitle } as Title;
    message.games = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.games.push(Game.decode(reader, reader.uint32()));
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.slug = reader.string();
          break;
        case 7:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.url = reader.string();
          break;
        case 9:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Title {
    const message = { ...baseTitle } as Title;
    message.games = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromJSON(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Title>): Title {
    const message = { ...baseTitle } as Title;
    message.games = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromPartial(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Title): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.description = message.description || "";
    if (message.games) {
      obj.games = message.games.map(e => e ? Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    obj.name = message.name || "";
    obj.slug = message.slug || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const UserResult = {
  encode(message: UserResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.users) {
      User.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UserResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserResult } as UserResult;
    message.users = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserResult {
    const message = { ...baseUserResult } as UserResult;
    message.users = [];
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(User.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UserResult>): UserResult {
    const message = { ...baseUserResult } as UserResult;
    message.users = [];
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(User.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: UserResult): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map(e => e ? User.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    return obj;
  },
};

export const User = {
  encode(message: User, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(18).string(message.battlenet);
    writer.uint32(24).int32(message.color);
    if (message.createdAt !== undefined && message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.discord);
    writer.uint32(50).string(message.facebook);
    writer.uint32(58).string(message.googlePlus);
    writer.uint32(66).string(message.instagram);
    writer.uint32(74).string(message.linkedin);
    writer.uint32(82).string(message.origin);
    writer.uint32(90).string(message.pinterest);
    writer.uint32(98).string(message.presentation);
    writer.uint32(106).string(message.reddit);
    writer.uint32(112).int32(message.role);
    writer.uint32(122).string(message.slug);
    writer.uint32(130).string(message.soundcloud);
    writer.uint32(138).string(message.steam);
    writer.uint32(146).string(message.twitch);
    writer.uint32(154).string(message.twitter);
    if (message.updatedAt !== undefined && message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(162).fork()).ldelim();
    }
    writer.uint32(170).string(message.uplay);
    writer.uint32(178).string(message.url);
    writer.uint32(186).string(message.username);
    writer.uint32(194).string(message.youtube);
    writer.uint32(202).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): User {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.battlenet = reader.string();
          break;
        case 3:
          message.color = reader.int32() as any;
          break;
        case 4:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.discord = reader.string();
          break;
        case 6:
          message.facebook = reader.string();
          break;
        case 7:
          message.googlePlus = reader.string();
          break;
        case 8:
          message.instagram = reader.string();
          break;
        case 9:
          message.linkedin = reader.string();
          break;
        case 10:
          message.origin = reader.string();
          break;
        case 11:
          message.pinterest = reader.string();
          break;
        case 12:
          message.presentation = reader.string();
          break;
        case 13:
          message.reddit = reader.string();
          break;
        case 14:
          message.role = reader.int32() as any;
          break;
        case 15:
          message.slug = reader.string();
          break;
        case 16:
          message.soundcloud = reader.string();
          break;
        case 17:
          message.steam = reader.string();
          break;
        case 18:
          message.twitch = reader.string();
          break;
        case 19:
          message.twitter = reader.string();
          break;
        case 20:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 21:
          message.uplay = reader.string();
          break;
        case 22:
          message.url = reader.string();
          break;
        case 23:
          message.username = reader.string();
          break;
        case 24:
          message.youtube = reader.string();
          break;
        case 25:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.battlenet !== undefined && object.battlenet !== null) {
      message.battlenet = String(object.battlenet);
    } else {
      message.battlenet = "";
    }
    if (object.color !== undefined && object.color !== null) {
      message.color = ColorColorEnum.fromJSON(object.color);
    } else {
      message.color = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.discord !== undefined && object.discord !== null) {
      message.discord = String(object.discord);
    } else {
      message.discord = "";
    }
    if (object.facebook !== undefined && object.facebook !== null) {
      message.facebook = String(object.facebook);
    } else {
      message.facebook = "";
    }
    if (object.googlePlus !== undefined && object.googlePlus !== null) {
      message.googlePlus = String(object.googlePlus);
    } else {
      message.googlePlus = "";
    }
    if (object.instagram !== undefined && object.instagram !== null) {
      message.instagram = String(object.instagram);
    } else {
      message.instagram = "";
    }
    if (object.linkedin !== undefined && object.linkedin !== null) {
      message.linkedin = String(object.linkedin);
    } else {
      message.linkedin = "";
    }
    if (object.origin !== undefined && object.origin !== null) {
      message.origin = String(object.origin);
    } else {
      message.origin = "";
    }
    if (object.pinterest !== undefined && object.pinterest !== null) {
      message.pinterest = String(object.pinterest);
    } else {
      message.pinterest = "";
    }
    if (object.presentation !== undefined && object.presentation !== null) {
      message.presentation = String(object.presentation);
    } else {
      message.presentation = "";
    }
    if (object.reddit !== undefined && object.reddit !== null) {
      message.reddit = String(object.reddit);
    } else {
      message.reddit = "";
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = UserRoleEnum.fromJSON(object.role);
    } else {
      message.role = 0;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = String(object.slug);
    } else {
      message.slug = "";
    }
    if (object.soundcloud !== undefined && object.soundcloud !== null) {
      message.soundcloud = String(object.soundcloud);
    } else {
      message.soundcloud = "";
    }
    if (object.steam !== undefined && object.steam !== null) {
      message.steam = String(object.steam);
    } else {
      message.steam = "";
    }
    if (object.twitch !== undefined && object.twitch !== null) {
      message.twitch = String(object.twitch);
    } else {
      message.twitch = "";
    }
    if (object.twitter !== undefined && object.twitter !== null) {
      message.twitter = String(object.twitter);
    } else {
      message.twitter = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.uplay !== undefined && object.uplay !== null) {
      message.uplay = String(object.uplay);
    } else {
      message.uplay = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.youtube !== undefined && object.youtube !== null) {
      message.youtube = String(object.youtube);
    } else {
      message.youtube = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = { ...baseUser } as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.battlenet !== undefined && object.battlenet !== null) {
      message.battlenet = object.battlenet;
    } else {
      message.battlenet = "";
    }
    if (object.color !== undefined && object.color !== null) {
      message.color = object.color;
    } else {
      message.color = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.discord !== undefined && object.discord !== null) {
      message.discord = object.discord;
    } else {
      message.discord = "";
    }
    if (object.facebook !== undefined && object.facebook !== null) {
      message.facebook = object.facebook;
    } else {
      message.facebook = "";
    }
    if (object.googlePlus !== undefined && object.googlePlus !== null) {
      message.googlePlus = object.googlePlus;
    } else {
      message.googlePlus = "";
    }
    if (object.instagram !== undefined && object.instagram !== null) {
      message.instagram = object.instagram;
    } else {
      message.instagram = "";
    }
    if (object.linkedin !== undefined && object.linkedin !== null) {
      message.linkedin = object.linkedin;
    } else {
      message.linkedin = "";
    }
    if (object.origin !== undefined && object.origin !== null) {
      message.origin = object.origin;
    } else {
      message.origin = "";
    }
    if (object.pinterest !== undefined && object.pinterest !== null) {
      message.pinterest = object.pinterest;
    } else {
      message.pinterest = "";
    }
    if (object.presentation !== undefined && object.presentation !== null) {
      message.presentation = object.presentation;
    } else {
      message.presentation = "";
    }
    if (object.reddit !== undefined && object.reddit !== null) {
      message.reddit = object.reddit;
    } else {
      message.reddit = "";
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    } else {
      message.role = 0;
    }
    if (object.slug !== undefined && object.slug !== null) {
      message.slug = object.slug;
    } else {
      message.slug = "";
    }
    if (object.soundcloud !== undefined && object.soundcloud !== null) {
      message.soundcloud = object.soundcloud;
    } else {
      message.soundcloud = "";
    }
    if (object.steam !== undefined && object.steam !== null) {
      message.steam = object.steam;
    } else {
      message.steam = "";
    }
    if (object.twitch !== undefined && object.twitch !== null) {
      message.twitch = object.twitch;
    } else {
      message.twitch = "";
    }
    if (object.twitter !== undefined && object.twitter !== null) {
      message.twitter = object.twitter;
    } else {
      message.twitter = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.uplay !== undefined && object.uplay !== null) {
      message.uplay = object.uplay;
    } else {
      message.uplay = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.youtube !== undefined && object.youtube !== null) {
      message.youtube = object.youtube;
    } else {
      message.youtube = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: User): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.battlenet = message.battlenet || "";
    obj.color = ColorColorEnum.toJSON(message.color);
    obj.createdAt = message.createdAt !== undefined ? message.createdAt.toISOString() : null;
    obj.discord = message.discord || "";
    obj.facebook = message.facebook || "";
    obj.googlePlus = message.googlePlus || "";
    obj.instagram = message.instagram || "";
    obj.linkedin = message.linkedin || "";
    obj.origin = message.origin || "";
    obj.pinterest = message.pinterest || "";
    obj.presentation = message.presentation || "";
    obj.reddit = message.reddit || "";
    obj.role = UserRoleEnum.toJSON(message.role);
    obj.slug = message.slug || "";
    obj.soundcloud = message.soundcloud || "";
    obj.steam = message.steam || "";
    obj.twitch = message.twitch || "";
    obj.twitter = message.twitter || "";
    obj.updatedAt = message.updatedAt !== undefined ? message.updatedAt.toISOString() : null;
    obj.uplay = message.uplay || "";
    obj.url = message.url || "";
    obj.username = message.username || "";
    obj.youtube = message.youtube || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

export const WebsiteResult = {
  encode(message: WebsiteResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.websites) {
      Website.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): WebsiteResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWebsiteResult } as WebsiteResult;
    message.websites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.websites.push(Website.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WebsiteResult {
    const message = { ...baseWebsiteResult } as WebsiteResult;
    message.websites = [];
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(Website.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WebsiteResult>): WebsiteResult {
    const message = { ...baseWebsiteResult } as WebsiteResult;
    message.websites = [];
    if (object.websites !== undefined && object.websites !== null) {
      for (const e of object.websites) {
        message.websites.push(Website.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: WebsiteResult): unknown {
    const obj: any = {};
    if (message.websites) {
      obj.websites = message.websites.map(e => e ? Website.toJSON(e) : undefined);
    } else {
      obj.websites = [];
    }
    return obj;
  },
};

export const Website = {
  encode(message: Website, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(16).int32(message.category);
    if (message.game !== undefined && message.game !== undefined) {
      Game.encode(message.game, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).bool(message.trusted);
    writer.uint32(42).string(message.url);
    writer.uint32(50).string(message.checksum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Website {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWebsite } as Website;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.game = Game.decode(reader, reader.uint32());
          break;
        case 4:
          message.trusted = reader.bool();
          break;
        case 5:
          message.url = reader.string();
          break;
        case 6:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Website {
    const message = { ...baseWebsite } as Website;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = WebsiteCategoryEnum.fromJSON(object.category);
    } else {
      message.category = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromJSON(object.game);
    } else {
      message.game = undefined;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = Boolean(object.trusted);
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = String(object.checksum);
    } else {
      message.checksum = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Website>): Website {
    const message = { ...baseWebsite } as Website;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    if (object.game !== undefined && object.game !== null) {
      message.game = Game.fromPartial(object.game);
    } else {
      message.game = undefined;
    }
    if (object.trusted !== undefined && object.trusted !== null) {
      message.trusted = object.trusted;
    } else {
      message.trusted = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    } else {
      message.checksum = "";
    }
    return message;
  },
  toJSON(message: Website): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.category = WebsiteCategoryEnum.toJSON(message.category);
    obj.game = message.game ? Game.toJSON(message.game) : undefined;
    obj.trusted = message.trusted || false;
    obj.url = message.url || "";
    obj.checksum = message.checksum || "";
    return obj;
  },
};

interface WindowBase64 {
  atob(b64: string): string;
  btoa(bin: string): string;
}

const windowBase64 = (globalThis as unknown as WindowBase64);
const atob = windowBase64.atob || ((b64: string) => Buffer.from(b64, 'base64').toString('binary'));
const btoa = windowBase64.btoa || ((bin: string) => Buffer.from(bin, 'binary').toString('base64'));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(''));
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  // tslint:disable-next-line: no-shadowed-variable
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;