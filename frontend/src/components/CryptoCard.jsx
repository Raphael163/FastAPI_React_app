import styles from "../styles/CryptoCard.module.scss";

const CryptoCard = ({ currency }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} alt='logo' width="50" />
        <div className={styles.title}>{currency.name} ({currency.symbol})</div>
        <div className={styles.content}>
          <p>Сумма: в ${currency.quote.USD.price.toFixed(2)}</p>
          <p>Объем за 24 часа: ${currency.quote.USD.volume_24h.toFixed(2)}</p>
          <p>Изменение за 24 часа: {currency.quote.USD.percent_change_24h.toFixed(2)}%</p>
        </div>
        <div className={styles.footer}>Дата обновления: {currency.last_updated}</div>
        <div className={styles.footer}>Дата добавления: {currency.date_added}</div>
        <div className={styles.footer}>Процентное изменение за 7 дней: {currency.quote.USD.percent_change_7d.toFixed(2)}%</div>
      </div>
    </div>
  );
};

export default CryptoCard;
