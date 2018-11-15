import React, { Component } from 'react';
import './Ateball.css'
import axios from 'axios'

class Ateball extends Component {
  state = {
    ateballRise: 'ateball',
    triangleShow: 'ateball-triangle',
    titleShow: 'ateball-title',
    restaurantName: '',
    website:
      'https://www.google.com/maps/search/?api=1&query=',
    clicked: false
  }

  shake = () => {
    //if user is logged in
    if (this.props.user.food1) {
      this.ateBallMain()
      this.setState({
        ateballRise: 'ateball ateball-shake',
        triangleShow: 'ateball-triangle ateball-triangle-show'
      })
    } else {
      console.log('user not logged in. Ball will not work')
    }
  }


  ateBallMain = () => {
    //if user is logged in
    if (this.props.user.food1) {
      //and we have location of user
      if (this.props.latitude && this.props.longitude) {
        //get the randomRestaurant using coordinates
        console.log(`&latitude=${this.props.latitude}&longitude=${this.props.longitude}`)
        this.randomRestaurant(`&latitude=${this.props.latitude}&longitude=${this.props.longitude}`)
      //but if we have don't have coordinates but we do have the zip code
      } else if (this.props.zip) {
        //get the randomRestaurant using zip code
        console.log(`&location=${this.props.zip}`)
        this.randomRestaurant(`&location=${this.props.zip}`)
      //if user is logged in but we don't have the zip
      } else {
        console.log('please enter a zip')
      }
    //if user is not logged in
    } else {
      console.log('you are not logged in,')
    }
  }

  randomRestaurant = (extension) => {
    let userFoods = [this.props.user.food1,this.props.user.food2,this.props.user.food3,this.props.user.food4,this.props.user.food5,this.props.user.food6]

    axios.post('/api/yelp', {
      foodChoice: userFoods[Math.floor(Math.random() * userFoods.length)],
      extension: extension
    }).then(response => {
      let restaurant = response.data.businesses[Math.floor(Math.random() * response.data.businesses.length)]
      console.log(restaurant)
      this.setState({
        restaurantName: restaurant.name,
        titleShow: 'ateball-title ateball-title-show',
        website: this.state.website + restaurant.location.address1,
        clicked: true
      })
    })
  }

  componentDidMount() {
    this.stars()
    this.setState({
      ateballRise: 'ateball ateball-rise'
    })

    window.addEventListener("resize", this.stars);
  }
    stars = () => {
      //Stars Canvas from Giana at codepen => https://codepen.io/giana/pen/qbWNYy
      var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      w = canvas.width = window.innerWidth,
      h = canvas.height = window.innerHeight,
    
      hue = 217,
      stars = [],
      count = 0,
      maxStars = 500;

      var canvas2 = document.createElement('canvas'),
          ctx2 = canvas2.getContext('2d');
          canvas2.width = 100;
          canvas2.height = 100;
      var half = canvas2.width/2,
          gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
          gradient2.addColorStop(0.025, '#fff');
          gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
          gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
          gradient2.addColorStop(1, 'transparent');

          ctx2.fillStyle = gradient2;
          ctx2.beginPath();
          ctx2.arc(half, half, half, 0, Math.PI * 2);
          ctx2.fill();

      function random(min, max) {
        if (arguments.length < 2) {
          max = min;
          min = 0;
        }
        
        if (min > max) {
          var hold = max;
          max = min;
          min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function maxOrbit(x,y) {
        var max = Math.max(x,y),
            diameter = Math.round(Math.sqrt(max*max + max*max));
        return diameter/2;
      }

      var Star = function() {

        this.orbitRadius = random(maxOrbit(w,h));
        this.radius = random(60, this.orbitRadius) / 12;
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 50000;
        this.alpha = random(2, 10) / 10;

        count++;
        stars[count] = this;
      }

      Star.prototype.draw = function() {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
          ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
      }

      for (var i = 0; i < maxStars; i++) {
        new Star();
      }

      function animation() {
          ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = 0.8;
          ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
          ctx.fillRect(0, 0, w, h)
        
        ctx.globalCompositeOperation = 'lighter';
        for (var i = 1, l = stars.length; i < l; i++) {
          stars[i].draw();
        };  
        
        window.requestAnimationFrame(animation);
          }
      animation();
  }
  render() {
    return (
      <div className="wrap">
      <h1 className={this.state.titleShow}>The AteBall has decided. You will go to...</h1>
      {this.state.clicked? <div className={this.state.ateballRise}><div className={this.state.triangleShow}><a target="_blank" rel="noopener noreferrer" href={this.state.website}>{this.state.restaurantName}</a></div></div> : <div onClick={this.shake} className={this.state.ateballRise}><div className={this.state.triangleShow}><a href={this.state.website}>{this.state.restaurantName}</a></div></div>}
      <canvas id="canvas">
      </canvas>
      </div>
    );
  }
}

export default Ateball;