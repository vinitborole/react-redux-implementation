import styled from "@emotion/styled";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import BaseLayout from "./baseLayout";

export default function AuthLayout() {
  return <BaseLayout login="true" />;
}
