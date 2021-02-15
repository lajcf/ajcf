import { Input } from "antd";
import React from "react";
import styles from "./Header.module.scss";

const { Search } = Input;

export const SearchBar = () => {
  return <Search className={styles.searchbar} allowClear />;
};
