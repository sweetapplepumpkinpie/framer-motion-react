import styled from "styled-components"
import { motion } from "framer-motion"
import { animated, useSpring } from "@react-spring/web"

export const ModalContainer = styled(motion.div).attrs(
  (props: { isOpen: boolean }) => ({
    isOpen: props.isOpen || false,
  })
)`
  display: none;
  position: fixed;
  width: 100%;
  .modal {
    position: fixed;
    background: #222222;
    opacity: 0.3;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  ${({ isOpen }) =>
    isOpen &&
    `
    display: block !important;

  `}
`
export const ModalBox = styled(motion.div)`
  margin: auto;
  width: 900px;
  position: relative;
  background: #ffffff;
  padding: 5px;
  border-radius: 5px;
  z-index: 10;
  @media only screen and (max-width: 1024px) {
    width: 600px;
  }
  @media only screen and (max-width: 768px) {
    width: 450px;
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`
export const CloseButton = styled(motion.button)`
  padding: 5px 10px;
  text-align: center;
  outline: none;
  border-radius: 5px;
  border: 1px gray solid;
  color: white;
  background: gray;
`
export const SwitchButton = styled(motion.button)`
  padding: 5px 10px;
  text-align: center;
  outline: none;
  border-radius: 5px;
  border: 1px #04ef21 solid;
  color: white;
  background: #04ef21;

  &.mr-2 {
    margin-right: 0.5rem;
  }
`
export const ModalHeader = styled.div`
  padding: 5px 10px;
  font-weight: bold;
`
export const ModalFooter = styled.div`
  padding: 5px 10px;
`
export const ModalBody = styled.div`
  padding: 5px;
`
export const AnimateDiv = styled(animated.div)`
  width: 80px;
  height: 80px;
  background: #ff6d6d;
  border-radius: 8px;
`
export const CameraFeed = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: #ff6d6d;
  border-radius: 8px;
`
