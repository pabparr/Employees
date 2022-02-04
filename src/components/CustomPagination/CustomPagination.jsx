import React from "react";

const CustomPagination = ({
  pageEntries,
  totalEntries,
  activePage,
  clickButtonHandler,
}) => {
  const totalPages = Math.ceil(totalEntries / pageEntries);
  const buttonsMap = () => {
    let buttons = [];
    let maxButtons = 5;
    let previousButtons = 2;
    let nextButtons = 2;
    if (activePage - previousButtons < 0) {
      nextButtons = nextButtons + previousButtons;
      previousButtons = 0;
    } else if (activePage - previousButtons == 0) {
      nextButtons = nextButtons + 1;
      previousButtons = previousButtons - 1;
    } else if (activePage + nextButtons == totalPages + 1) {
      previousButtons = previousButtons + 1;
      nextButtons = nextButtons - 1;
    } else if (activePage + nextButtons > totalPages) {
      previousButtons = previousButtons + nextButtons;
      nextButtons = 0;
    }

    for (let i = 1; i <= totalPages; i++) {
      if (i < activePage && previousButtons >= activePage - i) {
        buttons.push(i);
      } else if (i > activePage && nextButtons >= i - activePage) {
        buttons.push(i);
      } else if (i === activePage) {
        buttons.push(i);
      }
    }
    if (buttons.includes(1) === false) {
      buttons.unshift(1);
    }
    if (buttons.includes(totalPages) === false) {
      buttons.push(totalPages);
    }
    return buttons;
  };

  return (
    <div style={{ display: "inline", marginLeft: "auto" }}>
      {activePage > 1 && (
        <button
          className="btn btn-secondary border"
          onClick={() => clickButtonHandler(activePage - 1)}
        >
          Prev.
        </button>
      )}
      {buttonsMap().map((value) => {
        if (value === activePage) {
          return (
            <button
              className="btn btn-info border"
              key={value}
              onClick={() => clickButtonHandler(parseInt(value))}
            >
              {value}
            </button>
          );
        } else {
          return (
            <button
              className="btn btn-secondary border"
              key={value}
              onClick={() => clickButtonHandler(value)}
            >
              {value}
            </button>
          );
        }
      })}
      {totalPages > activePage && (
        <button
          className="btn btn-secondary border"
          onClick={() => clickButtonHandler(activePage + 1)}
        >
          Sig.
        </button>
      )}
    </div>
  );
};

export default CustomPagination;
