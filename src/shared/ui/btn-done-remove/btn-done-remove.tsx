import styles from './btn-done-remove.module.css';

type BtnDoneRemoveProps = {
	type: 'done' | 'remove'
}


function BtnDoneRemove({ type }: BtnDoneRemoveProps) {
	let btnClass = styles.btn;

	if (type === 'done') {
		btnClass += ` ${styles.btn_done}`;
	}

	if (type === 'remove') {
		btnClass += ` ${styles.btn_remove}`;
	}

	return (
		<button className={btnClass}>
			{
				type === 'done' && <svg width="16" height="19" viewBox="0 0 16 19" fill="#556574" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.946" fillRule="evenodd" clipRule="evenodd" d="M0 12.8092C0 12.2816 0 11.7539 0 11.2263C0.437351 10.559 0.979894 10.3537 1.62763 10.6107C2.48498 11.8445 3.36139 13.0463 4.25687 14.2163C7.61475 9.58703 10.9535 4.92611 14.2731 0.233531C15.7769 -0.291658 16.2986 0.499819 15.8381 2.60796C12.2281 7.67922 8.61808 12.7507 5.00809 17.8219C4.43605 18.2122 3.8935 18.1536 3.38046 17.646C2.22489 16.0522 1.09808 14.44 0 12.8092Z" />
				</svg>
			}
			{
				type === 'remove' && <svg width="18" height="21" viewBox="0 0 18 21" fill="none" stroke="#556574" xmlns="http://www.w3.org/2000/svg">
					<path d="M17.25 4.08997H0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M6.75 8.7251V14.9051" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M11.25 8.7251V14.9051" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M15.75 4.08997V18.7676C15.75 18.9724 15.671 19.1689 15.5303 19.3138C15.3897 19.4587 15.1989 19.5401 15 19.5401H3C2.80109 19.5401 2.61032 19.4587 2.46967 19.3138C2.32902 19.1689 2.25 18.9724 2.25 18.7676V4.08997" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M12.75 4.09002V2.54501C12.75 2.13525 12.592 1.74227 12.3107 1.45252C12.0294 1.16278 11.6478 1 11.25 1H6.75C6.35218 1 5.97064 1.16278 5.68934 1.45252C5.40804 1.74227 5.25 2.13525 5.25 2.54501V4.09002" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			}
		</button >
	)
}

export default BtnDoneRemove;
