'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b7e1fdb9ecc3a3ef5f31a3d10eacab57",
".git/config": "7a806dc7b0164cdec5b1457a5d5c9331",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "a9e8f02566048d1640759237c439e4d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a9f7daf9a18d498e573c028b83534c40",
".git/logs/refs/heads/main": "cb838c5fe49a69bfa0fb0b7b68cf406f",
".git/logs/refs/remotes/origin/main": "96e491a088e595eefcec686ab998c332",
".git/objects/01/caad07b6c5491edaf7c98bae35ccf78bbd67ff": "4a1f5e0047fbf1ad50f57add0d5477d2",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/f948c5e55108c8e4b11aac6cb426571040dc3b": "91ff1670860060e98fc01fbf81ee9b39",
".git/objects/05/4ca1f5a08f3932bb5276248b4c105747f77bd7": "aad8e758e3853f986ef5763bee0d2455",
".git/objects/06/82c922e2809f9ccff95276b9591a6027093024": "32e1a55490b45e1afdce5f12887b49b0",
".git/objects/0a/1db34a66265763c358999730d31e62af095fee": "e1e6c2732565190e7e71a4ec6368d534",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0c/fa4bbde058fde105fd5028265460dc7c75bf28": "3bd46f5e3934c3858614c5b6589a6515",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/b953d6a563755d9a7355d3465eac6cf1c35f8e": "5bdc1854b6e9fd6cf4dd2053d840cf0a",
".git/objects/11/6cc333117a51244d44e1aaa646d5597e1aa2fd": "3e4bbdc50916f0fc9c86b544513b841c",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/21/f3a9ca7cb551881f11f2ab892c4c68e0b25b93": "dd0a21b418686e62fcb0cb41da1de7fe",
".git/objects/23/66f6c909315a36a5ac0cc698940b7f41f0b057": "2df76cce39e45eabb707de76d172f61c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/a8b468c8c53b7646e3d8259b477f1d714556a6": "c7c6b8c932b072b0d8a5f047ee172d4f",
".git/objects/25/c82aa9b5d6c547b66efac2790a4c6a7df4b27c": "b5191bfb2b3857a84115760eea96a5ab",
".git/objects/26/418f8ec4966550ff55f236199114368ed945cc": "c84d8a589dde1deb71be5af6cb641cac",
".git/objects/26/96f16c966b6666d6aba6176f9a1dbf510df0d1": "723e443f8e7bb7cf57e0b1c8aae5fceb",
".git/objects/27/bf3ed875e811af684e1ba9510c8b06acb5a7b9": "108a82fb6a341a04001034ca64c5b410",
".git/objects/29/6cb0f65b3ae2c8e9776af8cd888ef2cb82936d": "4da97237d2d9bb5a5c1005993b9545e3",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2c/8fe5afe1de928d18af21e808f07fa36c45b817": "3ee07b4505db64f0ea6535e518150ce3",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/6c66aaec1059f45d10df84e0fb4bffcb5ac6b9": "cef16bf6aaa607a0e764db3daef59a95",
".git/objects/31/d26bee2ee5dad40aca8b824908bb2ddb9d8cb4": "ce13fd8689a73fae85cf69bc4fcb69b7",
".git/objects/32/49c9e978fd6cb34edcb969b6a39492f9f0fcc3": "0a5872ce15a5355a65b8b668ea222eee",
".git/objects/33/5af76283ba80dd2855f2837fb9467e2063121d": "51a5dee6c4324ad32c26bc5ae304a42d",
".git/objects/38/3d05a0e4835a2816eb74d76070330eb489a530": "b7f44c1c5017d74dba44d856d1368c46",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/12caf4cbee7fd5068b4f891398f518dfb14b15": "70cea585c03b9221a8e2913d70038e0a",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/4b/4e88ddf38c583598b0d4a323308816de0ec7f7": "c4a6314e98fc868691791c664e637a3e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/53/3ba17ab1f25b361ed45e956f751053f1f4cd0f": "779df662b77ff283ca0c64d5c24f7623",
".git/objects/54/70762e4d31c273bae6199fa31c65a45c128a9a": "72b07d90ea411983d00b821ba59d46cd",
".git/objects/5b/b741b24014ffa8a4c283d539d02b34a0c642ee": "588876b3c2aff2d79c7bf526beac3551",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/63/14113992a654fd8365d8f29babff4efaff8162": "2ef978e815cacbe8f1a118000b17eac9",
".git/objects/65/0fa5f8fb95b1f0f74cd437f0dca28bea0e6d45": "0db866107a102ee69b7ad2ee7a897e08",
".git/objects/67/6e8b235acff2f25db0fa3a39685f0df77ecd79": "680722e271b0b8b37ab4e8ebcbd47801",
".git/objects/67/ca3a1839258d479a514bf3c49ee8141562397e": "5f4b224b757c16414db43c0bf392ec0c",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/c00c4d406a6e0a5acabf26bbec1e0f58cc0c27": "0689a272242686131f7c3e4098385aa0",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/6e/3135789ef65559dce7ea6e4afdfd81fd603662": "6919d6a17eb41844137ab3d69dbadcaf",
".git/objects/6e/4dd8748c31c21967e465904631b3fe34d9d28b": "97dcc8d1b3c4a283dcfc7c57ec87ce32",
".git/objects/6e/aa3066a8a230d5f6f0682ad96dd72995c9f5f7": "37ccc1c08598f7c56e6531da4435783e",
".git/objects/70/5096c9504dd1a8190e1a7b0c915ed17bcb23d4": "ea11f0f57b36e215d13ff986152f96da",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/75/1a6492e947e32622e577d9ad73ee19c7ffb50f": "b9a2e820e585385dcc640904a75be8cf",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/1ab2ba2a51f026185ec43fcfd7b7194896d510": "2287d24b208dfa148fbad1dc75269118",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e93943983aaf8cb9772a19662c6309006ae95e": "a7ff92037158c3703852b256fe9b6723",
".git/objects/7a/0bbaf50e8184390416a768c8c6a0cf39d92c6d": "63311c3285ef926858f8d14f1294971d",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/7f/4131ce7aa75733a51b7035ade7fe1d91f607ac": "07a9f8d5171b64159c504efe0537515f",
".git/objects/82/fcdf61f390b5e27fb9953a8f70af5978abc4b4": "3edbb359a8a5494ce72cd4be090b7253",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/84/73a19ccd2c7b4614d9e045bfd7564833b4ca03": "94fdeae2137c578eb91c6810ee3ffa20",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8e/9cdb51f143c711feaab0b7016d60c5765d7b37": "e6ef3e6531852dc9a774f0833342b10d",
".git/objects/92/694b8e8df5b8c7ba4d91d03f4368ae52619be7": "ab906aca043c8f5eb6d1bd0bf1130013",
".git/objects/93/47cc704387a4bc3fb904018dd344371363a44b": "02be761eeb629d71c735d68f7ab1055c",
".git/objects/93/5439478ed9c3cbcbec274a393e9dfc1a61de8c": "cdfa7fa1f09f5dcfa96ff8f4c9a2931b",
".git/objects/93/be683ae89b999564305cbc36b3a56814a3d72b": "6b10f106eae88214e59cd40638ea81d0",
".git/objects/96/18f162f1594bed20d8d70eedbf27944dbb22d6": "d5093eec8a893296fbd96cd538b46742",
".git/objects/96/8a91cd7917709d2ea89c8786c2a93bcd2e4f84": "dfed9e560aba7a2af5f48f2cee46ceb8",
".git/objects/9f/e02ba2c0aa610e79e0b856cfe80fa0b2e88692": "c031bd8d3a3e37606476f60842a9eb1a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/64fcc6016a3e5f579d5d2c83dc25b457183b9a": "be8fc571002e5050451a8cbef9a067cc",
".git/objects/a4/59c1edf1b9885d19c1cdf56705637e6870eb30": "b0cbf853bd13b8ac0c49352ff8c66a4c",
".git/objects/a4/7ee4c0382ecaab17793c75f19a7bb05c392036": "3879543896864f36a7539525c50c32a1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/a40dc1a155f644b8c90bc32b15cb95d67971c3": "7e3122c8b634606dbd3b601cd818c7f7",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9623ecaa4f5e854767a8bb1c863f4a5750b52c": "d3c7cc5bd920f30f25392393fc768e97",
".git/objects/b7/ad1ed03a78713c13d94fd060eba1cd195c2f3d": "78daa4d07b1635efa9af88e570fdd2d6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5d094a446bdbe64e0276c725e3b705257b7ed1": "9259220f7c7d52a6215ce8f135936691",
".git/objects/b9/ec48596088290dbff9f55ed380d114b374d25a": "b2bf386e8bc1ed74bd93f472804ae54f",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/b15eeeac65ced0da97fe6e1db81d811f4f31c1": "65c7bafbaa4c81493b50bc19f6e02b86",
".git/objects/c7/83ecea668e3774e29ceab9f3a3822525edb636": "9a178c9c275d330b970b45b12f2a005d",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c9/08fc5fbeda7e2ae5493da75ca5eef2dabf2277": "4f5597e2cb51ccfcc7f583691ee0fe38",
".git/objects/c9/141f38fc0e954b3085010b9d44785a3d299669": "095ff3c8903b85852f4ceda7912e158c",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/cc/57766107b0be204300ff346306fda353974b22": "f357aa7107ee11a11680e80f92f2d3a3",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/7cea213f74a61de163d9df4a8597421d2ea204": "5bbb99c2153fe1dcd6b82b6021a94153",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d4/02d4dc71e2f90924f06d2fcb50653b46ba2db5": "d9dbc2e5f80fd51f9e980e852600c797",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/35d0035fe640c76dedf5a87c8b10500adb451c": "9cdf6267d7f2aca3be88617cc9815e0c",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d8/caccef8608bef1dabca75257c8c166cecfe75d": "85ec9f38d4a2179c20133668ba966c31",
".git/objects/d8/f42b22ec2d242ea146d2cda490cb192c114e47": "261f67aceb49cb4a0de02b9cdbb98996",
".git/objects/d9/a812e8652614c3b5019ab531edf00393307a7e": "d7647b2918a97738a2e4ad810f65fa86",
".git/objects/da/0526415f7eb2fcbf5da2b143edf73d0977ee0a": "7cd94f8dcba2026e235b4d1590f70bf9",
".git/objects/db/62a105df0e5b308c6f516ff8323cc697dfa03b": "91830e013e3534654e2de2bf39466a79",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e1/e2b45575bf2368688d49113ad14482b9bfc86d": "1d85e7038338be0d7d7676463423d051",
".git/objects/e2/6c1cd350870002012b12345aa8999228806332": "c3ee09e19e7dc55a0d1dd92c14a4cfcc",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e5/0d7aeeec5083d2f8f99d54922b04fcac9cad75": "287474640406d2f16081825e66cab0cb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/da9293220f3e15be1110ee839d5964b2e7cac1": "d37e3577d5d59fdb86591a050217d305",
".git/objects/f5/8985a8eaad2fd9d11c3d3362e9c3a9acb8a6ad": "413e58e9389b56cc47b172a4d1fbc06a",
".git/objects/f7/34242e96eed03ce0021ecb58a741b4fd332b78": "7d7bafe92cbcf3c7d9ea8ec9e86a658d",
".git/objects/f8/f016afbd2907254692f096642812a66e50d8a5": "a6531b1a632a93311b41d9b9d2d2ab1f",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "840a1a2fd6c6700cdc6eaa1a0b0093c6",
".git/refs/remotes/origin/main": "840a1a2fd6c6700cdc6eaa1a0b0093c6",
"assets/AssetManifest.json": "a191b77b9a5d6caef7e3a3d21af0334d",
"assets/assets/creta_config.json": "3f1732bf100fb983436b5b8f65ccf5f5",
"assets/assets/creta_default.png": "cf1eb68da282f005cc5cbf8a6c3d9d8c",
"assets/assets/grid.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/excle_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/instagram.png": "c5ddecc677d10dd4ae1a9216bf75dff7",
"assets/assets/logo.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/assets/logo_color.png": "8201bb7869e6c52bca68ee422be057d0",
"assets/assets/logo_en.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/assets/logo_kr.png": "cda01abeeea89c5a4330b703a2ee6670",
"assets/assets/logo_kr_color.png": "5ea10ed50e75b23108d9d05bad7a91e4",
"assets/assets/logo_kr_white.png": "bfb2541db7280c31284e2a2542cc0da1",
"assets/assets/needle.png": "05aa061ff6f0e7c6c038a70381c43eba",
"assets/assets/new_file.riv": "d5dafc53cb9fc4e62c91aad45edfff23",
"assets/assets/no_image.png": "05434b1b716ba721f3015a2393b9fe80",
"assets/assets/pilot.PNG": "6fc55a44548d9ce34945cf53cf3d888a",
"assets/assets/publish.png": "6f95739a5c4edbc0b8574f99571b98c7",
"assets/assets/web.png": "d100c381aec005e27be6de1e1a67bc97",
"assets/assets/youtube.png": "c647da897d59668d1c5d18751e7de2aa",
"assets/FontManifest.json": "5c82528838f94b16335551e64824744a",
"assets/fonts/Jua/Jua-Regular.ttf": "f32585404eaefb4f771d6ec0d0492682",
"assets/fonts/Macondo/Macondo-Regular.ttf": "cea32bd04bb9981d8dd78e509ac1cccd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Nanum_Gothic/NanumGothic-Bold.ttf": "4fa4ea43222779743fc8cd4b4835d04e",
"assets/fonts/Nanum_Gothic/NanumGothic-ExtraBold.ttf": "4b1b824d86d866cb8245accebe324b62",
"assets/fonts/Nanum_Gothic/NanumGothic-Regular.ttf": "3cbe9257e888255cb2dad0d8a80a7759",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Bold.ttf": "9eaa2e637c6efe5b4e37b7626e65b47c",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-ExtraBold.ttf": "a2dcb7090ec61a328c2d518342cdc568",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Regular.ttf": "afce7d51531785bfad8c666d6ee2a9b7",
"assets/fonts/Nanum_Pen_Script/NanumPenScript-Regular.ttf": "6238324b9cfd31534885a47e8b07231e",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf": "aef8424b7c9ece17f01cbc8618e4723b",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf": "b59ac7cf449e57469daf2480fafbddf4",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf": "89816c0e22baa4f81a196a1c3b61bf46",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf": "de132efeffa48aef0bf5bdfe1c4602f4",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf": "913f146b0200b19b17eb4de8b4427a9c",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf": "5dac92efb94655ca5331df2505f3428a",
"assets/fonts/Pretendard/Pretendard-Black.otf": "a0dae583b0afcf6f07f170fe75c07642",
"assets/fonts/Pretendard/Pretendard-Bold.otf": "0c28c1f5ba0bcdfb02688cc77186c89d",
"assets/fonts/Pretendard/Pretendard-ExtraBold.otf": "44ba46bad2096044f462bc5ec1d28915",
"assets/fonts/Pretendard/Pretendard-ExtraLight.otf": "fc5c7c8047bbdaf09f8813d1fe3165ac",
"assets/fonts/Pretendard/Pretendard-Light.otf": "d39b4dd5b80382ea3b767f805de6ee92",
"assets/fonts/Pretendard/Pretendard-Medium.otf": "c40957def7f8380b7ab0aa28e594ab1d",
"assets/fonts/Pretendard/Pretendard-Regular.otf": "d1e2411be87335a335df2d824eacf3f0",
"assets/fonts/Pretendard/Pretendard-SemiBold.otf": "5c328494b7eabdb6942b76d5fb4d48e0",
"assets/fonts/Pretendard/Pretendard-Thin.otf": "1095c717674530e8a42bd9d4c4aede43",
"assets/NOTICES": "26f1557b9bd13fcf7862c8e1fc79b863",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_neumorphic_null_safety/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d12385b3b8a63b4b677c9ea637abed2",
"/": "4d12385b3b8a63b4b677c9ea637abed2",
"main.dart.js": "6a932f6cddca723a2bdd39e816961bcb",
"manifest.json": "cf0c0aafbd8f1f302991df2ef432ecc9",
"README.md": "289dec07f49cdfcb04d1c7939a5f110a",
"version.json": "bb180e4a664daf79d199ce61ef098f51"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
