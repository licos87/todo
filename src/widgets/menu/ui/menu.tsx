import styles from './menu.module.css';

function Menu() {
	return (
		<section className={styles.menu} >
			<img className={styles.appIcon} src='./src/shared/assets/image/llS.svg' alt='Иконка приложения' />
			<ul className={styles.menu_list}>
				<li className={styles.menu_listItem}>
					<button className={styles.calendar}>
						<svg className={styles.month} width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#474A55"><path d="M19.5 2H18V.5a.5.5 0 0 0-1 0V2H7V.5a.5.5 0 0 0-1 0V2H4.5A4.5 4.5 0 0 0 0 6.5v13A4.5 4.5 0 0 0 4.5 24h1a.5.5 0 0 0 0-1h-1A3.5 3.5 0 0 1 1 19.5V9h22v4.5a.5.5 0 0 0 1 0v-7A4.5 4.5 0 0 0 19.5 2ZM1 8V6.5A3.5 3.5 0 0 1 4.5 3h15A3.5 3.5 0 0 1 23 6.5V8H1Z" /><path d="M8.23 22.29a.42.42 0 0 1-.31-.11.42.42 0 0 1-.11-.31v-.66l.23.23h-.25c-.66 0-1.23-.12-1.7-.37s-.84-.6-1.1-1.04a3.25 3.25 0 0 1-.38-1.61c0-.47.07-.9.21-1.27.14-.37.35-.69.62-.94.27-.26.6-.46 1-.59.4-.14.84-.21 1.35-.21h.25l-.23.23v-.61c0-.14.04-.24.11-.31a.42.42 0 0 1 .31-.11c.13 0 .23.04.3.11.07.07.11.17.11.31v.61l-.22-.23h.25c.67 0 1.25.12 1.72.36s.83.59 1.08 1.04c.25.45.37.98.37 1.61 0 .47-.07.89-.22 1.26a2.5 2.5 0 0 1-.62.95c-.27.26-.6.46-1 .6-.4.14-.84.21-1.33.21h-.25l.22-.23v.66c0 .13-.03.24-.1.31s-.17.11-.31.11Zm-.41-1.34V15.9l.2.17h-.35c-.33 0-.64.05-.91.16-.27.1-.5.25-.7.45-.2.2-.34.45-.45.74-.1.29-.15.62-.15 1 0 .49.1.9.28 1.26.19.35.45.62.78.81.33.19.72.28 1.15.28h.35l-.2.18Zm.82 0-.21-.18h.35c.33 0 .63-.05.9-.16a1.94 1.94 0 0 0 1.15-1.2c.1-.3.16-.62.16-.99 0-.5-.09-.93-.27-1.28a1.82 1.82 0 0 0-.77-.8 2.39 2.39 0 0 0-1.17-.27h-.35l.21-.17v5.05Zm6.8 1.14c-.5 0-.95-.1-1.32-.3a2.2 2.2 0 0 1-.86-.87 2.8 2.8 0 0 1-.3-1.34c0-.5.1-.95.3-1.32.2-.38.47-.68.82-.89.35-.21.76-.32 1.22-.32.32 0 .62.06.88.17.26.1.48.26.66.47.18.2.32.46.42.75.1.3.15.62.15.99 0 .1-.03.19-.1.24a.42.42 0 0 1-.25.07h-3.48v-.53h3.29l-.16.13c0-.36-.06-.66-.16-.91s-.27-.45-.47-.58c-.2-.13-.46-.2-.76-.2a1.43 1.43 0 0 0-1.4.89c-.12.27-.18.6-.18.96v.06c0 .61.14 1.08.44 1.4.3.32.72.48 1.27.48a2.54 2.54 0 0 0 1.33-.39.4.4 0 0 1 .25-.08c.08 0 .14.02.19.07.04.04.07.1.09.16.02.06.01.13-.02.2a.38.38 0 0 1-.17.19c-.22.16-.48.28-.78.37-.3.09-.6.13-.9.13ZM19.1 22a.42.42 0 0 1-.31-.11.42.42 0 0 1-.11-.31v-4.02c0-.13.03-.24.1-.31a.42.42 0 0 1 .32-.11h1.95c.38 0 .7.05.95.15.24.1.43.24.55.43.12.19.18.42.18.7 0 .3-.11.57-.33.78-.22.21-.5.34-.84.38v-.13c.41.01.73.13.97.35.24.22.36.5.36.86 0 .41-.16.74-.46.98-.31.24-.74.36-1.3.36h-2.03Zm.35-.55h1.65c.32 0 .57-.07.75-.21a.75.75 0 0 0 .27-.62c0-.27-.1-.47-.27-.61a1.17 1.17 0 0 0-.75-.21h-1.65v1.65Zm0-2.2H21c.3 0 .53-.07.7-.21a.7.7 0 0 0 .26-.58.68.68 0 0 0-.26-.57 1.1 1.1 0 0 0-.7-.2h-1.56v1.56Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
					</button>
				</li>
				<li className={styles.menu_listItem}>
					<button className={styles.tasksLists}>
						<svg className={styles.tasksListsIcon} width="24" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill-rule="evenodd" clip-rule="evenodd" fill="#474A55"><path opacity=".96" d="M-.02 3.83v-.38c.2-.23.43-.27.7-.11l.91.84L5.37.73c.35-.11.57 0 .65.34a.74.74 0 0 1-.16.32L1.9 5.01a.55.55 0 0 1-.56.04L-.02 3.83Z" /><path opacity=".95" d="M-.02 11.11v-.38c.15-.16.34-.2.56-.15.35.28.7.57 1.03.88 1.24-1.12 2.48-2.24 3.7-3.37.37-.17.6-.08.7.28 0 .1-.02.18-.06.26l-4.1 3.75a.51.51 0 0 1-.52-.05c-.45-.4-.89-.8-1.31-1.22ZM7.67 9.44c.32.08.44.27.36.56a.44.44 0 0 1-.26.2c-.82.08-1.08.47-.79 1.17.26.27.59.37.98.3h14.1c.64.06 1.01-.19 1.1-.75-.11-.54-.48-.78-1.1-.7-3.78 0-7.55 0-11.33-.05-.18-.13-.23-.3-.16-.51.09-.12.2-.2.35-.22 3.85 0 7.69 0 11.53.02.78.1 1.29.47 1.53 1.14v.68c-.24.67-.75 1.05-1.53 1.14-4.98.03-9.95.03-14.92 0-.95-.13-1.46-.62-1.53-1.48.1-.91.65-1.41 1.67-1.5Z" /><path d="M9.77 10.17a.47.47 0 0 1-.37 0 .49.49 0 0 1-.21-.21c0-.4.21-.54.63-.41.2.23.18.43-.05.62Z" /><path opacity=".95" d="M7.68 17c.31.08.43.27.35.56a.44.44 0 0 1-.26.2c-.82.08-1.08.47-.79 1.17.26.27.59.37.98.3H22.1c.63.06 1-.19 1.1-.75-.12-.54-.49-.78-1.1-.7-3.79 0-7.57 0-11.35-.05-.18-.13-.24-.3-.17-.51.1-.12.21-.2.36-.22 3.85 0 7.7 0 11.54.02.78.1 1.29.47 1.53 1.14v.68c-.24.67-.75 1.05-1.53 1.14-4.98.03-9.96.03-14.94 0-.95-.13-1.46-.62-1.53-1.48.1-.91.65-1.41 1.68-1.5Z" /><path d="M9.42 17.73a.47.47 0 0 1-.37 0 .49.49 0 0 1-.21-.21c0-.4.21-.54.63-.41.2.23.18.43-.05.62Z" /><path opacity=".95" d="M7.68 2c.31.08.43.27.35.56a.44.44 0 0 1-.26.2c-.82.08-1.08.47-.79 1.17.26.27.59.37.98.3H22.1c.63.06 1-.19 1.1-.75-.12-.54-.49-.78-1.1-.7-3.79 0-7.57 0-11.35-.05-.18-.13-.24-.3-.17-.51.1-.12.21-.2.36-.22 3.85 0 7.7 0 11.54.02.78.1 1.29.47 1.53 1.14v.68c-.24.67-.75 1.05-1.53 1.14-4.98.03-9.96.03-14.94 0C6.58 4.85 6.07 4.36 6 3.5c.1-.91.65-1.41 1.68-1.5Z" /><path d="M9.42 2.73a.47.47 0 0 1-.37 0 .49.49 0 0 1-.21-.21c0-.4.21-.54.63-.41.2.23.18.43-.05.62Z" /><path opacity=".95" d="M-.02 18.44v-.39a.6.6 0 0 1 .6-.15l.99.88 3.75-3.4c.56-.13.76.06.59.57l-4.06 3.7a.6.6 0 0 1-.6-.04c-.44-.38-.86-.78-1.27-1.17Z" /></g><defs><clipPath id="a"><path fill="#474A55" d="M0 0h24v21.93H0z" /></clipPath></defs></svg>
					</button>
				</li>
			</ul>
			<button className={styles.info}>
				<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#474A55"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" /><path d="M12 10h-1a1 1 0 0 0 0 2h1v6a1 1 0 0 0 2 0v-6a2 2 0 0 0-2-2ZM12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
			</button>
		</section >
	)
}

export default Menu;
