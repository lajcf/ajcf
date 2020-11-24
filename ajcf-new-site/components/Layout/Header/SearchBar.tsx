import React from "react";
import styles from "../Header/Header.module.scss";
import { Input } from "antd";

const { Search } = Input;

export const SearchBar = () => {
  return <Search className={styles.searchbar} enterButton allowClear />;
};
