import { ContainerStorage } from "@skygear/core";
export * from "@skygear/core";
import { WebAPIClient } from "./client";
export * from "./client";
import { localStorageStorageDriver } from "./storage";
export * from "./storage";
import { WebContainer } from "./container";
export * from "./container";
export * from "./types";

/**
 * @public
 */
export const defaultContainer: WebContainer = new WebContainer(
  "default",
  new WebAPIClient({
    apiKey: "",
    endpoint: "",
    accessToken: null,
  }),
  new ContainerStorage(localStorageStorageDriver)
);
