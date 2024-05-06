"use client";
import { Circles } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="loading-wrapper">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
