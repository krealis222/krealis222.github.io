function updateProfile() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const menuGradient1 = document.getElementById('menuGradient1').value;
    const menuGradient2 = document.getElementById('menuGradient2').value;

    document.getElementById('displayFirstName').textContent = `Имя: ${firstName}`;
    document.getElementById('displayLastName').textContent = `Фамилия: ${lastName}`;
    document.getElementById('displayGender').textContent = `Пол: ${gender === 'male' ? 'Мужской' : 'Женский'}`;

    document.getElementById('menuContainer').style.background = `linear-gradient(135deg, ${menuGradient1} 0%, ${menuGradient2} 100%)`;
}
