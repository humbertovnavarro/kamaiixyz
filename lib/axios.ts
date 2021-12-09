import axios from "axios";
import { SocksProxyAgent } from "socks-proxy-agent";
const agent = new SocksProxyAgent('socks5h://127.0.0.1:9050');
axios.defaults.httpAgent = agent;
axios.defaults.httpsAgent = agent;
export default axios;