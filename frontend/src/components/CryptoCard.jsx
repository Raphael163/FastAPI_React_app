import styles from "../styles/CryptoCard.module.scss"


const CryptoCard = ({currency}) => {
 
  
  return (
    <div className={styles.card}>


       <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} alt='logo' width="50"/>
          <div className={styles.title}>{currency.name} {currency.symbol}</div>
          <div className={styles.content}>
            <p>Цена в USD   {currency.quote.USD.price}</p>
          </div>
          <div className={styles.footer}>Дата обновления  {currency.last_updated}</div>
          <div className={styles.footer}>Дата добавления  {currency.date_added}</div>
      <div className={styles.footer}>Процентное изменение 7 дней {currency.quote.USD.percent_change_7d} %</div>
      
      
    </div>
  );
};

export default CryptoCard;