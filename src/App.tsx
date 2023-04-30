import { useState } from "react";
import { MathComponent } from "mathjax-react";

function App() {
  const [number, setNumber] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [visible, setVisible] = useState(false);
  const [display1, setDisplay1] = useState(true);
  const [display2, setDisplay2] = useState(false);
  const min = -10;
  const max = 10;

  const a = Math.floor(Math.random() * (max + 1 - min)) + min;
  const b = Math.floor(Math.random() * (max + 1 - min)) + min;
  return (
    <>
      <h2>フラッシュ展開・因数分解</h2>
      <div style={{ display: display1 ? "block" : "none" }}>
        <button
          className="button"
          type="button"
          key={"kirikae"}
          onClick={() => {
            setDisplay1(false);
            setDisplay2(true);
          }}
        >
          因数分解モードに切り替える
        </button>
        <p>次の多項式を展開しましょう。</p>
        {number > 0 && number2 > 0 && (
          <MathComponent
            tex={String.raw`(x - ${number})(x - ${number2})`}
          ></MathComponent>
        )}
        {number > 0 && number2 < 0 && (
          <MathComponent
            tex={String.raw`(x - ${number})(x + ${-number2})`}
          ></MathComponent>
        )}
        {number < 0 && number2 > 0 && (
          <MathComponent
            tex={String.raw`(x + ${-number})(x - ${number2})`}
          ></MathComponent>
        )}
        {number < 0 && number2 < 0 && (
          <MathComponent
            tex={String.raw`(x + ${-number})(x + ${-number2})`}
          ></MathComponent>
        )}
        {/*  */}
        {number > 0 && number2 === 0 && (
          <MathComponent tex={String.raw`(x - ${number})x`}></MathComponent>
        )}
        {number === 0 && number2 <= 0 && (
          <MathComponent tex={String.raw`x(x + ${-number2})`}></MathComponent>
        )}
        {number <= 0 && number2 === 0 && (
          <MathComponent tex={String.raw`(x + ${-number})x`}></MathComponent>
        )}
        {number === 0 && number2 > 0 && (
          <MathComponent tex={String.raw`x(x - ${number2})`}></MathComponent>
        )}

        <button
          type="button"
          key={"answer"}
          onClick={() => {
            setVisible(true);
          }}
        >
          答え合わせ
        </button>
        <div style={{ visibility: visible ? "visible" : "hidden" }}>
          <p>答え</p>
          {number > 0 &&
            number2 > 0 &&
            number + number2 !== 1 &&
            number + number2 !== 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 - ${number + number2}x + ${
                  number * number2
                }`}
              ></MathComponent>
            )}
          {number > 0 &&
            number2 <= 0 &&
            number + number2 > 0 &&
            number + number2 !== 1 &&
            number + number2 !== 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 - ${number + number2}x - ${-(
                  number * number2
                )}`}
              ></MathComponent>
            )}
          {number > 0 &&
            number2 <= 0 &&
            number + number2 <= 0 &&
            number + number2 !== -1 &&
            number + number2 !== 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 + ${-(number + number2)}x - ${-(
                  number * number2
                )}`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 > 0 &&
            number + number2 > 0 &&
            number + number2 !== 1 &&
            number + number2 !== 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 - ${number + number2}x - ${-(
                  number * number2
                )}`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 > 0 &&
            number + number2 <= 0 &&
            number + number2 !== -1 &&
            number + number2 !== 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 + ${-(number + number2)}x - ${-(
                  number * number2
                )}`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 <= 0 &&
            number + number2 !== -1 &&
            number + number2 !== 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 + ${-(number + number2)}x + ${
                  number * number2
                }`}
              ></MathComponent>
            )}
          {/*  */}
          {number > 0 &&
            number2 > 0 &&
            number + number2 === 1 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 - x + ${number * number2}`}
              ></MathComponent>
            )}
          {number > 0 &&
            number2 <= 0 &&
            number + number2 > 0 &&
            number + number2 === 1 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 - x - ${-(number * number2)}`}
              ></MathComponent>
            )}
          {number > 0 &&
            number2 <= 0 &&
            number + number2 <= 0 &&
            number + number2 === -1 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 + x - ${-(number * number2)}`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 > 0 &&
            number + number2 > 0 &&
            number + number2 === 1 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 - x - ${-(number * number2)}`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 > 0 &&
            number + number2 <= 0 &&
            number + number2 === -1 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 + x - ${-(number * number2)}`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 <= 0 &&
            number + number2 === -1 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 + x + ${number * number2}`}
              ></MathComponent>
            )}
          {/*  */}
          {number > 0 &&
            number2 > 0 &&
            number + number2 === 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 + ${number * number2}`}
              ></MathComponent>
            )}
          {number > 0 &&
            number2 <= 0 &&
            number + number2 > 0 &&
            number + number2 === 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 - ${-(number * number2)}`}
              ></MathComponent>
            )}
          {number > 0 &&
            number2 <= 0 &&
            number + number2 <= 0 &&
            number + number2 === 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 - ${-(number * number2)}`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 > 0 &&
            number + number2 > 0 &&
            number + number2 === 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 - ${-(number * number2)}`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 > 0 &&
            number + number2 <= 0 &&
            number + number2 === 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 - ${-(number * number2)}`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 <= 0 &&
            number + number2 === 0 &&
            number * number2 !== 0 && (
              <MathComponent
                tex={String.raw`x^2 + ${number * number2}`}
              ></MathComponent>
            )}
          {/*  */}
          {number > 0 &&
            number2 > 0 &&
            number + number2 !== 1 &&
            number + number2 !== 0 &&
            number * number2 === 0 && (
              <MathComponent
                tex={String.raw`x^2 - ${number + number2}x`}
              ></MathComponent>
            )}
          {number > 0 &&
            number2 <= 0 &&
            number + number2 > 0 &&
            number + number2 !== 1 &&
            number + number2 !== 0 &&
            number * number2 === 0 && (
              <MathComponent
                tex={String.raw`x^2 - ${number + number2}x`}
              ></MathComponent>
            )}
          {number > 0 &&
            number2 <= 0 &&
            number + number2 <= 0 &&
            number + number2 !== -1 &&
            number + number2 !== 0 &&
            number * number2 === 0 && (
              <MathComponent
                tex={String.raw`x^2 + ${-(number + number2)}x`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 > 0 &&
            number + number2 > 0 &&
            number + number2 !== 1 &&
            number + number2 !== 0 &&
            number * number2 === 0 && (
              <MathComponent
                tex={String.raw`x^2 - ${number + number2}x`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 > 0 &&
            number + number2 <= 0 &&
            number + number2 !== -1 &&
            number + number2 !== 0 &&
            number * number2 === 0 && (
              <MathComponent
                tex={String.raw`x^2 + ${-(number + number2)}x`}
              ></MathComponent>
            )}
          {number <= 0 &&
            number2 <= 0 &&
            number + number2 !== -1 &&
            number + number2 !== 0 &&
            number * number2 === 0 && (
              <MathComponent
                tex={String.raw`x^2 + ${-(number + number2)}x`}
              ></MathComponent>
            )}
          {/*  */}
          {number > 0 &&
            number2 > 0 &&
            number + number2 === 1 &&
            number * number2 === 0 && (
              <MathComponent tex={String.raw`x^2 - x`}></MathComponent>
            )}
          {number > 0 &&
            number2 <= 0 &&
            number + number2 > 0 &&
            number + number2 === 1 &&
            number * number2 === 0 && (
              <MathComponent tex={String.raw`x^2 - x`}></MathComponent>
            )}
          {number > 0 &&
            number2 <= 0 &&
            number + number2 <= 0 &&
            number + number2 === -1 &&
            number * number2 === 0 && (
              <MathComponent tex={String.raw`x^2 + x`}></MathComponent>
            )}
          {number <= 0 &&
            number2 > 0 &&
            number + number2 > 0 &&
            number + number2 === 1 &&
            number * number2 === 0 && (
              <MathComponent tex={String.raw`x^2 - x`}></MathComponent>
            )}
          {number <= 0 &&
            number2 > 0 &&
            number + number2 <= 0 &&
            number + number2 === -1 &&
            number * number2 === 0 && (
              <MathComponent tex={String.raw`x^2 + x}`}></MathComponent>
            )}
          {number <= 0 &&
            number2 <= 0 &&
            number + number2 === -1 &&
            number * number2 === 0 && (
              <MathComponent tex={String.raw`x^2 + x`}></MathComponent>
            )}
          {/*  */}
          {number + number2 === 0 && number * number2 === 0 && (
            <MathComponent tex={String.raw`x^2`}></MathComponent>
          )}
        </div>
        <button
          type="button"
          key={"button"}
          onClick={() => {
            setNumber(a);
            setNumber2(b);
            setVisible(false);
          }}
        >
          新しい問題
        </button>
      </div>
      <div style={{ display: display2 ? "block" : "none" }}>
        <button
          className="button"
          type="button"
          key={"kirikae"}
          onClick={() => {
            setDisplay1(true);
            setDisplay2(false);
          }}
        >
          展開モードに切り替える
        </button>
        <p>次の多項式を因数分解しましょう。</p>
        {number > 0 &&
          number2 > 0 &&
          number + number2 !== 1 &&
          number + number2 !== 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 - ${number + number2}x + ${number * number2}`}
            ></MathComponent>
          )}
        {number > 0 &&
          number2 <= 0 &&
          number + number2 > 0 &&
          number + number2 !== 1 &&
          number + number2 !== 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 - ${number + number2}x - ${-(
                number * number2
              )}`}
            ></MathComponent>
          )}
        {number > 0 &&
          number2 <= 0 &&
          number + number2 <= 0 &&
          number + number2 !== -1 &&
          number + number2 !== 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 + ${-(number + number2)}x - ${-(
                number * number2
              )}`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 > 0 &&
          number + number2 > 0 &&
          number + number2 !== 1 &&
          number + number2 !== 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 - ${number + number2}x - ${-(
                number * number2
              )}`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 > 0 &&
          number + number2 <= 0 &&
          number + number2 !== -1 &&
          number + number2 !== 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 + ${-(number + number2)}x - ${-(
                number * number2
              )}`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 <= 0 &&
          number + number2 !== -1 &&
          number + number2 !== 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 + ${-(number + number2)}x + ${
                number * number2
              }`}
            ></MathComponent>
          )}
        {/*  */}
        {number > 0 &&
          number2 > 0 &&
          number + number2 === 1 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 - x + ${number * number2}`}
            ></MathComponent>
          )}
        {number > 0 &&
          number2 <= 0 &&
          number + number2 > 0 &&
          number + number2 === 1 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 - x - ${-(number * number2)}`}
            ></MathComponent>
          )}
        {number > 0 &&
          number2 <= 0 &&
          number + number2 <= 0 &&
          number + number2 === -1 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 + x - ${-(number * number2)}`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 > 0 &&
          number + number2 > 0 &&
          number + number2 === 1 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 - x - ${-(number * number2)}`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 > 0 &&
          number + number2 <= 0 &&
          number + number2 === -1 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 + x - ${-(number * number2)}`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 <= 0 &&
          number + number2 === -1 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 + x + ${number * number2}`}
            ></MathComponent>
          )}
        {/*  */}
        {number > 0 &&
          number2 > 0 &&
          number + number2 === 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 + ${number * number2}`}
            ></MathComponent>
          )}
        {number > 0 &&
          number2 <= 0 &&
          number + number2 > 0 &&
          number + number2 === 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 - ${-(number * number2)}`}
            ></MathComponent>
          )}
        {number > 0 &&
          number2 <= 0 &&
          number + number2 <= 0 &&
          number + number2 === 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 - ${-(number * number2)}`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 > 0 &&
          number + number2 > 0 &&
          number + number2 === 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 - ${-(number * number2)}`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 > 0 &&
          number + number2 <= 0 &&
          number + number2 === 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 - ${-(number * number2)}`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 <= 0 &&
          number + number2 === 0 &&
          number * number2 !== 0 && (
            <MathComponent
              tex={String.raw`x^2 + ${number * number2}`}
            ></MathComponent>
          )}
        {/*  */}
        {number > 0 &&
          number2 > 0 &&
          number + number2 !== 1 &&
          number + number2 !== 0 &&
          number * number2 === 0 && (
            <MathComponent
              tex={String.raw`x^2 - ${number + number2}x`}
            ></MathComponent>
          )}
        {number > 0 &&
          number2 <= 0 &&
          number + number2 > 0 &&
          number + number2 !== 1 &&
          number + number2 !== 0 &&
          number * number2 === 0 && (
            <MathComponent
              tex={String.raw`x^2 - ${number + number2}x`}
            ></MathComponent>
          )}
        {number > 0 &&
          number2 <= 0 &&
          number + number2 <= 0 &&
          number + number2 !== -1 &&
          number + number2 !== 0 &&
          number * number2 === 0 && (
            <MathComponent
              tex={String.raw`x^2 + ${-(number + number2)}x`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 > 0 &&
          number + number2 > 0 &&
          number + number2 !== 1 &&
          number + number2 !== 0 &&
          number * number2 === 0 && (
            <MathComponent
              tex={String.raw`x^2 - ${number + number2}x`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 > 0 &&
          number + number2 <= 0 &&
          number + number2 !== -1 &&
          number + number2 !== 0 &&
          number * number2 === 0 && (
            <MathComponent
              tex={String.raw`x^2 + ${-(number + number2)}x`}
            ></MathComponent>
          )}
        {number <= 0 &&
          number2 <= 0 &&
          number + number2 !== -1 &&
          number + number2 !== 0 &&
          number * number2 === 0 && (
            <MathComponent
              tex={String.raw`x^2 + ${-(number + number2)}x`}
            ></MathComponent>
          )}
        {/*  */}
        {number > 0 &&
          number2 > 0 &&
          number + number2 === 1 &&
          number * number2 === 0 && (
            <MathComponent tex={String.raw`x^2 - x`}></MathComponent>
          )}
        {number > 0 &&
          number2 <= 0 &&
          number + number2 > 0 &&
          number + number2 === 1 &&
          number * number2 === 0 && (
            <MathComponent tex={String.raw`x^2 - x`}></MathComponent>
          )}
        {number > 0 &&
          number2 <= 0 &&
          number + number2 <= 0 &&
          number + number2 === -1 &&
          number * number2 === 0 && (
            <MathComponent tex={String.raw`x^2 + x`}></MathComponent>
          )}
        {number <= 0 &&
          number2 > 0 &&
          number + number2 > 0 &&
          number + number2 === 1 &&
          number * number2 === 0 && (
            <MathComponent tex={String.raw`x^2 - x`}></MathComponent>
          )}
        {number <= 0 &&
          number2 > 0 &&
          number + number2 <= 0 &&
          number + number2 === -1 &&
          number * number2 === 0 && (
            <MathComponent tex={String.raw`x^2 + x}`}></MathComponent>
          )}
        {number <= 0 &&
          number2 <= 0 &&
          number + number2 === -1 &&
          number * number2 === 0 && (
            <MathComponent tex={String.raw`x^2 + x`}></MathComponent>
          )}
        {/*  */}
        {number + number2 === 0 && number * number2 === 0 && (
          <MathComponent tex={String.raw`x^2`}></MathComponent>
        )}

        <button
          type="button"
          key={"answer"}
          onClick={() => {
            setVisible(true);
          }}
        >
          答え合わせ
        </button>
        <div style={{ visibility: visible ? "visible" : "hidden" }}>
          <p>答え</p>
          {number > 0 && number2 > 0 && (
            <MathComponent
              tex={String.raw`(x - ${number})(x - ${number2})`}
            ></MathComponent>
          )}
          {number > 0 && number2 < 0 && (
            <MathComponent
              tex={String.raw`(x - ${number})(x + ${-number2})`}
            ></MathComponent>
          )}
          {number < 0 && number2 > 0 && (
            <MathComponent
              tex={String.raw`(x + ${-number})(x - ${number2})`}
            ></MathComponent>
          )}
          {number < 0 && number2 < 0 && (
            <MathComponent
              tex={String.raw`(x + ${-number})(x + ${-number2})`}
            ></MathComponent>
          )}
          {/*  */}
          {number > 0 && number2 === 0 && (
            <MathComponent tex={String.raw`(x - ${number})x`}></MathComponent>
          )}
          {number === 0 && number2 <= 0 && (
            <MathComponent tex={String.raw`x(x + ${-number2})`}></MathComponent>
          )}
          {number <= 0 && number2 === 0 && (
            <MathComponent tex={String.raw`(x + ${-number})x`}></MathComponent>
          )}
          {number === 0 && number2 > 0 && (
            <MathComponent tex={String.raw`x(x - ${number2})`}></MathComponent>
          )}
          {/*  */}
          {number + number2 === 0 && number * number2 === 0 && (
            <MathComponent tex={String.raw`x^2`}></MathComponent>
          )}
        </div>
        <button
          type="button"
          key={"button"}
          onClick={() => {
            setNumber(a);
            setNumber2(b);
            setVisible(false);
          }}
        >
          新しい問題
        </button>
      </div>
      <p style={{margin: 10}}> ＊ このサイトの制作者「かっちゃん」へのお問い合わせは<a href="https://random776.github.io/kacchan-uts2-22/contact.html" className="btn4">こちら</a>から。</p>
    </>
  );
}

export default App;
