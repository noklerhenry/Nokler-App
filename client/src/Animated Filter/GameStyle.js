import styled from 'styled-components';
import { motion } from "framer-motion/dist/framer-motion";


export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;


export const Title = styled.h2`
  font-size: 0.7rem;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;


export const GameCont = styled(motion.div)`
 margin-bottom: 2px;
`;
