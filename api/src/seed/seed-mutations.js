export default /* GraphQL */ `
  mutation {
    u1: CreateUser(
      id: "fdcdea37-f0aa-499a-a4d6-d90210cf20ac"
      name: "Will"
      last: "Smith"
      email: "will@gmail.com"
      username: "will_rules"
      password: "password"
      phone: "3034303300"
      street: "9276 Garrison Dr"
    ) {
      id
      name
    }
    u2: CreateUser(
      id: "0f647518-2d9b-4a25-976e-529ecff34b66"
      name: "Bob"
      last: "Smith"
      email: "bob@gmail.com"
      username: "bob_rules"
      password: "password"
      phone: "3034303300"
      street: "9276 Garrison Dr"
    ) {
      id
      name
    }
    u3: CreateUser(
      id: "ede10bd0-8c00-4b20-990c-753c66b37bb2"
      name: "Jenny"
      last: "Smith"
      email: "jenny@gmail.com"
      username: "jenny_rules"
      password: "password"
      phone: "3034303300"
      street: "9276 Garrison Dr"
    ) {
      id
      name
    }
    u4: CreateUser(
      id: "a8f82c25-04ce-46d5-b3ce-15ce692e1a18"
      name: "adam"
      last: "Smith"
      email: "adam@gmail.com"
      username: "adam_rules"
      password: "password"
      phone: "3034303300"
      street: "9276 Garrison Dr"
    ) {
      id
      name

    }
    u5: CreateUser(
      id: "30bb3884-4cc0-45a1-8c35-ccee57e9dd3e"
      name: "Angie"
      last: "Smith"
      email: "angie@gmail.com"
      username: "angie_rules"
      password: "password"
      phone: "3034303300"
      street: "9276 Garrison Dr"
    ) {
      id
      name
    }

    cc1: CreateCity(id: "077f7243-5a59-46f0-9646-273f0305df00", name: "Yorkville") {
      id
      name
    }
    cc2: CreateCity(id: "35a91777-1f3b-4f14-94c6-5ae98ff88d4d", name: "Boulder") {
      id
      name
    }
    cc3: CreateCity(id: "0681332b-7697-46c8-99af-a899afad2407", name: "Denver") {
      id
      name
    }
    auc1: AddUserCity(from: { id: "fdcdea37-f0aa-499a-a4d6-d90210cf20ac" }, to: { id: "077f7243-5a59-46f0-9646-273f0305df00" }) {
      from {
        id
      }
    }
    auc2: AddUserCity(from: { id: "0f647518-2d9b-4a25-976e-529ecff34b66" }, to: { id: "077f7243-5a59-46f0-9646-273f0305df00" }) {
      from {
        id
      }
    }
    auc3: AddUserCity(from: { id: "ede10bd0-8c00-4b20-990c-753c66b37bb2" }, to: { id: "35a91777-1f3b-4f14-94c6-5ae98ff88d4d" }) {
      from {
        id
      }
    }
    auc4: AddUserCity(from: { id: "a8f82c25-04ce-46d5-b3ce-15ce692e1a18" }, to: { id: "0681332b-7697-46c8-99af-a899afad2407" }) {
      from {
        id
      }
    }

    cs1: CreateState(id: "c955741d-85f7-4e54-b37c-4628bd93bee7", name: "Illinois") {
      id
      name
    }
    cs2: CreateState(id: "96aa1d8f-3647-490f-a001-b892b83c0618", name: "Colorado") {
      id
      name
    }
    cs3: AddCityState(from: { id: "077f7243-5a59-46f0-9646-273f0305df00" }, to: { id: "c955741d-85f7-4e54-b37c-4628bd93bee7" }) {
      from {
        id
      }
    }
    cs4: AddCityState(from: { id: "35a91777-1f3b-4f14-94c6-5ae98ff88d4d" }, to: { id: "96aa1d8f-3647-490f-a001-b892b83c0618" }) {
      from {
        id
      }
    }
    acs3: AddCityState(from: { id: "0681332b-7697-46c8-99af-a899afad2407" }, to: { id: "96aa1d8f-3647-490f-a001-b892b83c0618" }) {
      from {
        id
      }
    }

    co1: CreateCountry(id: "940a7e88-3c9d-4441-be05-e9834555c386", name: "United States") {
      id
      name
    }
    aco1: AddStateCountry(from: { id: "c955741d-85f7-4e54-b37c-4628bd93bee7" }, to: { id: "940a7e88-3c9d-4441-be05-e9834555c386" }) {
      from {
        id
      }
    }
    aco2: AddStateCountry(from: { id: "96aa1d8f-3647-490f-a001-b892b83c0618" }, to: { id: "940a7e88-3c9d-4441-be05-e9834555c386" }) {
      from {
        id
      }
    }

    l1: CreateLot(
      id: "32df6850-34aa-4cb2-ba2a-5cfffe1cb1e5"
      name: "Bad Ass Bubler"
      text: "this is some extra text"
      price: 500
      reserve: 400
      qty: 1
      increment: 5
      status: "waiting"
    ) {
      id
      name
    }
    l2: CreateLot(
      id: "ffdf9f10-8fd1-4964-98f4-d10d4860d734"
      name: "Mini Bubler"
      text: "this is some extra text"
      price: 500
      reserve: 400
      qty: 1
      increment: 5
      status: "waiting"
    ) {
      id
      name
    }
    l3: CreateLot(
      id: "233be897-130a-4c1e-a036-54d19c069a7f"
      name: "Sweet Rig"
      text: "this is some extra text"
      price: 500
      reserve: 400
      qty: 1
      increment: 5
      status: "waiting"
    ) {
      id
      name
    }
    l4: CreateLot(
      id: "b41110f7-be90-4760-927b-caf7108348a5"
      name: "Spoon"
      text: "this is some extra text"
      price: 500
      reserve: 400
      qty: 1
      increment: 5
      status: "waiting"
    ) {
      id
      name
    }
    l5: CreateLot(
      id: "29c0c4ad-8611-44cc-8f1e-d50d327fd175"
      name: "cool dabber"
      text: "this is some extra text"
      price: 500
      reserve: 400
      qty: 1
      increment: 5
      status: "waiting"
    ) {
      id
      name
    }

    ul1: AddUserLots(from: { id: "30bb3884-4cc0-45a1-8c35-ccee57e9dd3e" }, to: { id: "32df6850-34aa-4cb2-ba2a-5cfffe1cb1e5" }) {
      from {
        id
      }
    }
    ul2: AddUserLots(from: { id: "a8f82c25-04ce-46d5-b3ce-15ce692e1a18" }, to: { id: "ffdf9f10-8fd1-4964-98f4-d10d4860d734" }) {
      from {
        id
      }
    }
    ul3: AddUserLots(from: { id: "0f647518-2d9b-4a25-976e-529ecff34b66" }, to: { id: "233be897-130a-4c1e-a036-54d19c069a7f" }) {
      from {
        id
      }
    }
    ul4: AddUserLots(from: { id: "fdcdea37-f0aa-499a-a4d6-d90210cf20ac" }, to: { id: "b41110f7-be90-4760-927b-caf7108348a5" }) {
      from {
        id
      }
    }
    ul5: AddUserLots(from: { id: "ede10bd0-8c00-4b20-990c-753c66b37bb2" }, to: { id: "29c0c4ad-8611-44cc-8f1e-d50d327fd175" }) {
      from {
        id
      }
    }

    c1: CreateCategory(id: "ace3b78f-a352-451a-813e-99baa186328e", name: "bong") {
      name
    }
    c2: CreateCategory(id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9", name: "rig") {
      name
    }
    c3: CreateCategory(id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2", name: "pipe") {
      name
    }
    c4: CreateCategory(id: "6ebb41f2-87a7-4bd3-9314-ef830e329751", name: "accessory") {
      name
    }
    c5: CreateCategory(id: "738bb100-9216-48bb-bbbd-878ddd4659a9", name: "vape") {
      name
    }
    ac1: AddLotCategory(from: { id: "32df6850-34aa-4cb2-ba2a-5cfffe1cb1e5" }, to: { id: "ace3b78f-a352-451a-813e-99baa186328e" }) {
      from {
        id
      }
    }
    ac2: AddLotCategory(from: { id: "ffdf9f10-8fd1-4964-98f4-d10d4860d734" }, to: { id: "ace3b78f-a352-451a-813e-99baa186328e" }) {
      from {
        id
      }
    }
    ac3: AddLotCategory(from: { id: "233be897-130a-4c1e-a036-54d19c069a7f" }, to: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }) {
      from {
        id
      }
    }
    ac4: AddLotCategory(from: { id: "b41110f7-be90-4760-927b-caf7108348a5" }, to: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }) {
      from {
        id
      }
    }
    ac5: AddLotCategory(from: { id: "29c0c4ad-8611-44cc-8f1e-d50d327fd175" }, to: { id: "6ebb41f2-87a7-4bd3-9314-ef830e329751" }) {
      from {
        id
      }
    }

    ty1: CreateType(id: "ef03765c-6b0f-4333-91d7-975441565cfa", name: "auction") {
      name
    }
    ty2: CreateType(id: "17611e07-e2c4-4ff8-9d37-9b55d579e2e0", name: "sale") {
      name
    }

    atyc1: AddTypeCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "ef03765c-6b0f-4333-91d7-975441565cfa" }) {
      from {
        id
      }
    }
    atyc2: AddTypeCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "17611e07-e2c4-4ff8-9d37-9b55d579e2e0" }) {
      from {
        id
      }
    }
    atyc3: AddTypeCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "ef03765c-6b0f-4333-91d7-975441565cfa" }) {
      from {
        id
      }
    }
    atyc4: AddTypeCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "17611e07-e2c4-4ff8-9d37-9b55d579e2e0" }) {
      from {
        id
      }
    }
    atyc5: AddTypeCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "ef03765c-6b0f-4333-91d7-975441565cfa" }) {
      from {
        id
      }
    }
    atyc6: AddTypeCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "17611e07-e2c4-4ff8-9d37-9b55d579e2e0" }) {
      from {
        id
      }
    }
    atyc7: AddTypeCategory(from: { id: "6ebb41f2-87a7-4bd3-9314-ef830e329751" }, to: { id: "ef03765c-6b0f-4333-91d7-975441565cfa" }) {
      from {
        id
      }
    }
    atyc8: AddTypeCategory(from: { id: "6ebb41f2-87a7-4bd3-9314-ef830e329751" }, to: { id: "17611e07-e2c4-4ff8-9d37-9b55d579e2e0" }) {
      from {
        id
      }
    }
    atyc9: AddTypeCategory(from: { id: "738bb100-9216-48bb-bbbd-878ddd4659a9" }, to: { id: "ef03765c-6b0f-4333-91d7-975441565cfa" }) {
      from {
        id
      }
    }
    atyc10: AddTypeCategory(from: { id: "738bb100-9216-48bb-bbbd-878ddd4659a9" }, to: { id: "17611e07-e2c4-4ff8-9d37-9b55d579e2e0" }) {
      from {
        id
      }
    }

    g1: CreateGender(id: "f16798fb-895d-4786-9c01-6fb60ef5debc", name: "male") {
      name
    }
    g2: CreateGender(id: "392f0223-1d10-4143-85a2-0099e1ec9391", name: "female") {
      name
    }

    agrc1: AddGenderCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "f16798fb-895d-4786-9c01-6fb60ef5debc" }) {
      from {
        id
      }
    }
    agrc2: AddGenderCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "392f0223-1d10-4143-85a2-0099e1ec9391" }) {
      from {
        id
      }
    }
    agrc3: AddGenderCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "f16798fb-895d-4786-9c01-6fb60ef5debc" }) {
      from {
        id
      }
    }
    agrc4: AddGenderCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "392f0223-1d10-4143-85a2-0099e1ec9391" }) {
      from {
        id
      }
    }


    ag1: AddLotGender(from: { id: "32df6850-34aa-4cb2-ba2a-5cfffe1cb1e5" }, to: { id: "f16798fb-895d-4786-9c01-6fb60ef5debc" }) {
      from {
        id
      }
    }
    ag2: AddLotGender(from: { id: "ffdf9f10-8fd1-4964-98f4-d10d4860d734" }, to: { id: "f16798fb-895d-4786-9c01-6fb60ef5debc" }) {
      from {
        id
      }
    }
    ag3: AddLotGender(from: { id: "233be897-130a-4c1e-a036-54d19c069a7f" }, to: { id: "392f0223-1d10-4143-85a2-0099e1ec9391" }) {
      from {
        id
      }
    }
    ag4: AddLotGender(from: { id: "b41110f7-be90-4760-927b-caf7108348a5" }, to: { id: "392f0223-1d10-4143-85a2-0099e1ec9391" }) {
      from {
        id
      }
    }

    gr1: CreateGrade(id: "cdc6850f-f8b8-425d-bb36-eab27986f9e0", name: "perfect") {
      name
    }
    gr2: CreateGrade(id: "fcb43ff3-fbe6-4d73-8707-a5e0fe8b30c2", name: "good") {
      name
    }

    agrac1: AddGradeCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "cdc6850f-f8b8-425d-bb36-eab27986f9e0" }) {
      from {
        id
      }
    }
    agrac2: AddGradeCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "fcb43ff3-fbe6-4d73-8707-a5e0fe8b30c2" }) {
      from {
        id
      }
    }

    agrac3: AddGradeCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "cdc6850f-f8b8-425d-bb36-eab27986f9e0" }) {
      from {
        id
      }
    }
    agrac4: AddGradeCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "fcb43ff3-fbe6-4d73-8707-a5e0fe8b30c2" }) {
      from {
        id
      }
    }

    agrac5: AddGradeCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "cdc6850f-f8b8-425d-bb36-eab27986f9e0" }) {
      from {
        id
      }
    }
    agrac6: AddGradeCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "fcb43ff3-fbe6-4d73-8707-a5e0fe8b30c2" }) {
      from {
        id
      }
    }

    agrac7: AddGradeCategory(from: { id: "6ebb41f2-87a7-4bd3-9314-ef830e329751" }, to: { id: "cdc6850f-f8b8-425d-bb36-eab27986f9e0" }) {
      from {
        id
      }
    }
    agrac8: AddGradeCategory(from: { id: "6ebb41f2-87a7-4bd3-9314-ef830e329751" }, to: { id: "fcb43ff3-fbe6-4d73-8707-a5e0fe8b30c2" }) {
      from {
        id
      }
    }

    agr1: AddLotGrade(from: { id: "32df6850-34aa-4cb2-ba2a-5cfffe1cb1e5" }, to: { id: "cdc6850f-f8b8-425d-bb36-eab27986f9e0" }) {
      from {
        id
      }
    }
    agr2: AddLotGrade(from: { id: "ffdf9f10-8fd1-4964-98f4-d10d4860d734" }, to: { id: "cdc6850f-f8b8-425d-bb36-eab27986f9e0" }) {
      from {
        id
      }
    }
    agr3: AddLotGrade(from: { id: "233be897-130a-4c1e-a036-54d19c069a7f" }, to: { id: "cdc6850f-f8b8-425d-bb36-eab27986f9e0" }) {
      from {
        id
      }
    }
    agr4: AddLotGrade(from: { id: "b41110f7-be90-4760-927b-caf7108348a5" }, to: { id: "fcb43ff3-fbe6-4d73-8707-a5e0fe8b30c2" }) {
      from {
        id
      }
    }

    h1: CreateHeight(id: "3724ccc3-5e53-4c7b-b6b9-c676c859f603", name: "6") {
      name
    }
    h2: CreateHeight(id: "0c16a49f-a20b-41a4-b969-8d95ce43c638", name: "7") {
      name
    }
    h3: CreateHeight(id: "b4ee07d5-8458-4bc4-b01b-4e1ec8c71135", name: "8") {
      name
    }

    ahc1: AddHeightCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "3724ccc3-5e53-4c7b-b6b9-c676c859f603" }) {
      from {
        id
      }
    }
    ahc2: AddHeightCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "0c16a49f-a20b-41a4-b969-8d95ce43c638" }) {
      from {
        id
      }
    }
    ahc3: AddHeightCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "b4ee07d5-8458-4bc4-b01b-4e1ec8c71135" }) {
      from {
        id
      }
    }
    ahc4: AddHeightCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "3724ccc3-5e53-4c7b-b6b9-c676c859f603" }) {
      from {
        id
      }
    }
    ahc5: AddHeightCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "0c16a49f-a20b-41a4-b969-8d95ce43c638" }) {
      from {
        id
      }
    }
    ahc6: AddHeightCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "b4ee07d5-8458-4bc4-b01b-4e1ec8c71135" }) {
      from {
        id
      }
    }

    ah1: AddLotHeight(from: { id: "32df6850-34aa-4cb2-ba2a-5cfffe1cb1e5" }, to: { id: "3724ccc3-5e53-4c7b-b6b9-c676c859f603" }) {
      from {
        id
      }
    }
    ah2: AddLotHeight(from: { id: "ffdf9f10-8fd1-4964-98f4-d10d4860d734" }, to: { id: "0c16a49f-a20b-41a4-b969-8d95ce43c638" }) {
      from {
        id
      }
    }
    ah3: AddLotHeight(from: { id: "233be897-130a-4c1e-a036-54d19c069a7f" }, to: { id: "0c16a49f-a20b-41a4-b969-8d95ce43c638" }) {
      from {
        id
      }
    }
    ah4: AddLotHeight(from: { id: "b41110f7-be90-4760-927b-caf7108348a5" }, to: { id: "b4ee07d5-8458-4bc4-b01b-4e1ec8c71135" }) {
      from {
        id
      }
    }

    m1: CreateSpecial(id: "2d668a00-79f4-49bd-9b1c-5cce7fbbbad3", name: "boro") {
      name
    }
    m2: CreateSpecial(id: "e9a5ab80-af52-4f1f-bc6c-321ab4627542", name: "frit") {
      name
    }
    m3: CreateSpecial(id: "48fed0c3-48c7-4e94-a47d-867f4a598c89", name: "opal") {
      name
    }

    amc1: AddSpecialCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "2d668a00-79f4-49bd-9b1c-5cce7fbbbad3" }) {
      from {
        id
      }
    }
    amc2: AddSpecialCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "e9a5ab80-af52-4f1f-bc6c-321ab4627542" }) {
      from {
        id
      }
    }
    amc3: AddSpecialCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "48fed0c3-48c7-4e94-a47d-867f4a598c89" }) {
      from {
        id
      }
    }

    amc4: AddSpecialCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "2d668a00-79f4-49bd-9b1c-5cce7fbbbad3" }) {
      from {
        id
      }
    }
    amc5: AddSpecialCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "e9a5ab80-af52-4f1f-bc6c-321ab4627542" }) {
      from {
        id
      }
    }
    amc6: AddSpecialCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "48fed0c3-48c7-4e94-a47d-867f4a598c89" }) {
      from {
        id
      }
    }

    am7: AddSpecialCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "2d668a00-79f4-49bd-9b1c-5cce7fbbbad3" }) {
      from {
        id
      }
    }
    amc8: AddSpecialCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "e9a5ab80-af52-4f1f-bc6c-321ab4627542" }) {
      from {
        id
      }
    }
    amc9: AddSpecialCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "48fed0c3-48c7-4e94-a47d-867f4a598c89" }) {
      from {
        id
      }
    }

    amc10: AddSpecialCategory(from: { id: "6ebb41f2-87a7-4bd3-9314-ef830e329751" }, to: { id: "2d668a00-79f4-49bd-9b1c-5cce7fbbbad3" }) {
      from {
        id
      }
    }
    amc11: AddSpecialCategory(from: { id: "6ebb41f2-87a7-4bd3-9314-ef830e329751" }, to: { id: "e9a5ab80-af52-4f1f-bc6c-321ab4627542" }) {
      from {
        id
      }
    }
    amc12: AddSpecialCategory(from: { id: "6ebb41f2-87a7-4bd3-9314-ef830e329751" }, to: { id: "48fed0c3-48c7-4e94-a47d-867f4a598c89" }) {
      from {
        id
      }
    }

    am1: AddLotSpecials(from: { id: "32df6850-34aa-4cb2-ba2a-5cfffe1cb1e5" }, to: { id: "2d668a00-79f4-49bd-9b1c-5cce7fbbbad3" }) {
      from {
        id
      }
    }
    am2: AddLotSpecials(from: { id: "ffdf9f10-8fd1-4964-98f4-d10d4860d734" }, to: { id: "2d668a00-79f4-49bd-9b1c-5cce7fbbbad3" }) {
      from {
        id
      }
    }
    am22: AddLotSpecials(from: { id: "ffdf9f10-8fd1-4964-98f4-d10d4860d734" }, to: { id: "e9a5ab80-af52-4f1f-bc6c-321ab4627542" }) {
      from {
        id
      }
    }
    am3: AddLotSpecials(from: { id: "233be897-130a-4c1e-a036-54d19c069a7f" }, to: { id: "2d668a00-79f4-49bd-9b1c-5cce7fbbbad3" }) {
      from {
        id
      }
    }
    am32: AddLotSpecials(from: { id: "233be897-130a-4c1e-a036-54d19c069a7f" }, to: { id: "48fed0c3-48c7-4e94-a47d-867f4a598c89" }) {
      from {
        id
      }
    }
    am4: AddLotSpecials(from: { id: "b41110f7-be90-4760-927b-caf7108348a5" }, to: { id: "2d668a00-79f4-49bd-9b1c-5cce7fbbbad3" }) {
      from {
        id
      }
    }

    s1: CreateSize(id: "31fdb532-b77c-4b11-8808-40aa43b21392", name: "10") {
      id
    }
    s2: CreateSize(id: "b1c9a918-b73b-4ee0-aff4-753e75cb2bbe", name: "14") {
      id
    }
    s3: CreateSize(id: "a5871c9f-f03c-47f3-9269-25b3d39fc961", name: "18") {
      id
    }

    aszc1: AddSizeCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "31fdb532-b77c-4b11-8808-40aa43b21392" }) {
      from {
        id
      }
    }
    aszc2: AddSizeCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "b1c9a918-b73b-4ee0-aff4-753e75cb2bbe" }) {
      from {
        id
      }
    }
    aszc3: AddSizeCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "a5871c9f-f03c-47f3-9269-25b3d39fc961" }) {
      from {
        id
      }
    }

    aszc4: AddSizeCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "31fdb532-b77c-4b11-8808-40aa43b21392" }) {
      from {
        id
      }
    }
    aszc5: AddSizeCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "b1c9a918-b73b-4ee0-aff4-753e75cb2bbe" }) {
      from {
        id
      }
    }
    aszc6: AddSizeCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "a5871c9f-f03c-47f3-9269-25b3d39fc961" }) {
      from {
        id
      }
    }


    as1: AddLotSize(from: { id: "32df6850-34aa-4cb2-ba2a-5cfffe1cb1e5" }, to: { id: "31fdb532-b77c-4b11-8808-40aa43b21392" }) {
      from {
        id
      }
    }
    as2: AddLotSize(from: { id: "ffdf9f10-8fd1-4964-98f4-d10d4860d734" }, to: { id: "31fdb532-b77c-4b11-8808-40aa43b21392" }) {
      from {
        id
      }
    }
    as3: AddLotSize(from: { id: "233be897-130a-4c1e-a036-54d19c069a7f" }, to: { id: "b1c9a918-b73b-4ee0-aff4-753e75cb2bbe" }) {
      from {
        id
      }
    }
    as4: AddLotSize(from: { id: "b41110f7-be90-4760-927b-caf7108348a5" }, to: { id: "a5871c9f-f03c-47f3-9269-25b3d39fc961" }) {
      from {
        id
      }
    }

    st1: CreateStyle(id: "1cfd4367-3e06-4262-a899-9335f4d4b44e", name: "mini") {
      id
      name
    }
    st2: CreateStyle(id: "09181ba3-363c-47cc-aa3f-03017871fa82", name: "bubbler") {
      id
      name
    }
    st3: CreateStyle(id: "0214c758-6048-49cc-8491-7cf993b9d45f", name: "gravity") {
      id
      name
    }

    st6: CreateStyle(id: "95261f0a-d418-4f83-a432-4f781a2bbaa4", name: "bent neck") {
      id
      name
    }

    st7: CreateStyle(id: "7b2fea9d-632d-4a97-8c6e-fb30b15d22e2", name: "chillum") {
      id
      name
    }
    st8: CreateStyle(id: "fd5de057-1041-44a7-95fe-105cc0ae67aa", name: "gandalf") {
      id
      name
    }

    asc1: AddStyleCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "1cfd4367-3e06-4262-a899-9335f4d4b44e" }) {
      from {
        id
      }
    }
    asc2: AddStyleCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "09181ba3-363c-47cc-aa3f-03017871fa82" }) {
      from {
        id
      }
    }
    asc3: AddStyleCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "0214c758-6048-49cc-8491-7cf993b9d45f" }) {
      from {
        id
      }
    }

    asc4: AddStyleCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "1cfd4367-3e06-4262-a899-9335f4d4b44e" }) {
      from {
        id
      }
    }
    asc5: AddStyleCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "09181ba3-363c-47cc-aa3f-03017871fa82" }) {
      from {
        id
      }
    }
    asc6: AddStyleCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "95261f0a-d418-4f83-a432-4f781a2bbaa4" }) {
      from {
        id
      }
    }

    asc7: AddStyleCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "7b2fea9d-632d-4a97-8c6e-fb30b15d22e2" }) {
      from {
        id
      }
    }
    asc8: AddStyleCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "fd5de057-1041-44a7-95fe-105cc0ae67aa" }) {
      from {
        id
      }
    }

    ast1: AddLotStyles(from: { id: "32df6850-34aa-4cb2-ba2a-5cfffe1cb1e5" }, to: { id: "1cfd4367-3e06-4262-a899-9335f4d4b44e" }) {
      from {
        id
      }
    }

    t1: CreateTheme(id: "c53314b6-9a92-4680-809c-93c454dd77a9", name: "animal") {
      id
      name
    }
    t2: CreateTheme(id: "26c0d01b-2d44-422c-b3d8-58824be2d384", name: "holiday") {
      id
      name
    }

    atc1: AddThemeCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "c53314b6-9a92-4680-809c-93c454dd77a9" }) {
      from {
        id
      }
    }
    atc2: AddThemeCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "26c0d01b-2d44-422c-b3d8-58824be2d384" }) {
      from {
        id
      }
    }

    atc3: AddThemeCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "c53314b6-9a92-4680-809c-93c454dd77a9" }) {
      from {
        id
      }
    }
    atc4: AddThemeCategory(from: { id: "eee4a514-1cba-42b4-a36f-46bc7566e8a9" }, to: { id: "26c0d01b-2d44-422c-b3d8-58824be2d384" }) {
      from {
        id
      }
    }

    atc5: AddThemeCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "c53314b6-9a92-4680-809c-93c454dd77a9" }) {
      from {
        id
      }
    }
    atc6: AddThemeCategory(from: { id: "4b4717b5-a5a9-4e91-8389-c0fab285f0c2" }, to: { id: "26c0d01b-2d44-422c-b3d8-58824be2d384" }) {
      from {
        id
      }
    }



    p1: CreatePerc(id: "55e03de7-326e-4b25-adb9-20a47de6cb50", name: "disc") {
      id
      name
    }
    p2: CreatePerc(id: "982df4ad-b81e-496d-977f-ec29bacc6663", name: "honeycomb") {
      id
      name
    }
    p3: CreatePerc(id: "e3e4b914-8779-47b7-9382-41963217be51", name: "inline") {
      id
      name
    }

    apc1: AddPercCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "55e03de7-326e-4b25-adb9-20a47de6cb50" }) {
      from {
        id
      }
    }
    apc2: AddPercCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "982df4ad-b81e-496d-977f-ec29bacc6663" }) {
      from {
        id
      }
    }
    apc3: AddPercCategory(from: { id: "ace3b78f-a352-451a-813e-99baa186328e" }, to: { id: "e3e4b914-8779-47b7-9382-41963217be51" }) {
      from {
        id
      }
    }
  }
`;
