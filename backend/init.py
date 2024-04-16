from backend.http_client import CMCHTTPClient
from backend.config import CMS_API_KEY


cmc_client = CMCHTTPClient(
    base_url="https://pro-api.coinmarketcap.com",
    api_key=CMS_API_KEY
)
