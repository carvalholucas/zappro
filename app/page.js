"use client";

import { useState, useRef } from "react";

const Home = () => {
	const [quantityChar, setQuantityChar] = useState(0);
	const [phoneWithMask, setPhoneWithMask] = useState("");
	const [link, setLink] = useState({});
	const phoneRef = useRef(null);
	const messageRef = useRef(null);

	const onGenerateLink = () => {
		const phone = phoneRef.current.value.replace(/[^0-9]+/g, "");
		const message = messageRef.current.value;

		const anchor = `https://wa.me/${phone}?text=${message}`;

		setLink((prev) => ({ ...prev, anchor }));

		handleGenerateString();
	};

	const handleGenerateString = () => {
		const slug = Math.random().toString(36).substring(2, 8);
		setLink((prev) => ({ ...prev, slug }));
	};

	const onCountCharacters = (value) => {
		setQuantityChar(value.length);
	};

	const phoneMask = (value) => {
		const newValue = value
			.replace(/\D/g, "")
			.replace(/(\d{2})(\d)/, "($1) $2")
			.replace(/(\d)(\d{4})$/, "$1-$2");

		setPhoneWithMask(newValue);
	};

	return (
		<main className="flex min-h-screen bg-white">
			<section className="w-2/5 p-10">
				<div className="flex flex-col justify-between h-full">
					<p className="text-green-600 font-bold text-xl">Zappro</p>
					<div>
						<p className="text-gray-900 font-light mb-2">
							Simples, rápido e fácil.
						</p>
						<h1 className="text-black font-bold text-2xl mb-16">
							Gerador de link para WhatsApp
						</h1>

						<p className="text-gray-600 font-thin mb-16 leading-8	">
							Informe seu número de whatsapp, uma mensagem para iniciar a
							conversa, gere o link e compartilhe nas suas redes sociais.
						</p>

						<form className="flex flex-col">
							<div className="flex flex-col mb-8">
								<label className="text-black font-medium text-xs mb-4">
									Número do WhatsApp*
								</label>
								<input
									type="text"
									ref={phoneRef}
									value={phoneWithMask}
									className="bg-gray-100 border-[1px] border-gray-300 text-black text-sm w-2/4 rounded-md p-2"
									placeholder="(00) 0 0000-0000"
									maxLength={15}
									onChange={(e) => phoneMask(e.target.value)}
								/>
							</div>

							<div className="flex flex-col mb-12">
								<label className="text-black font-medium text-xs mb-4">
									Mensagem (Opcional)
								</label>
								<textarea
									ref={messageRef}
									rows="4"
									className="bg-gray-100 border-[1px] border-gray-300 text-black text-sm p-4 rounded-md resize-none"
									placeholder="Crie uma mensagem que facilite a comunicação com o seu cliente"
									maxLength={250}
									onChange={(e) => onCountCharacters(e.target.value)}
								></textarea>
								{quantityChar > 0 && (
									<span className="text-gray-700 text-xs font-semibold mt-2 self-end">
										{quantityChar}/250
									</span>
								)}
							</div>
						</form>
						<button
							className="bg-green-800 text-white p-4 rounded-md w-full text-sm"
							type="submit"
							onClick={onGenerateLink}
						>
							Gere seu link grátis
						</button>

						{link?.slug && (
							<a href={link?.anchor}>
								<p className="text-green-700 text-base font-medium mt-6 underline">{`zappro.link/${link?.slug}`}</p>
							</a>
						)}
					</div>
				</div>
			</section>
			<section className="flex-1 bg-green-950"></section>
		</main>
	);
};

export default Home;
