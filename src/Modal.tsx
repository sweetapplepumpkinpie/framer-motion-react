import { motion, AnimatePresence } from "framer-motion"
import { useSpring } from "@react-spring/web"

import {
  ModalContainer,
  ModalBox,
  CloseButton,
  SwitchButton,
  ModalHeader,
  ModalFooter,
  ModalBody,
  AnimateDiv,
} from "./Styles"
import { useAppStore } from "./store"

export const Modal = () => {
  const { isOpen, close, switchCamera } = useAppStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalContainer isOpen={isOpen}>
          <motion.div
            className='modal'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={close}
          ></motion.div>
          <ModalBox
            initial={{
              y: 0,
              opacity: 0,
            }}
            animate={{
              y: 50,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <ModalHeader>
              <h1>Camera Feed Modal</h1>
            </ModalHeader>
            <ModalBody>
              <p>View the camera feed below.</p>

              <div>
                {/* This is where the camera feed will be displayed. */}
              </div>
            </ModalBody>
            <ModalFooter>
              <div>
                <SwitchButton
                  initial={{
                    scale: 1,
                    opacity: 1,
                  }}
                  whileTap={{
                    scale: 0.95,
                    opacity: 0.5,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  onClick={switchCamera}
                  className='mr-2'
                >
                  Switch camera feed
                </SwitchButton>
                <CloseButton
                  initial={{
                    scale: 1,
                    opacity: 1,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.95,
                    opacity: 0.5,
                  }}
                  onClick={close}
                >
                  Close modal
                </CloseButton>
              </div>
            </ModalFooter>
          </ModalBox>
        </ModalContainer>
      )}
    </AnimatePresence>
  )
}
