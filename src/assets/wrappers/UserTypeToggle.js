import styled from "styled-components"

const Wrapper = styled.section`

.container {
  text-align: center;
}
.toggle-switch {
  position: relative;
  width: 250px;
  display: inline-block;
  text-align: left;
  top: 8px;
}
.checkbox {
  display: none;
}
.label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 20px;
  color: white;
}
.inner {
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.1s ease-in 0s;
}
.inner:before,
.inner:after {
  float: left;
  width: 50%;
  height: 36px;
  padding: 0;
  line-height: 36px;
  color: #fff;
  font-weight: bold;
  box-sizing: border-box;
}
.inner:before {
  content: "CUSTOMER";
  padding-left: 10px;
  font-family: "Poppins";
  background-color: #174D7E;
  color: #fff;
}
.inner:after {
  content: "PORTER";
  padding-right: 10px;
  background-color:#f1723b;
  font-family: "Poppins";
  color: #fff;
  text-align: right;
}
.switch {
  display: block;
  width: 50%;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right:115px;
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.1s ease-in 0s;
}
.checkbox:checked + .label .inner {
  margin-left: 0;
}
.checkbox:checked + .label .switch {
  right: 0px;
}
small, .small {
  color: white;
}
`

export default Wrapper