// Задание №1
var data = {
    name: "побыстрее",
    releaseDate: '22.02.2022',
    mainActor: 'Боб Снорег',
    episodes: {
        ep1: 'Где мои деньги?',
        ep2: 'Ну как там с деньгами?',
        ep3: 'Коллектор за дверью'
    }
}

console.log("Сериал '" + data.name + "', был выпущен " + data.releaseDate + " года.\n" +
    "В главных ролях " + data.mainActor + "." + "В '" + data.name + "' 3 эпизодов\n" +
    "Сериал получился неудачным такой себе сюжет и актер отказался сниматься дальше сказав: моя честь не стоит того.")


// Задание №2
var monday = 'Monday'
var tuesday = 'Tuesday'
var Wednesday = 'Wednesday'
var thursday = 'Thursday'
var friday = 'Friday'
var saturday = 'Saturday'
var sunday = 'Sunday'

switch (sunday) {
    case 'Monday':
    case 'monday':
        console.log('понедельник')
        break
    case 'Tuesday':
    case 'tuesday':
        console.log('вторник')
        break
    case 'Wednesday':
    case 'wednesday':
        console.log('среда')
        break
    case 'Thursday':
    case 'thursday':
        console.log('четверг')
        break
    case 'Friday':
    case 'friday':
        console.log('пятница')
        break
    case 'Saturday':
    case 'saturday':
        console.log('суббота')
        break
    case 'Sunday':
    case 'sunday':
        console.log('воскресение')
        break
}
