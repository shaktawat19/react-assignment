import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "Revenues":
      data = {
        title: `Total ${type}`,
        isDollar: true,
        amount: 2040000,
        bgColor: "#bbfad9"
      };
      break;
    case "Transactions":
      data = {
        title: `Total ${type}`,
        isDollar: false,
        amount: 1200,
        bgColor: "#fcf995"
      };
      break;
    case "Likes":
      data = {
        title: `Total ${type}`,
        isDollar: false,
        amount: 2040,
        bgColor: "#fccced"
      };
      break;
    case "Users":
      data = {
        title: `Total ${type}`,
        isDollar: false,
        amount: 930,
        bgColor: "#afdbfa"
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget" style={{backgroundColor: data.bgColor}}>
        <span className="title">
            {data.title}
        </span>
        <span className="amount">
          {data.isMoney && "$"} {data.amount}
        </span>
    </div>
  );
};

export default Widget;
