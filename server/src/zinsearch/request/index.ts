import { Request } from 'express';
import EnvVars from "../../common/EnvVars";
import axios, { AxiosInstance } from "axios";
import * as base64 from 'base-64';

/**
 * zinsearch http client
 */
class HttpClient {
    private static instance: HttpClient;

    public readonly http: AxiosInstance;

    private token: string;

    constructor() {
        this.http = axios.create({
            baseURL: EnvVars.Zinsearch.Host,
            timeout: 5000,
        });

        this.token = base64.encode(`${EnvVars.Zinsearch.User}:${EnvVars.Zinsearch.Password}`);
        this.http.interceptors.request.use(
            (config) => {
                config.headers['Content-Type'] = 'application/json';
                config.headers["Authorization"] = `Basic ${this.token}`;
                return config;
            }
        )
    }

    public static getInstance(): HttpClient {
        if (!HttpClient.instance) {
            HttpClient.instance = new HttpClient();
        }
        return HttpClient.instance;
    }
}

const Request = HttpClient.getInstance().http;

export default Request;