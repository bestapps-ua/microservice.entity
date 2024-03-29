import IConfigCache from "../interface/config/IConfigCache";

class ConfigModel {
    cacheConfig: IConfigCache;

    setCacheConfig(cfg: IConfigCache) {
        this.cacheConfig = cfg;
    }

    getCacheConfig(): IConfigCache {
        return this.cacheConfig;
    }
}

export default new ConfigModel();
