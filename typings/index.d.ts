// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../express

declare module 'express-typescript' {
    export * from "express-typescript/Application";
    export * from "express-typescript/Controller";
    export * from "express-typescript/Error";
}

declare module 'express-typescript/Application' {
    import Controller from "express-typescript/Controller";
    import ErrorHandler from "express-typescript/Error";
    import express, { Express } from "express";
    import "reflect-metadata";
    export interface ExpressOptions {
        controllers?: string;
        errors?: string;
        port: number;
    }
    export interface Application {
        readonly options: ExpressOptions;
        readonly controllers: Controller;
        readonly errors: ErrorHandler;
        readonly applicationDirectory: string;
        readonly express: Express;
    }
    export function ExpressApplication(options?: ExpressOptions): <T extends new (...args: any[]) => {}>(constructor: T) => {
        new (...args: any[]): {
            readonly options: ExpressOptions;
            readonly controllers: Controller;
            readonly errors: ErrorHandler;
            readonly applicationDirectory: string;
            readonly express: express.Express;
        };
    } & T;
}

declare module 'express-typescript/Controller' {
    import { Application } from "express-typescript/Application";
    import { Request, Response } from "express";
    export interface Controller {
        readonly app: Application;
    }
    export function Controller(route: string): <T extends new (...args: any[]) => {}>(constructor: T) => T;
    export namespace Controller {
        var Route: (routeOrOptions: string | RouteOptions, method?: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
        var Get: (route: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
        var Put: (route: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
        var Patch: (route: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
        var Post: (route: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
        var Delete: (route: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
    }
    export type Methods = "ALL" | "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD" | string;
    export interface RouteOptions {
        route: string;
        method?: Methods;
    }
    export function HTTPRequest(target: any, propertyKey: string, parameterIndex: number): void;
    export function HTTPResponse(target: any, propertyKey: string, parameterIndex: number): void;
    export function RequestBody(target: any, propertyKey: string, parameterIndex: number): void;
    export function Validate(target: any, propertyKey: string, parameterIndex: number): void;
    export function RouteParameter(name?: string): (target: any, propertyKey: string, parameterIndex: number) => void;
    export function Middleware(...functions: ((request: Request, response: Response) => void)[]): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
    export function Parameter(parameter?: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
    export default class {
        app: Application;
        files: string[];
        directory: string;
        loadAll(): void;
        load(name: string): void;
        unload(name: string): void;
        removeRoute(route: string): void;
        init(app: Application): void;
        makeBody(klazz: any, body: any, validate: any): any;
    }
}

declare module 'express-typescript/Error' {
    import { Application } from "express-typescript/Application";
    import { Request, Response } from "express";
    export interface ErrorHandler {
        readonly app: Application;
        supports(error: any): boolean;
        handle(request: Request, response: Response, error: any): void;
    }
    export class ErrorHandler {
    }
    export default class {
        app: Application;
        files: string[];
        directory: string;
        loadAll(): void;
        load(name: string): void;
        unload(name: string): void;
        iterate(req: any, res: any, error: any): boolean;
        init(app: Application): void;
    }
}

