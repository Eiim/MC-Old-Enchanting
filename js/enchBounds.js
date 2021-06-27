document.addEventListener('DOMContentLoaded', (event) => {
  const boundsTable = `
<a onclick="document.getElementById('lvalTab').style.display = document.getElementById('lvalTab').style.display === 'none' ? '' : 'none'; document.getElementById('lvalTabArrow').textContent = document.getElementById('lvalTabArrow').textContent === '&#9660;' ? '&#9654;' : '&#9660;'"><span id="lvalTabArrow">&#9654;</span> l-value table</a>
<div id="lvalTab" style="display:none">
<table>
	<tr>
		<th>Enchantment</th>
		<th>Min l</th>
		<th>Max l</th>
	</tr>
	<tr>
		<td>Sharpness 1</td>
		<td>1</td>
		<td>21</td>
	</tr>
	<tr>
		<td>Sharpness 2</td>
		<td>17</td>
		<td>37</td>
	</tr>
	<tr>
		<td>Sharpness 3</td>
		<td>33</td>
		<td>53</td>
	</tr>
	<tr>
		<td>Sharpness 4</td>
		<td>49</td>
		<td>69</td>
	</tr>
	<tr>
		<td>Sharpness 5</td>
		<td>65</td>
		<td>85</td>
	</tr>
	<tr>
		<td>Efficiency 1</td>
		<td>1</td>
		<td>61</td>
	</tr>
	<tr>
		<td>Efficiency 2</td>
		<td>16</td>
		<td>71</td>
	</tr>
	<tr>
		<td>Efficiency 3</td>
		<td>31</td>
		<td>81</td>
	</tr>
	<tr>
		<td>Efficiency 4</td>
		<td>46</td>
		<td>91</td>
	</tr>
	<tr>
		<td>Efficiency 5</td>
		<td>61</td>
		<td>101</td>
	</tr>
	<tr>
		<td>Unbreaking 1</td>
		<td>5</td>
		<td>61</td>
	</tr>
	<tr>
		<td>Unbreaking 2</td>
		<td>15</td>
		<td>71</td>
	</tr>
	<tr>
		<td>Unbreaking 3</td>
		<td>25</td>
		<td>81</td>
	</tr>
	<tr>
		<td>Unbreaking 4</td>
		<td>35</td>
		<td>91</td>
	</tr>
	<tr>
		<td>Unbreaking 5</td>
		<td>45</td>
		<td>101</td>
	</tr>
	<tr>
		<td>Fire Aspect 1</td>
		<td>10</td>
		<td>61</td>
	</tr>
	<tr>
		<td>Fire Aspect 2</td>
		<td>30</td>
		<td>71</td>
	</tr>
	<tr>
		<td>Knockback 1</td>
		<td>5</td>
		<td>61</td>
	</tr>
	<tr>
		<td>Knockback 2</td>
		<td>25</td>
		<td>71</td>
	</tr>
	<tr>
		<td>Fortune 1</td>
		<td>20</td>
		<td>61</td>
	</tr>
	<tr>
		<td>Fortune 2</td>
		<td>32</td>
		<td>71</td>
	</tr>
	<tr>
		<td>Looting 1</td>
		<td>20</td>
		<td>61</td>
	</tr>
	<tr>
		<td>Looting 2</td>
		<td>32</td>
		<td>71</td>
	</tr>
	<tr>
		<td>Respiration 1</td>
		<td>10</td>
		<td>40</td>
	</tr>
	<tr>
		<td>Respiration 2</td>
		<td>20</td>
		<td>50</td>
	</tr>
	<tr>
		<td>Respiration 3</td>
		<td>30</td>
		<td>60</td>
	</tr>
	<tr>
		<td>Protection 1</td>
		<td>1</td>
		<td>21</td>
	</tr>
	<tr>
		<td>Protection 2</td>
		<td>17</td>
		<td>37</td>
	</tr>
	<tr>
		<td>Protection 3</td>
		<td>33</td>
		<td>53</td>
	</tr>
	<tr>
		<td>Protection 4</td>
		<td>49</td>
		<td>69</td>
	</tr>
	<tr>
		<td>Fire Protection 1</td>
		<td>10</td>
		<td>22</td>
	</tr>
	<tr>
		<td>Fire Protection 2</td>
		<td>18</td>
		<td>30</td>
	</tr>
	<tr>
		<td>Fire Protection 3</td>
		<td>26</td>
		<td>38</td>
	</tr>
	<tr>
		<td>Fire Protection 4</td>
		<td>34</td>
		<td>46</td>
	</tr>
	<tr>
		<td>Feather Falling 1</td>
		<td>5</td>
		<td>15</td>
	</tr>
	<tr>
		<td>Feather Falling 2</td>
		<td>11</td>
		<td>21</td>
	</tr>
	<tr>
		<td>Feather Falling 3</td>
		<td>17</td>
		<td>27</td>
	</tr>
	<tr>
		<td>Feather Falling 4</td>
		<td>33</td>
		<td>43</td>
	</tr>
	<tr>
		<td>Blast Protection 1</td>
		<td>5</td>
		<td>17</td>
	</tr>
	<tr>
		<td>Blast Protection 2</td>
		<td>13</td>
		<td>25</td>
	</tr>
	<tr>
		<td>Blast Protection 3</td>
		<td>21</td>
		<td>33</td>
	</tr>
	<tr>
		<td>Blast Protection 4</td>
		<td>29</td>
		<td>41</td>
	</tr>
	<tr>
		<td>Projectile Protection 1</td>
		<td>3</td>
		<td>18</td>
	</tr>
	<tr>
		<td>Projectile Protection 2</td>
		<td>9</td>
		<td>26</td>
	</tr>
	<tr>
		<td>Projectile Protection 3</td>
		<td>15</td>
		<td>30</td>
	</tr>
	<tr>
		<td>Projectile Protection 4</td>
		<td>21</td>
		<td>36</td>
	</tr>
	<tr>
		<td>Silk Touch</td>
		<td>25</td>
		<td>61</td>
	</tr>
	<tr>
		<td>Aqua Affinity</td>
		<td>1</td>
		<td>41</td>
	</tr>
</table>
  `
  document.getElementById("enchBounds").innerHTML = boundsTable;
})

