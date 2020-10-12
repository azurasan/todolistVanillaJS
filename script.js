const input = document.querySelector('#input');
const btnAdd = document.querySelector('.btn-add');
const listItems = document.querySelector('.list-items');

btnAdd.addEventListener('click',()=>{
	// buat item baru
	let item =  `<div class="item">
            		<p class="text-item">${input.value}</p>
            		<div class="buttons">
            			<p class="checklist">&#10003</p>
            			<p class="btn-close">x</p>
            		</div>
            	</div>`
    // tambahkan elemen item yg baru dibuat ke dalam listItems menggunakan insertAdjacentHTML('posisi peletakan elemen',element yg ingin diletakkan)
    listItems.insertAdjacentHTML('afterbegin',item);

    // kosongkan value input 
    input.value = '';

    // seleksi tombol checklist
    const checklist = document.querySelector('.checklist');
    // ketika tombol checklist ditekan, item akan tercoret(list telah dilakukan)
    checklist.addEventListener('click',function(){
    	// seleksi teks yg berisi input value yg telah diinput oleh user
    	let textItem = this.parentElement.previousElementSibling;
    	textItem.classList.toggle('done');
    });

    // seleksi tombol close
	const btnClose = document.querySelector('.btn-close');
	// ketika tombol close ditekan, hapus item tersebut
    btnClose.addEventListener('click',function(){
		this.parentElement.parentElement.remove();
	});

});

