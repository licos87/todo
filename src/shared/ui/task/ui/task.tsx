import { useState } from 'react';
import classnames from 'classnames';
import styles from './task.module.css'

type TaskProps = {
	title: string,
	descriptions: string,
	dateStart: string,
	dateEnd: string
}

function Task({ title, descriptions, dateStart, dateEnd }: TaskProps) {
	const [isOpened, setIsOpened] = useState(false);
	let descriptionWrapClass = styles.descriptionWrap;
	let descriptionBtnClass = styles.descriptionBtn;
	if (isOpened) {
		descriptionWrapClass += ` ${styles.descriptionWrap_opened}`;
		descriptionBtnClass += ` ${styles.descriptionBtn_opened}`
	}

	function descriptionToggleHandler(e: React.MouseEvent<HTMLElement>) {
		e.preventDefault();
		setIsOpened(!isOpened);
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<button className={descriptionBtnClass} onClick={descriptionToggleHandler}>
				<svg width="30" height="30" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 0C4.81331 0 3.65327 0.358597 2.66658 1.03044C1.67988 1.70229 0.910851 2.65721 0.456725 3.77445C0.00259972 4.89169 -0.11622 6.12107 0.115291 7.30712C0.346802 8.49318 0.918246 9.58264 1.75736 10.4377C2.59648 11.2928 3.66557 11.8752 4.82946 12.1111C5.99335 12.347 7.19974 12.2259 8.2961 11.7631C9.39246 11.3004 10.3295 10.5167 10.9888 9.5112C11.6481 8.50571 12 7.32358 12 6.11428C11.9983 4.49321 11.3656 2.93904 10.2407 1.79277C9.1159 0.646498 7.59077 0.00175331 6 0ZM6 11.2095C5.01109 11.2095 4.0444 10.9107 3.22215 10.3508C2.39991 9.79095 1.75904 8.99518 1.3806 8.06415C1.00217 7.13312 0.903149 6.10863 1.09608 5.12025C1.289 4.13187 1.76521 3.22399 2.46447 2.51141C3.16373 1.79883 4.05465 1.31355 5.02455 1.11695C5.99445 0.92035 6.99979 1.02125 7.91342 1.4069C8.82705 1.79255 9.60794 2.44562 10.1573 3.28352C10.7068 4.12143 11 5.10654 11 6.11428C10.9985 7.46517 10.4713 8.7603 9.53393 9.71552C8.59656 10.6707 7.32564 11.208 6 11.2095ZM8.1215 5.99047L8.8285 6.71094L6.707 8.87285C6.51947 9.06389 6.26517 9.17121 6 9.17121C5.73484 9.17121 5.48053 9.06389 5.293 8.87285L3.1715 6.71094L3.8785 5.99047L5.5 7.64286V3.05714H6.5V7.64286L8.1215 5.99047Z" fill="#0ABC30" />
				</svg>
			</button>
			<div className={descriptionWrapClass}>
				<h4 className={styles.descriptionTitle}>Описание:</h4>
				<p className={styles.descriptionText}>{descriptions}</p>
			</div>
			<span className={styles.date}>{`${dateStart} - ${dateEnd}`}</span>
			<div className={styles.footer}>
				<button className={classnames(styles.footerBtn, styles.footerBtn_done)}>
					<svg width="16" height="19" viewBox="0 0 16 19" fill="#556574" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.946" fillRule="evenodd" clipRule="evenodd" d="M0 12.8092C0 12.2816 0 11.7539 0 11.2263C0.437351 10.559 0.979894 10.3537 1.62763 10.6107C2.48498 11.8445 3.36139 13.0463 4.25687 14.2163C7.61475 9.58703 10.9535 4.92611 14.2731 0.233531C15.7769 -0.291658 16.2986 0.499819 15.8381 2.60796C12.2281 7.67922 8.61808 12.7507 5.00809 17.8219C4.43605 18.2122 3.8935 18.1536 3.38046 17.646C2.22489 16.0522 1.09808 14.44 0 12.8092Z" />
					</svg>
				</button>
				<button className={classnames(styles.footerBtn, styles.footerBtn_remove)}>
					<svg width="18" height="21" viewBox="0 0 18 21" fill="none" stroke="#556574" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.25 4.08997H0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M6.75 8.7251V14.9051" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M11.25 8.7251V14.9051" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M15.75 4.08997V18.7676C15.75 18.9724 15.671 19.1689 15.5303 19.3138C15.3897 19.4587 15.1989 19.5401 15 19.5401H3C2.80109 19.5401 2.61032 19.4587 2.46967 19.3138C2.32902 19.1689 2.25 18.9724 2.25 18.7676V4.08997" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M12.75 4.09002V2.54501C12.75 2.13525 12.592 1.74227 12.3107 1.45252C12.0294 1.16278 11.6478 1 11.25 1H6.75C6.35218 1 5.97064 1.16278 5.68934 1.45252C5.40804 1.74227 5.25 2.13525 5.25 2.54501V4.09002" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
			</div >
		</div >
	)
}

export default Task;
