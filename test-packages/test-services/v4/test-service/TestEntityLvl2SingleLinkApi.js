'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TestEntityLvl2SingleLinkApi = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TestEntityLvl2SingleLink_1 = require('./TestEntityLvl2SingleLink');
const TestEntityLvl2SingleLinkRequestBuilder_1 = require('./TestEntityLvl2SingleLinkRequestBuilder');
const odata_v4_1 = require('@sap-cloud-sdk/odata-v4');
const internal_1 = require('@sap-cloud-sdk/odata-common/internal');
class TestEntityLvl2SingleLinkApi {
  constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
    this.entityConstructor =
      TestEntityLvl2SingleLink_1.TestEntityLvl2SingleLink;
    this.deSerializers = deSerializers;
  }
  _addNavigationProperties(linkedApis) {
    this.navigationPropertyFields = {};
    return this;
  }
  requestBuilder() {
    return new TestEntityLvl2SingleLinkRequestBuilder_1.TestEntityLvl2SingleLinkRequestBuilder(
      this
    );
  }
  entityBuilder() {
    return (0, internal_1.entityBuilder)(this);
  }
  customField(fieldName, isNullable = false) {
    return new odata_v4_1.CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    );
  }
  get schema() {
    const fieldBuilder = new internal_1.FieldBuilder(
      TestEntityLvl2SingleLink_1.TestEntityLvl2SingleLink,
      this.deSerializers
    );
    return {
      /**
       * Static representation of the [[stringProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      STRING_PROPERTY: fieldBuilder.buildEdmTypeField(
        'StringProperty',
        'Edm.String',
        true
      ),
      /**
       * Static representation of the [[booleanProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      BOOLEAN_PROPERTY: fieldBuilder.buildEdmTypeField(
        'BooleanProperty',
        'Edm.Boolean',
        true
      ),
      /**
       * Static representation of the [[guidProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      GUID_PROPERTY: fieldBuilder.buildEdmTypeField(
        'GuidProperty',
        'Edm.Guid',
        true
      ),
      /**
       * Static representation of the [[int16Property]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      INT_16_PROPERTY: fieldBuilder.buildEdmTypeField(
        'Int16Property',
        'Edm.Int16',
        true
      ),
      /**
       * Static representation of the [[keyProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      KEY_PROPERTY: fieldBuilder.buildEdmTypeField(
        'KeyProperty',
        'Edm.String',
        false
      ),
      ...this.navigationPropertyFields,
      /**
       *
       * All fields selector.
       */
      ALL_FIELDS: new internal_1.AllFields(
        '*',
        TestEntityLvl2SingleLink_1.TestEntityLvl2SingleLink
      )
    };
  }
}
exports.TestEntityLvl2SingleLinkApi = TestEntityLvl2SingleLinkApi;
//# sourceMappingURL=TestEntityLvl2SingleLinkApi.js.map