const lbounds = {
	"Sharpness 1": {
		"min": 1,
		"max": 21
	},
	"Sharpness 2": {
		"min": 17,
		"max": 37
	},
	"Sharpness 3": {
		"min": 33,
		"max": 53
	},
	"Sharpness 4": {
		"min": 49,
		"max": 69
	},
	"Sharpness 5": {
		"min": 65,
		"max": 85
	},
	"Efficiency 1": {
		"min": 1,
		"max": 61
	},
	"Efficiency 2": {
		"min": 16,
		"max": 71
	},
	"Efficiency 3": {
		"min": 31,
		"max": 81
	},
	"Efficiency 4": {
		"min": 46,
		"max": 91
	},
	"Efficiency 5": {
		"min": 61,
		"max": 101
	},
	"Unbreaking 1": {
		"min": 5,
		"max": 61
	},
	"Unbreaking 2": {
		"min": 15,
		"max": 71
	},
	"Unbreaking 3": {
		"min": 25,
		"max": 81
	},
	"Unbreaking 4": {
		"min": 35,
		"max": 91
	},
	"Unbreaking 5": {
		"min": 45,
		"max": 101
	},
	"Fire Aspect 1": {
		"min": 10,
		"max": 61
	},
	"Fire Aspect 2": {
		"min": 30,
		"max": 71
	},
	"Knockback 1": {
		"min": 5,
		"max": 61
	},
	"Knockback 2": {
		"min": 25,
		"max": 71
	},
	"Fortune 1": {
		"min": 20,
		"max": 61
	},
	"Fortune 2": {
		"min": 32,
		"max": 71
	},
	"Looting 1": {
		"min": 20,
		"max": 61
	},
	"Looting 2": {
		"min": 32,
		"max": 71
	},
	"Respiration 1": {
		"min": 10,
		"max": 40
	},
	"Respiration 2": {
		"min": 20,
		"max": 50
	},
	"Respiration 3": {
		"min": 30,
		"max": 60
	},
	"Protection 1": {
		"min": 1,
		"max": 21
	},
	"Protection 2": {
		"min": 17,
		"max": 37
	},
	"Protection 3": {
		"min": 33,
		"max": 53
	},
	"Protection 4": {
		"min": 49,
		"max": 69
	},
	"Fire Protection 1": {
		"min": 10,
		"max": 22
	},
	"Fire Protection 2": {
		"min": 18,
		"max": 30
	},
	"Fire Protection 3": {
		"min": 26,
		"max": 38
	},
	"Fire Protection 4": {
		"min": 34,
		"max": 46
	},
	"Feather Falling 1": {
		"min": 5,
		"max": 15
	},
	"Feather Falling 2": {
		"min": 11,
		"max": 21
	},
	"Feather Falling 3": {
		"min": 17,
		"max": 27
	},
	"Feather Falling 4": {
		"min": 33,
		"max": 43
	},
	"Blast Protection 1": {
		"min": 5,
		"max": 17
	},
	"Blast Protection 2": {
		"min": 13,
		"max": 25
	},
	"Blast Protection 3": {
		"min": 21,
		"max": 33
	},
	"Blast Protection 4": {
		"min": 29,
		"max": 41
	},
	"Projectile Protection 1": {
		"min": 3,
		"max": 18
	},
	"Projectile Protection 2": {
		"min": 9,
		"max": 26
	},
	"Projectile Protection 3": {
		"min": 15,
		"max": 30
	},
	"Projectile Protection 4": {
		"min": 21,
		"max": 36
	},
	"Silk Touch": {
		"min": 25,
		"max": 61
	},
	"Aqua Affinity": {
		"min": 1,
		"max": 41
	}
}