import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/others/in-feature-galaxy-m33-5g-6gb-ram-532917783?$FB_TYPE_A_JPG$"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Big Battery
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://www.oppo.com/content/dam/oppo/product-asset-library/reno/reno8-series/global/reno8t-5g/v1/assets/128-ram/images-performance-ram-heben-1-90-128.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Preformance
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://www.oppo.com/content/dam/oppo/product-asset-library/reno/reno8-series/global/reno8t-5g/v1/assets/images-ksp-1-1-90.jpg.webp"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Camera
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://www.cnet.com/a/img/resize/380b4f689d3736e87dd5010c93bbe9f9e2f5a017/hub/2022/07/08/d9c4bb7f-f372-4db8-8cfb-9cc7a277baf0/old-flagship-used-new-budget-7.jpg?auto=webp&fit=crop&height=1200&width=1200"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Budget
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202206/09/YBPhLc3WQggf87lm.png?x-amz-process=image/format,webp/quality,Q_80"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://img.freepik.com/premium-psd/smartphone-cover-case-mockup_358694-161.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Case
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
