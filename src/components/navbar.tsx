"use client";
import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem as ChakraMenuItem,
  MenuList,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useCycle, motion } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "./use-dimensions";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
  const pathname = usePathname();

  return (
    <motion.li
      variants={menuItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.menuItem}
    >
      <a
        href={href}
        className={styles.menuItem}
        style={{ color: pathname === href ? "#FF7B00" : "inherit" }}
      >
        {label}
      </a>
    </motion.li>
  );
};

const menuItemsMobile = [
  { href: "/", label: "home" },
  { href: "/work/telus", label: "telus" },
  { href: "/work/ips", label: "ips" },
  { href: "/work/rbc", label: "rbc" },
  { href: "/fun/design", label: "design" },
  { href: "/fun/travels", label: "travels" },
  { href: "/fun/blog", label: "blog" },
  { href: "/about", label: "about" },
];

const navigationVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button onClick={toggle} style={buttonStyles} aria-label="toggle menu">
    <svg width="22" height="21" viewBox="0 0 22 22">
      {["M 2 2.5 L 20 2.5", "M 2 9.423 L 20 9.423", "M 2 16.346 L 20 16.346"].map(
        (d, i) => (
          <Path
            key={i}
            d={d}
            variants={{
              closed: { d },
              open: { d: i === 0 ? "M 3 16.5 L 17 2.5" : i === 2 ? "M 3 2.5 L 17 16.346" : undefined },
              ...(i === 1 && { open: { opacity: 0 }, closed: { opacity: 1 } }),
            }}
            transition={{ duration: 0.1 }}
          />
        )
      )}
    </svg>
  </button>
);

const buttonStyles = {
  outline: "none",
  border: "none",
  cursor: "pointer",
  position: "fixed" as const,
  top: "37px",
  right: "67px",
  width: "22px",
  height: "18px",
  borderRadius: "50%",
  background: "transparent",
  zIndex: 102,
};

const navButtonStyles = {
  size: "lg",
  variant: "ghost",
  bg: "transparent",
  _hover: { color: "#FF7B00" },
  _active: { bg: "#FFF4DF" },
};

const menuItemsDesktop = [
  { label: "work", items: [{ href: "/work/telus", label: "telus 🗼" }, { href: "/work/ips", label: "ips 🎧" }, { href: "/work/rbc", label: "rbc 🏦" }] },
  { label: "fun", items: [{ href: "/fun/design", label: "design 🎨" }, { href: "/fun/travels", label: "travels ✈️" }, { href: "/fun/blog", label: "blog 📝" }] },
];

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${Math.max(window.innerWidth, window.innerHeight) * 2}px at calc(100% - 78px) calc(46px))`,
    transition: { type: "spring", stiffness: 20, restDelta: 2 },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 78px) calc(46px))",
    transition: { delay: 0.4, type: "spring", stiffness: 400, damping: 40 },
  },
};

export default function Navbar() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const pathname = usePathname();

  return (
    <Container maxW="80rem" px={12} pos="absolute" left="50%" transform="translateX(-50%)" zIndex="101">
      <Flex py={4} alignItems="center" justifyContent="space-between">
        <Link href="/" passHref>
          <Heading as="span" fontSize="xxx-large" _hover={{ color: "#FF7B00" }} aria-label="home">AZ</Heading>
        </Link>

        {isMobile ? (
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            style={{ position: 'relative', width: '100vw' }}
          >
            <motion.div className={styles.background} variants={sidebarVariants} />
            <Flex
              h="100vh"
              w="100vw"
              justifyContent="center"
              alignItems="center"
              pos="fixed"
              top="0"
              left="0"
              width="100%"
              zIndex="101"
              style={{ 
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'auto' : 'none',
                transition: 'opacity 0.3s ease'
              }}
            >
              <VStack as={motion.ul} variants={navigationVariants} spacing={8} align={'center'}>
                {menuItemsMobile.map((item, i) => (
                  <MenuItem key={i} label={item.label} href={item.href} />
                ))}
              </VStack>
            </Flex>
            <MenuToggle toggle={toggleOpen} />
          </motion.nav>
        ) : (
          <HStack spacing={1}>
            <Link href="/" passHref>
              <Button {...navButtonStyles} as="span" aria-label="home" sx={{ color: pathname === '/' ? '#FF7B00' : 'inherit' }}>
                home
              </Button>
            </Link>
            {menuItemsDesktop.map(({ label, items }) => (
              <Menu key={label}>
                <MenuButton as={Button} {...navButtonStyles} rightIcon={<ChevronDownIcon />} aria-label={label}>
                  {label}
                </MenuButton>
                <MenuList minW="auto">
                  {items.map(({ href, label }) => (
                    <ChakraMenuItem as={Link} href={href} key={href} bg="transparent" _hover={{ color: "#FF7B00" }} sx={{ color: pathname === href ? '#FF7B00' : 'inherit' }}>
                      {label}
                    </ChakraMenuItem>
                  ))}
                </MenuList>
              </Menu>
            ))}
            <Link href="/about" passHref>
              <Button {...navButtonStyles} as="span" aria-label="about" sx={{ color: pathname === '/about' ? '#FF7B00' : 'inherit' }}>
                about
              </Button>
            </Link>
          </HStack>
        )}
      </Flex>
    </Container>
  );
}
