/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { loggingSystemMock, savedObjectsServiceMock } from 'src/core/server/mocks';
import { FleetAppContext } from './plugin';
import { encryptedSavedObjectsMock } from '../../encrypted_saved_objects/server/mocks';
import { securityMock } from '../../security/server/mocks';
import { PackagePolicyServiceInterface } from './services/package_policy';

export const createAppContextStartContractMock = (): FleetAppContext => {
  return {
    encryptedSavedObjectsStart: encryptedSavedObjectsMock.createStart(),
    savedObjects: savedObjectsServiceMock.createStartContract(),
    security: securityMock.createSetup(),
    logger: loggingSystemMock.create().get(),
    isProductionMode: true,
    kibanaVersion: '8.0.0',
    kibanaBranch: 'master',
  };
};

export const createPackagePolicyServiceMock = () => {
  return {
    assignPackageStream: jest.fn(),
    buildPackagePolicyFromPackage: jest.fn(),
    bulkCreate: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
    get: jest.fn(),
    getByIDs: jest.fn(),
    list: jest.fn(),
    update: jest.fn(),
  } as jest.Mocked<PackagePolicyServiceInterface>;
};
